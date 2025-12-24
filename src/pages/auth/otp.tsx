import React, { useState, useEffect } from "react";

interface Props {
  onVerify: () => void;
  onBack: () => void;
}

const OTPScreen: React.FC<Props> = ({ onVerify, onBack }) => {
  const [timer, setTimer] = useState(59);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex h-full w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden min-h-screen">
      <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between">
        <div
          onClick={onBack}
          className="text-text-main dark:text-white flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </div>
        <h2 className="text-text-main dark:text-white text-lg font-bold leading-tight flex-1 text-center pr-12">
          Xác thực OTP
        </h2>
      </div>

      <div className="flex w-full flex-row items-center justify-center gap-2 py-4 px-8">
        <div className="h-1.5 flex-1 rounded-full bg-primary/40"></div>
        <div className="h-1.5 flex-1 rounded-full bg-primary"></div>
      </div>

      <div className="flex flex-col gap-6 px-6 pt-6">
        <div className="text-center">
          <h3 className="text-text-main dark:text-white text-xl font-bold mb-2">
            Nhập mã xác thực
          </h3>
          <p className="text-text-sub dark:text-slate-400 text-base">
            Mã xác thực 6 số đã được gửi đến số điện thoại <br />
            <span className="text-text-main dark:text-white font-bold">
              0982 *** 789
            </span>
          </p>
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {[5, "", "", "", "", ""].map((val, idx) => (
            <input
              key={idx}
              className={`w-12 h-14 text-center text-2xl font-bold rounded-lg border ${
                val
                  ? "border-primary"
                  : "border-border-light dark:border-border-dark"
              } bg-white dark:bg-surface-dark text-text-main dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none`}
              maxLength={1}
              type="text"
              defaultValue={val}
              autoFocus={idx === 1}
            />
          ))}
        </div>

        <div className="flex flex-col items-center gap-1 mt-2">
          <p className="text-sm text-text-sub dark:text-slate-400">
            Mã sẽ hết hạn sau{" "}
            <span className="text-primary font-bold">
              00:{timer < 10 ? `0${timer}` : timer}
            </span>
          </p>
          <button className="text-sm font-semibold text-text-sub dark:text-slate-400 hover:text-primary transition-colors cursor-pointer disabled:opacity-50">
            Gửi lại mã
          </button>
        </div>

        <button
          onClick={onVerify}
          className="w-full bg-primary hover:bg-sky-500 text-white font-bold h-12 rounded-full shadow-lg shadow-primary/30 transition-all flex items-center justify-center gap-2 mt-6"
        >
          <span>Xác nhận</span>
        </button>
      </div>

      <div className="mt-auto bg-gray-100 dark:bg-gray-800 p-2 opacity-50 pointer-events-none select-none">
        <div className="text-center text-xs text-gray-500 uppercase tracking-wider mb-2">
          Bàn phím
        </div>
        <div className="grid grid-cols-3 gap-1 max-w-xs mx-auto">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "X"].map((v, i) => (
            <div
              key={i}
              className="h-10 bg-white dark:bg-gray-700 rounded shadow-sm flex items-center justify-center text-lg font-medium"
            >
              {v}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OTPScreen;
