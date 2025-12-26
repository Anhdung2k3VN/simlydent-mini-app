import React from "react";

interface Props {
    onNavigate: (to: string, options?: any) => void;
}

interface QuickActionButtonProps {
  icon: string;
  label: string;
  onClick: () => void;
  color?: string;
}

const QuickActionButton: React.FC<QuickActionButtonProps> = ({ icon, label, onClick, color = "text-primary" }) => {
  return (
    <button 
      onClick={onClick}
      className="group flex flex-col items-center justify-center gap-3 bg-surface p-4 rounded-card shadow-card border border-gray-100 dark:border-gray-800 hover:border-primary/50 active:scale-95 transition-all"
    >
      <div className={`size-12 rounded-full bg-background flex items-center justify-center transition-colors group-hover:bg-primary/5`}>
        <span className={`material-symbols-outlined !text-[28px] ${color}`}>{icon}</span>
      </div>
      <span className="font-bold text-text-primary text-sm text-center leading-tight">{label}</span>
    </button>
  );
};

export const QuickActionsWidget: React.FC<Props> = ({ onNavigate }) => {
    return (
      <div className="flex flex-col gap-3 px-5 pt-8">
        <h3 className="text-lg font-bold text-text-primary mb-1">Tiện ích (Updated)</h3>
        <div className="grid grid-cols-4 gap-3">
          <QuickActionButton 
            icon="calendar_month" 
            label="Đặt lịch" 
            onClick={() => onNavigate("/booking")} 
            color="text-blue-600"
          />
          <QuickActionButton 
            icon="description" 
            label="Hồ sơ" 
            onClick={() => onNavigate("/records")} 
            color="text-teal-600"
          />
           <QuickActionButton 
            icon="payments" 
            label="Thanh toán" 
            onClick={() => onNavigate("/payments")}
            color="text-orange-600"
          />
           <QuickActionButton 
            icon="support_agent" 
            label="Tư vấn" 
            onClick={() => window.location.href = "tel:1900xxxx"}
            color="text-purple-600"
          />
        </div>
      </div>
    );
};
