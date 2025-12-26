import { BootstrapConfig } from "./schema";

const CACHE_KEY = "miniapp_bootstrap_v2"; // Changed key to avoid conflict

interface CacheEntry {
  config: BootstrapConfig;
  timestamp: number;
}

export const BootstrapCache = {
  get: (): BootstrapConfig | null => {
    try {
      const raw = localStorage.getItem(CACHE_KEY);
      if (!raw) return null;
      
      const entry: CacheEntry = JSON.parse(raw);
      // We don't expire simple read here, we let the caller decide based on TTL
      return entry.config;
    } catch {
      return null;
    }
  },

  getWithMeta: (): CacheEntry | null => {
     try {
      const raw = localStorage.getItem(CACHE_KEY);
      if (!raw) return null;
      return JSON.parse(raw) as CacheEntry;
    } catch {
      return null;
    }
  },

  save: (config: BootstrapConfig) => {
    try {
      const entry: CacheEntry = {
        config,
        timestamp: Date.now()
      };
      localStorage.setItem(CACHE_KEY, JSON.stringify(entry));
    } catch (e) {
      console.warn("Failed to save cache", e);
    }
  },

  isStale: (lastTimestamp: number, ttlSeconds: number): boolean => {
    const elapsedSeconds = (Date.now() - lastTimestamp) / 1000;
    return elapsedSeconds > ttlSeconds;
  },

  clear: () => {
    localStorage.removeItem(CACHE_KEY);
  }
};
