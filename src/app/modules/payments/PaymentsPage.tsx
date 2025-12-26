import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col h-full min-h-screen w-full bg-background font-display antialiased">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center p-4 pt-safe-top pb-3 justify-between max-w-md mx-auto w-full">
          <button
            onClick={() => navigate(-1)}
            className="flex size-10 items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <span className="material-symbols-outlined text-text-primary text-2xl">
              arrow_back
            </span>
          </button>
          <h2 className="text-lg font-bold tracking-[-0.015em] text-text-primary">
            Thanh toán
          </h2>
          <div className="size-10" />
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center text-text-secondary">
        <div className="size-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-4xl text-slate-400">payments</span>
        </div>
        <h3 className="text-xl font-bold text-text-primary mb-2">Chưa có hóa đơn</h3>
        <p>Bạn không có hóa đơn nào cần thanh toán.</p>
      </div>
    </div>
  );
};

export default PaymentsPage;
