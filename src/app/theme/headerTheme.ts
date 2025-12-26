import { HeaderTheme } from "../bootstrap/schema";

// Helper to pick the correct header theme
export const getHeaderTheme = (
    zaloHeaderConfig: { light: HeaderTheme; dark: HeaderTheme }, 
    systemTheme: "light" | "dark"
): HeaderTheme => {
    return systemTheme === "dark" ? zaloHeaderConfig.dark : zaloHeaderConfig.light;
};

// Hook usage would involve getting system info from Zalo SDK (mocked for now)
export const useHeaderTheme = () => {
    // In real app: const { theme } = useSystemInfo();
    const systemTheme: "light" | "dark" = "light"; 
    return systemTheme;
};
