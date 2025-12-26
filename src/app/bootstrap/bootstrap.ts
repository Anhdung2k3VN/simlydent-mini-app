import { useSetAtom } from "jotai";
import { useEffect } from "react";
import { bootstrapAtom, appStatusAtom } from "../runtime/runtimeStore";
import { BootstrapApi } from "@/services/bootstrapApi";
import { BootstrapCache } from "./cache";
import { VersionGate } from "./versionGate";
import { BootstrapConfig } from "./schema";

const CURRENT_BASE_VERSION = "1.2.0"; // Fallback

export const useBootstrap = () => {
  const setConfig = useSetAtom(bootstrapAtom);
  const setStatus = useSetAtom(appStatusAtom);

  useEffect(() => {
    const run = async () => {
      console.log("[Bootstrap] Step A: Start");
      setStatus({ loading: true, error: null });

      // Step B: Load Cache
      const cachedEntry = BootstrapCache.getWithMeta();
      let activeConfig: BootstrapConfig | null = null;

      if (cachedEntry) {
        console.log("[Bootstrap] Step B: Cache hit");
        activeConfig = cachedEntry.config;
        setConfig(activeConfig);
        setStatus({ loading: false, error: null }); // Render immediately
      }

      // Step C: Fetch SWR
      try {
        console.log("[Bootstrap] Step C: Fetching remote...");
        const remoteConfig = await BootstrapApi.fetchConfig();
        
        // Step D: Version Gate (Using ZMP SDK if available)
        console.log("[Bootstrap] Step D: Version Gate");
        
        // In a real Zalo Mini App, use api.getSystemInfo().version or similar
        // For now, we keep the constant or can fetch from sdk if environment allows
        // import { getSystemInfo } from "zmp-sdk";
        // const { version } = getSystemInfo(); 
        
        const isCompatible = VersionGate.checkBaseVersion(
            remoteConfig.versions.baseMinVersion, 
            CURRENT_BASE_VERSION 
        );

        if (!isCompatible) {
            console.error(`[Bootstrap] Upgrade required. Min: ${remoteConfig.versions.baseMinVersion}, Cur: ${CURRENT_BASE_VERSION}`);
            setStatus({ loading: false, error: "Phiên bản ứng dụng của bạn đã cũ. Vui lòng cập nhật." });
            return;
        }

        // Apply if changed
        const isNewer = !activeConfig || remoteConfig.versions.configVersion > activeConfig.versions.configVersion;
        if (isNewer) {
            console.log("[Bootstrap] Step E: Applying new config", remoteConfig);
            setConfig(remoteConfig);
            BootstrapCache.save(remoteConfig);
            // Re-render UI will happen automatically via Jotai atoms
        } else {
            console.log("[Bootstrap] Config is up to date");
        }
        
      } catch (e: any) {
        console.error("[Bootstrap] Fetch failed", e);
        if (!activeConfig) {
            setStatus({ loading: false, error: "Không thể tải cấu hình ứng dụng. Vui lòng thử lại." });
        }
        // If we have cache, we silently fail and keep using cache
      } finally {
        // Ensure loading is off
        setStatus((prev) => ({ ...prev, loading: false }));
      }
    };

    run();
  }, [setConfig, setStatus]);
};
