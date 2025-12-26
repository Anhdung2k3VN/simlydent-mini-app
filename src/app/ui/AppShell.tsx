import React from "react";
import { useAtomValue } from "jotai";
import { appStatusAtom } from "../runtime/runtimeStore";
import { useBootstrap } from "../bootstrap/bootstrap";
import { useApplyTheme } from "../theme/applyTheme"; 
import DynamicRouter from "@/app/routing/DynamicRouter";
import AppSkeleton from "@/components/skeletons/AppSkeleton";

const AppShell: React.FC = () => {
  // 1. Trigger Bootstrap (Step A - E)
  useBootstrap();
  
  // 2. Apply Theme (Step E partial)
  useApplyTheme();

  const status = useAtomValue(appStatusAtom);

  if (status.loading) {
    return <AppSkeleton />;
  }

  if (status.error) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-red-50 p-6">
        <div className="text-center text-red-600 bg-white p-6 rounded-2xl shadow-xl">
          <span className="material-symbols-outlined text-4xl mb-2">error</span>
          <h2 className="text-xl font-bold mb-2">Lỗi khởi tạo</h2>
          <p className="text-slate-600 mb-4">{status.error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-red-600 text-white rounded-xl font-bold active:scale-95 transition-transform"
          >
            Thử lại
          </button>
        </div>
      </div>
    );
  }

  return <DynamicRouter />;
};

export default AppShell;
