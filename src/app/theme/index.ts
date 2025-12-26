import { useAtomValue } from "jotai";
import { useEffect } from "react";
import { themeAtom } from "../runtime";

export const useTheme = () => {
  const theme = useAtomValue(themeAtom);

  useEffect(() => {
    const root = document.documentElement;

    // Apply CSS Variables
    // In Tailwind, we can map color-primary to var(--color-primary)
    // Here we set the variables that Tailwind (or standard CSS) consumes.
    
    // Note: To make this effective, Tailwind config must refer to these vars.
    // e.g. colors: { primary: 'var(--color-primary)' }
    // For now, we will set it here, assuming Tailwind might be updated later
    // or we just rely on style attributes for broader compatibility if needed.
    
    root.style.setProperty("--color-primary", theme.primaryColor);
    root.style.setProperty("--color-secondary", theme.secondaryColor);
    root.style.setProperty("--font-display", theme.fontFamily);
    
    // Also, ZMP often uses specific vars
    root.style.setProperty("--zaui-primary-color", theme.primaryColor);

  }, [theme]);
};
