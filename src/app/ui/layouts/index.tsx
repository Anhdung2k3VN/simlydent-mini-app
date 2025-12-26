import React, { ReactNode } from "react";
import BottomNavigation from "@/components/BottomNavigation";

interface LayoutProps {
  children: ReactNode;
  bottomNav?: boolean;
}

// 1. CLASSIC: The standard layout we just built
export const ClassicLayout: React.FC<LayoutProps> = ({ children, bottomNav = true }) => {
  return (
    <div className="relative flex h-full w-full flex-col bg-background font-display text-text-primary overflow-y-auto no-scrollbar pb-28">
      {children}
      {bottomNav && <BottomNavigation />}
    </div>
  );
};

// 2. MINIMAL: Cleaner, white background, no gradient header assumed (header widget might adapt)
export const MinimalLayout: React.FC<LayoutProps> = ({ children, bottomNav = true }) => {
  return (
    <div className="relative flex h-full w-full flex-col bg-background font-display text-text-primary overflow-y-auto no-scrollbar pb-28 px-4 pt-safe-top">
      {children}
      {bottomNav && <BottomNavigation />}
    </div>
  );
};

// 3. GOLD: Premium feel, maybe a gold tint fallback if header is transparent
export const GoldLayout: React.FC<LayoutProps> = ({ children, bottomNav = true }) => {
  return (
    <div className="relative flex h-full w-full flex-col bg-background font-display text-text-primary overflow-y-auto no-scrollbar pb-28">
        {/* Subtle gradient overlay using accent color if needed, or just clean */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent"></div>
      {children}
      {bottomNav && <BottomNavigation />}
    </div>
  );
};

export const LAYOUT_REGISTRY = {
    classic: ClassicLayout,
    minimal: MinimalLayout,
    gold: GoldLayout
};
