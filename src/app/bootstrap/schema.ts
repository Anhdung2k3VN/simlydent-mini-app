export interface BootstrapConfig {
  schemaVersion: number;
  status: {
    mode: "active" | "maintenance";
    message: string | null;
  };
  tenant: {
    tenantId: string;
    oaId: string;
    miniAppId: string;
    environment: "dev" | "staging" | "prod";
  };
  versions: {
    baseMinVersion: string;
    configVersion: number;
    themeVersion: number;
    rollout: {
      track: string;
      pinnedBaseVersion: string;
    };
  };
  runtime: {
    channel: string;
    apiBaseUrl: string;
    assetBaseUrl: string;
    timeZone: string;
    locale: string;
    endpoints: {
      bootstrap: string;
      me: string;
      upload: string;
    };
    cache: {
      ttlSeconds: number;
      staleWhileRevalidateSeconds: number;
    };
  };
  modules: Record<string, { enabled: boolean; reason?: string }>;
  capabilities: {
    requires: {
      minSdkVersion: string;
      requiredApis: string[];
    };
  };
  ui: {
    navigation: {
      type: "tab" | "drawer";
      items: NavigationItem[];
    };

    layout: {
      preset: "gold" | "classic" | "minimal";
      homeWidgets: string[];
      rules?: Record<string, any>;
    };
    texts: {
      appName: string;
      supportLabel: string;
    };
  };
  theme: {
    brandName: string;
    logo: {
      primaryUrl: string;
      squareUrl: string;
    };
    tokens: ThemeTokens;
    zaloHeader: {
      light: HeaderTheme;
      dark: HeaderTheme;
    };
  };
  support: {
    oaChatUrl: string;
    hotline: string;
  };
  security: {
    jwt: {
      issuer: string;
      audience: string;
      tenantClaim: string;
    };
  };
}

export interface NavigationItem {
  key: string;
  label: string;
  route: string;
  icon: string;
  visible: boolean;
}

export interface ThemeTokens {
  colors: {
    primary: string;
    accent: string;
    background: string;
    surface: string;
    textPrimary: string;
    textSecondary: string;
    danger: string;
    success: string;
    warning: string;
  };
  font: {
    family: string;
    scale: string;
    weight: {
      regular: number;
      medium: number;
      semibold: number;
    };
  };
  radius: {
    card: number;
    button: number;
    badge: number;
  };
  shadow: {
    card: string;
    modal: string;
  };
  spacing: {
    density: string;
  };
}

export interface HeaderTheme {
  headerColor: string;
  textColor: string;
}

export const DEFAULT_BOOTSTRAP_CONFIG: BootstrapConfig = {
    schemaVersion: 1,
    status: { mode: "active", message: null },
    tenant: { tenantId: "default", oaId: "", miniAppId: "", environment: "prod" },
    versions: { baseMinVersion: "1.0.0", configVersion: 1, themeVersion: 1, rollout: { track: "stable", pinnedBaseVersion: "1.0.0" } },
    runtime: { channel: "prod", apiBaseUrl: "", assetBaseUrl: "", timeZone: "Asia/Ho_Chi_Minh", locale: "vi-VN", endpoints: { bootstrap: "", me: "", upload: "" }, cache: { ttlSeconds: 300, staleWhileRevalidateSeconds: 86400 } },
    modules: {},
    capabilities: { requires: { minSdkVersion: "2.0.0", requiredApis: [] } },
    ui: { navigation: { type: "tab", items: [] }, layout: { preset: "classic", homeWidgets: [], rules: {} }, texts: { appName: "SimlyDent", supportLabel: "Hỗ trợ" } },
    theme: { brandName: "SimlyDent", logo: { primaryUrl: "", squareUrl: "" }, tokens: { colors: { primary: "#0F62FE", accent: "#FFB000", background: "#F7F9FC", surface: "#FFFFFF", textPrimary: "#0B1220", textSecondary: "#4B5563", danger: "#E11D48", success: "#16A34A", warning: "#F59E0B" }, font: { family: "system-ui", scale: "normal", weight: { regular: 400, medium: 500, semibold: 600 } }, radius: { card: 12, button: 10, badge: 999 }, shadow: { card: "soft", modal: "medium" }, spacing: { density: "normal" } }, zaloHeader: { light: { headerColor: "#0F62FE", textColor: "white" }, dark: { headerColor: "#0B1220", textColor: "white" } } },
    support: { oaChatUrl: "", hotline: "" },
    security: { jwt: { issuer: "", audience: "", tenantClaim: "" } }
};
