import React, { useMemo } from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { useAtomValue } from "jotai";
import { modulesAtom } from "../runtime/runtimeStore";
import { BASE_ROUTE_REGISTRY } from "./routes";
import Layout from "@/components/layout"; 
// We need to restore Layout or create a new "MainLayout" that wraps content
// Current Design: Routes are wrapped individually or passed to Router
// AppShell -> Router -> Layout(children)

// The user Requirements: "Menu item hidden if route belongs to disabled module".
// Router Guard check.

const DynamicRouter: React.FC = () => {
  const modules = useAtomValue(modulesAtom);

  const router = useMemo(() => {
    // Filter routes based on enabled modules
    const enabledRoutes = BASE_ROUTE_REGISTRY.filter((route) => {
      // If undefined module, it's public/base
      if (!route.module) return true;
      
      const modConfig = modules[route.module];
      // If module key exists and is enabled, OR module key missing (fallback?)
      // User says: "booking" is enabled. "loyalty" is disabled.
      // If route.module = "loyalty", and modules["loyalty"].enabled = false => Remove.
      
      if (modConfig && modConfig.enabled === false) return false;
      return true;
    }).map(r => ({
      path: r.path,
      element: r.element,
      index: r.index
    }));

    // Wrap in Root Layout (containing BottomNav?) 
    // Actually, BottomNav is inside HomeScreen (via Layout Preset).
    // What about other pages? They probably need BottomNav too?
    // In Phase 3, we put BottomNav in "ClassicLayout".
    // Let's assume pages that need Nav are responsible for it, OR we have a global layout.
    // Given the previous code, Layout was 'components/layout', which likely had Outlet.
    
    return createHashRouter([
      {
        path: "/",
        // We might not need a global layout if pages handle their own layouts (like Home)
        // usage of <Layout /> usually implies Outlet.
        element: <Layout />, 
        children: enabledRoutes,
      },
    ]);
  }, [modules]);

  return <RouterProvider router={router} />;
};

export default DynamicRouter;
