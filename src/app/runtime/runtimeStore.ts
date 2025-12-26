import { atom } from "jotai";
import { BootstrapConfig, DEFAULT_BOOTSTRAP_CONFIG } from "../bootstrap/schema";

// --- ROOT STATE ---
export const bootstrapAtom = atom<BootstrapConfig>(DEFAULT_BOOTSTRAP_CONFIG);

export const appStatusAtom = atom<{ loading: boolean; error: string | null }>({
  loading: true,
  error: null,
});

// --- DERIVED ATOMS (READ ONLY) ---

// 1. Modules
export const modulesAtom = atom((get) => get(bootstrapAtom).modules);

// 2. Navigation
export const navigationAtom = atom((get) => get(bootstrapAtom).ui.navigation);

// 3. Layout (Home)
export const layoutConfigAtom = atom((get) => get(bootstrapAtom).ui.layout);

// 4. Texts
export const textConfigAtom = atom((get) => get(bootstrapAtom).ui.texts);

// 5. Theme
export const themeAtom = atom((get) => get(bootstrapAtom).theme);

// 6. Security (JWT)
export const securityAtom = atom((get) => get(bootstrapAtom).security);

// --- HELPERS ---
export const isModuleEnabled = (config: BootstrapConfig, moduleKey: string): boolean => {
    const mod = config.modules[moduleKey];
    return mod ? mod.enabled : false; 
};
