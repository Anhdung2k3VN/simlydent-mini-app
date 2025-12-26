import React from "react";
import { NavigationItem } from "../bootstrap/schema";

// Map string icon names to Material Symbols
// User JSON uses: "home", "calendar", "chart", "star"
// Our app uses: "home", "calendar_month", "bar_chart", "confirmation_number"
// We need a mapper.

const ICON_MAP: Record<string, string> = {
  "home": "home",
  "calendar": "calendar_month",
  "calendar_month": "calendar_month",
  "chart": "bar_chart", 
  "bar_chart": "bar_chart",
  "star": "confirmation_number", // Loyalty usually star or ticket
  "loyalty": "confirmation_number"
};

export const buildNavigation = (items: NavigationItem[], modules: Record<string, { enabled: boolean }>) => {
  return items.filter(item => {
     // 1. Check visibility config
     if (!item.visible) return false;
     
     // 2. Check Module Gating (inference from route or explicit key)
     // User JSON nav items keys: "home", "booking", "reports", "loyalty"
     // These match module keys directly!
     const moduleKey = item.key;
     
     // If module exists in config and is disabled, hide it
     if (modules[moduleKey] && modules[moduleKey].enabled === false) {
         return false;
     }
     
     return true;
  }).map(item => ({
      ...item,
      icon: ICON_MAP[item.icon] || item.icon // Fallback to raw string if not mapped
  }));
};
