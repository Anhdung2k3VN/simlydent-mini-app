import React from "react";

const AppSkeleton: React.FC = () => {
  return (
    <div className="flex h-screen w-full flex-col bg-slate-50 dark:bg-black font-display overflow-hidden">
      {/* Header Skeleton */}
      <div className="relative h-64 bg-slate-200 dark:bg-slate-800 rounded-b-[40px] animate-pulse">
         <div className="absolute bottom-[-20%] left-[-10%] w-48 h-48 rounded-full bg-slate-300 dark:bg-slate-700 blur-2xl opacity-50"></div>
      </div>

      {/* Top Bar Placeholders */}
      <div className="absolute top-0 left-0 right-0 p-6 pt-safe-top flex items-center justify-between">
         <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-slate-300 dark:bg-slate-700 animate-pulse"></div>
            <div className="flex flex-col gap-2">
               <div className="w-20 h-3 bg-slate-300 dark:bg-slate-700 rounded animate-pulse"></div>
               <div className="w-32 h-5 bg-slate-300 dark:bg-slate-700 rounded animate-pulse"></div>
            </div>
         </div>
      </div>

      {/* Overlay Card Skeleton */}
      <div className="relative z-10 px-5 -mt-16 mb-6">
         <div className="h-40 bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-white/50 dark:border-slate-800 animate-pulse"></div>
      </div>

      {/* Grid Skeleton */}
      <div className="px-5 mb-8">
         <div className="flex justify-between mb-4">
             <div className="w-32 h-5 bg-slate-300 dark:bg-slate-800 rounded animate-pulse"></div>
         </div>
         <div className="grid grid-cols-3 gap-3">
             {[...Array(6)].map((_, i) => (
                 <div key={i} className="h-24 bg-white dark:bg-slate-900 rounded-2xl animate-pulse"></div>
             ))}
         </div>
      </div>

       {/* Bottom Skeleton */}
       <div className="mt-auto h-[80px] bg-white dark:bg-slate-900 rounded-t-2xl border-t border-slate-100 dark:border-slate-800 flex items-center justify-between px-6 pb-4">
          {[...Array(4)].map((_, i) => (
             <div key={i} className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 animate-pulse"></div>
          ))}
       </div>
    </div>
  );
};

export default AppSkeleton;
