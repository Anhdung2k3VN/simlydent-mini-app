import { useAtomValue } from "jotai";
import { useEffect } from "react";
import { themeAtom } from "../runtime/runtimeStore";

// Helper to parse hex to rgb
const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};

// Helper to mix colors (simple weighted average)
// weight is percentage of color2 (0-1)
const mixColors = (color1: string, color2: string, weight: number) => {
    const rgb1 = hexToRgb(color1);
    const rgb2 = hexToRgb(color2);
    if (!rgb1 || !rgb2) return color1;

    const r = Math.round(rgb1.r * (1 - weight) + rgb2.r * weight);
    const g = Math.round(rgb1.g * (1 - weight) + rgb2.g * weight);
    const b = Math.round(rgb1.b * (1 - weight) + rgb2.b * weight);

    return `rgb(${r}, ${g}, ${b})`;
};

export const useApplyTheme = () => {
  const theme = useAtomValue(themeAtom);

  useEffect(() => {
    const root = document.documentElement;
    const tokens = theme.tokens;
    
    // Calculate Dynamic Background from Primary
    // Logic: Mix Primary with White. User requested 12% mix.
    const dynamicBackground = mixColors("#FFFFFF", tokens.colors.primary, 0.12);
    
    // Calculate Dynamic Primary Dark (for Hovers)
    // Logic: Mix Primary with Black (10% Black) to get a darker shade
    const dynamicPrimaryDark = mixColors("#000000", tokens.colors.primary, 0.1);

    // 1. Colors
    root.style.setProperty("--color-primary", tokens.colors.primary);
    root.style.setProperty("--color-primary-dark", dynamicPrimaryDark); // Auto-generated hover state
    root.style.setProperty("--color-accent", tokens.colors.accent);
    
    // Override background with dynamic tint
    // Users can still use tokens.colors.background if they want a manual override, 
    // but the user specific request is to auto-change. 
    // We'll prioritize dynamic for this "Feature".
    root.style.setProperty("--color-background", dynamicBackground);
    
    root.style.setProperty("--color-surface", tokens.colors.surface);
    root.style.setProperty("--color-text-primary", tokens.colors.textPrimary);
    root.style.setProperty("--color-text-secondary", tokens.colors.textSecondary);
    root.style.setProperty("--color-danger", tokens.colors.danger);
    root.style.setProperty("--color-success", tokens.colors.success);
    root.style.setProperty("--color-warning", tokens.colors.warning);

    // 2. Border Radius
    root.style.setProperty("--radius-card", `${tokens.radius.card}px`);
    root.style.setProperty("--radius-button", `${tokens.radius.button}px`);

    // 3. Shadow
    const shadows: Record<string, string> = {
        soft: "0 2px 8px 0 rgba(0,0,0,0.05)",
        medium: "0 4px 16px 0 rgba(0,0,0,0.1)",
        hard: "0 8px 24px 0 rgba(0,0,0,0.2)"
    };
    root.style.setProperty("--shadow-card", shadows[tokens.shadow.card] || tokens.shadow.card);
    root.style.setProperty("--shadow-modal", shadows[tokens.shadow.modal] || tokens.shadow.modal);

    // 4. Zalo UI overrides
    root.style.setProperty("--zaui-primary-color", tokens.colors.primary);

    // 5. Font 
    const fontFamily = tokens.font.family === "system-ui" 
        ? "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
        : tokens.font.family;
    
    root.style.setProperty("--font-family-display", fontFamily);

  }, [theme]);
};
