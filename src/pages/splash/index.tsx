import React, { useEffect, useState } from "react";

interface Props {
  onFinish: () => void;
}

const SplashScreen: React.FC<Props> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onFinish, 500);
          return 100;
        }
        return prev + 5;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <div className="relative flex h-screen w-full flex-col justify-between overflow-hidden bg-background-light dark:bg-background-dark p-6">
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[30%] bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[40%] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex-1"></div>

      <div className="flex flex-col items-center justify-center w-full z-10">
        <div className="mb-8 relative group">
          <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full transform scale-90 group-hover:scale-100 transition-transform duration-700"></div>
          <div className="relative w-32 h-32 bg-white dark:bg-[#1a2c35] rounded-3xl shadow-xl shadow-primary/10 flex items-center justify-center border border-slate-100 dark:border-slate-800">
            <span className="material-symbols-outlined text-6xl text-primary">
              dentistry
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center text-center space-y-2">
          <h1 className="text-slate-900 dark:text-white tracking-tight text-4xl font-extrabold leading-tight">
            SimlyDent
          </h1>
          <h2 className="text-slate-500 dark:text-slate-400 text-lg font-medium tracking-wide">
            Nha Khoa Thẩm Mỹ
          </h2>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-end pb-12 w-full max-w-xs mx-auto z-10">
        <div className="flex flex-col gap-4 w-full">
          <div className="flex justify-center">
            <p className="text-slate-600 dark:text-slate-300 text-sm font-medium animate-pulse flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] animate-spin">
                sync
              </span>
              Đang kết nối...
            </p>
          </div>
          <div className="w-full rounded-full bg-slate-200 dark:bg-slate-800 h-1.5 overflow-hidden">
            <div
              className="h-full rounded-full bg-primary shadow-[0_0_10px_rgba(19,164,236,0.5)] transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-slate-400 dark:text-slate-600 text-xs font-medium text-center">
            v1.0.0
          </p>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
