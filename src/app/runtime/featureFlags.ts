import { useAtomValue } from "jotai";
import { modulesAtom } from "./runtimeStore";

export const useFeatureFlag = (moduleKey: string): boolean => {
  const modules = useAtomValue(modulesAtom);
  const mod = modules[moduleKey];
  // Default to false if module not defined? Or true?
  // User req: "bật/tắt module theo gói". If not in enabledModules map, likely disabled or hidden.
  // The JSON has specific keys "booking", "crm".
  // If key missing, assume disabled for safety.
  return mod?.enabled === true;
};
