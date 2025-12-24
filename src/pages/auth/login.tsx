import React from "react";

interface Props {
  onNext: () => void;
}

const LoginScreen: React.FC<Props> = ({ onNext }) => {
  return (
    <div className="relative flex h-full w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden min-h-screen">
      <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10">
        <div className="text-text-main dark:text-white flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors cursor-pointer">
          <span className="material-symbols-outlined">arrow_back</span>
        </div>
        <h2 className="text-text-main dark:text-white text-lg font-bold leading-tight flex-1 text-center pr-12">
          Liên kết tài khoản
        </h2>
      </div>

      <div className="flex w-full flex-row items-center justify-center gap-2 py-4 px-8">
        <div className="h-1.5 flex-1 rounded-full bg-primary"></div>
        <div className="h-1.5 flex-1 rounded-full bg-border-light dark:bg-border-dark"></div>
      </div>

      <div className="px-6 py-4 flex flex-col items-center justify-center">
        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <div className="w-16 h-16 bg-contain bg-center bg-no-repeat">
            <span className="material-symbols-outlined text-5xl text-primary">
              security
            </span>
          </div>
        </div>
        <h1 className="text-text-main dark:text-white text-2xl font-bold text-center mb-2">
          SimlyDent Xin Chào
        </h1>
        <p className="text-text-sub dark:text-slate-400 text-center text-sm px-4">
          Liên kết số điện thoại để quản lý hồ sơ nha khoa và nhận ưu đãi độc
          quyền.
        </p>
      </div>

      <div className="flex flex-col gap-6 px-6 py-2 mt-2">
        <label className="flex flex-col gap-1.5">
          <span className="text-text-main dark:text-white text-sm font-semibold">
            Số điện thoại
          </span>
          <div className="relative flex items-center">
            <div className="absolute left-4 flex items-center gap-2 border-r border-border-light dark:border-border-dark pr-2 h-6">
              <span className="text-text-main dark:text-white text-sm font-medium">
                +84
              </span>
            </div>
            <input
              className="form-input flex w-full rounded-xl text-text-main dark:text-white border border-border-light dark:border-border-dark bg-white dark:bg-surface-dark focus:border-primary focus:ring-1 focus:ring-primary h-14 pl-20 pr-4 text-base font-medium placeholder:text-text-sub/50"
              placeholder="9xx xxx xxx"
              type="tel"
            />
          </div>
        </label>

        <div className="flex items-start gap-3 px-1">
          <input
            checked
            className="h-5 w-5 rounded border-border-light dark:border-border-dark text-primary focus:ring-primary bg-white dark:bg-surface-dark cursor-pointer"
            id="terms"
            type="checkbox"
            readOnly
          />
          <label
            className="text-sm text-text-sub dark:text-slate-400 leading-relaxed cursor-pointer"
            htmlFor="terms"
          >
            Tôi đồng ý với{" "}
            <span className="text-primary font-semibold hover:underline">
              Điều khoản sử dụng
            </span>{" "}
            và{" "}
            <span className="text-primary font-semibold hover:underline">
              Chính sách bảo mật
            </span>{" "}
            của SimlyDent.
          </label>
        </div>

        <button
          onClick={onNext}
          className="w-full bg-primary hover:bg-sky-500 active:bg-sky-600 text-white font-bold h-12 rounded-full shadow-lg shadow-primary/30 transition-all flex items-center justify-center gap-2 mt-4 group"
        >
          <span>Nhận mã OTP</span>
          <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </button>

        <div className="flex items-center justify-center gap-2 mt-2 opacity-80">
          <span className="text-xs text-text-sub dark:text-slate-400">
            Bảo mật bởi Zalo
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
