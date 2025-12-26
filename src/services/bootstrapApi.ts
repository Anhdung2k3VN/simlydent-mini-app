import { BootstrapConfig } from "../app/bootstrap/schema";

export const BootstrapApi = {
  fetchConfig: async (): Promise<BootstrapConfig> => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Return the specific JSON provided by the user
    return {
      "schemaVersion": 1,
      "status": {
        "mode": "active",
        "message": null
      },
      "tenant": {
        "tenantId": "clinic_a",
        "oaId": "oa_123",
        "miniAppId": "miniapp_456",
        "environment": "prod"
      },
      "versions": {
        "baseMinVersion": "1.2.0",
        "configVersion": 31,
        "themeVersion": 5,
        "rollout": {
          "track": "stable",
          "pinnedBaseVersion": "1.3.4"
        }
      },
      "runtime": {
        "channel": "prod",
        "apiBaseUrl": "https://api.simlydent.vn",
        "assetBaseUrl": "https://cdn.simlydent.vn/miniapp",
        "timeZone": "Asia/Ho_Chi_Minh",
        "locale": "vi-VN",
        "endpoints": {
          "bootstrap": "/miniapp/bootstrap",
          "me": "/miniapp/me",
          "upload": "/miniapp/upload"
        },
        "cache": {
          "ttlSeconds": 300,
          "staleWhileRevalidateSeconds": 86400
        }
      },
      "modules": {
        "booking": { "enabled": true },
        "crm": { "enabled": true },
        "loyalty": { "enabled": true, "reason": "packageLimit" },
        "reports": { "enabled": false },
      },
      "capabilities": {
        "requires": {
          "minSdkVersion": "2.4.0",
          "requiredApis": ["getAppInfo", "getSystemInfo"]
        }
      },
      "ui": {
        "navigation": {
          "type": "tab",
          "items": [
            { "key": "home", "label": "Trang chủ", "route": "/home", "icon": "home", "visible": true },
            { "key": "appointments", "label": "Lịch hẹn", "route": "/appointments", "icon": "event", "visible": true },
             { "key": "booking", "label": "Đặt lịch", "route": "/booking", "icon": "calendar_month", "visible": true },
            { "key": "records", "label": "Hồ sơ", "route": "/records", "icon": "folder_shared", "visible": true },
            { "key": "loyalty", "label": "Tích điểm", "route": "/loyalty", "icon": "star", "visible": true }
          ]
        },
      
        "layout": {
          "preset": "gold",
          "homeWidgets": [
            "homeHeader",
            "greeting",
            "nextAppointment",
            "quickActions",
            "featuredServices",
            "promoBanner"
          ],
          "rules": {
            "enableDrilldown": true,
            "show7DaysChart": false
          }
        },
        "texts": {
          "appName": "SimlyDent Mini",
          "supportLabel": "Hỗ trợ"
        }
      },
      "theme": {
        "brandName": "Nha Khoa A",
        "logo": {
          "primaryUrl": "https://cdn.simlydent.vn/miniapp/clinic_a/logo.png",
          "squareUrl": "https://cdn.simlydent.vn/miniapp/clinic_a/logo-square.png"
        },
        "tokens": {
         "colors": {
  "primary": "#31992c",
  "accent": "#FFB000",
  "background": "#f2f9f9", 
  "surface": "#FFFFFF",
  "textPrimary": "#0B1220",
  "textSecondary": "#4B5563",
  "danger": "#E11D48",
  "success": "#16A34A",
  "warning": "#F59E0B"
},

          "font": {
            "family": "system-ui",
            "scale": "normal",
            "weight": {
              "regular": 400,
              "medium": 500,
              "semibold": 600
            }
          },
          "radius": {
            "card": 12,
            "button": 10,
            "badge": 999
          },
          "shadow": {
            "card": "soft",
            "modal": "medium"
          },
          "spacing": {
            "density": "normal"
          }
        },
        "zaloHeader": {
          "light": { "headerColor": "#0F62FE", "textColor": "white" },
          "dark": { "headerColor": "#0B1220", "textColor": "white" }
        }
      },
      "support": {
        "oaChatUrl": "https://zalo.me/xxxxx",
        "hotline": "0909xxxxxx"
      },
      "security": {
        "jwt": {
          "issuer": "simlydent",
          "audience": "miniapp",
          "tenantClaim": "tenant_id"
        }
      }
    };
  }
};
