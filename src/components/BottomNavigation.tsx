import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAtomValue } from "jotai";
import { navigationAtom, modulesAtom } from "@/app/runtime/runtimeStore";
import { buildNavigation } from "@/app/routing/navBuilder";

const BottomNavigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const navigationConfig = useAtomValue(navigationAtom);
  const modules = useAtomValue(modulesAtom);

  // Build the menu dynamically
  const menuItems = buildNavigation(navigationConfig.items, modules);

  return (
    <div className="fixed bottom-0 left-0 right-0 h-[64px] bg-white dark:bg-surface-dark border-t border-slate-100 dark:border-slate-800 flex items-end justify-between px-2 pb-safe-bottom z-50 rounded-t-2xl shadow-[0_-5px_20px_rgba(0,0,0,0.03)] filter drop-shadow">
      {menuItems.map((item) => {
        const isActive = location.pathname.startsWith(item.route);

        // Special render for Booking item -> Floating Action Button (FAB)
        if (item.key === 'booking') {
          return (
            <div key={item.key} className="relative -top-5 flex-1 flex justify-center pointer-events-none">
              <button
                onClick={() => navigate(item.route)}
                className="pointer-events-auto size-16 rounded-full bg-primary text-white shadow-xl shadow-primary/30 flex items-center justify-center transform hover:scale-105 active:scale-95 transition-all border-4 border-slate-50 dark:border-black"
                aria-label={item.label}
              >
                  <span className="material-symbols-outlined !text-[32px]">add</span>
              </button>
              {/* Optional label below if desired, but usually FAB is standalone or just icon */}
              {/* <div className="absolute -bottom-6 text-[10px] font-bold text-slate-500">{item.label}</div> */}
            </div>
          );
        }

        return (
          <button
            key={item.key}
            onClick={() => navigate(item.route)}
            className={`flex-1 flex flex-col items-center justify-center gap-1 h-12 rounded-xl transition-all ${
              isActive
                ? "text-primary font-bold"
                : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
            }`}
          >
            <span
              className={`material-symbols-outlined transition-all ${
                isActive ? "text-[26px]" : "text-2xl"
              }`}
            >
             {item.icon}
            </span>
            <span className="text-[10px]">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default BottomNavigation;
