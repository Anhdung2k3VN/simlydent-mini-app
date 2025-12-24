import React from "react";
import { Screen, Appointment } from "../../types";
import { DUMMY_APPOINTMENTS } from "../../constants";

interface Props {
  onNavigate: (screen: Screen, params?: any) => void;
}

const HomeScreen: React.FC<Props> = ({ onNavigate }) => {
  const nextAppointment = DUMMY_APPOINTMENTS[0];

  return (
    <div className="relative flex h-full w-full flex-col bg-background-light dark:bg-background-dark font-display text-text-main dark:text-white overflow-y-auto no-scrollbar pb-24">
      {/* Header */}
      <div className="sticky top-0 z-50 flex items-center bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md p-4 justify-between border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <div
            className="rounded-full size-10 ring-2 ring-primary/20 bg-cover bg-center"
            style={{
              backgroundImage: "url(https://picsum.photos/100/100?random=10)",
            }}
          ></div>
          <div className="flex flex-col">
            <span className="text-xs text-text-sub dark:text-gray-400 font-medium leading-none">
              SimlyDent
            </span>
            <span className="text-sm font-bold text-primary">Thành viên</span>
          </div>
        </div>
        <button className="relative flex items-center justify-center rounded-full size-10 bg-white dark:bg-surface-dark text-text-main dark:text-white shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
          <span className="material-symbols-outlined !text-[24px]">
            notifications
          </span>
          <span className="absolute top-2 right-2 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
          </span>
        </button>
      </div>

      {/* Greeting */}
      <div className="px-5 pt-6 pb-2">
        <h2 className="text-text-main dark:text-white text-[28px] font-extrabold leading-tight">
          Xin chào,
          <br />
          <span className="text-primary">Nguyễn Văn A</span>
        </h2>
      </div>

      {/* Next Appointment Card */}
      <div className="flex flex-col gap-3 px-5 pt-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-text-main dark:text-white">
            Lịch hẹn sắp tới
          </h3>
          <button
            onClick={() => onNavigate(Screen.APPOINTMENTS)}
            className="text-primary text-sm font-bold hover:underline"
          >
            Xem tất cả
          </button>
        </div>
        <div className="w-full bg-white dark:bg-surface-dark rounded-2xl p-5 shadow-md border border-gray-100 dark:border-gray-800 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-primary"></div>
          <div className="flex justify-between items-start mb-4 pl-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-primary text-xs font-bold">
              <span className="material-symbols-outlined !text-[14px] fill">
                event_available
              </span>
              Sắp diễn ra
            </div>
            <span className="text-text-sub dark:text-gray-400 text-sm font-medium">
              Mã: #{nextAppointment.id}
            </span>
          </div>
          <div className="flex gap-4 items-start pl-2">
            <div
              className="shrink-0 rounded-xl overflow-hidden size-16 bg-gray-100 bg-cover bg-center"
              style={{ backgroundImage: `url(${nextAppointment.image})` }}
            ></div>
            <div className="flex-1 min-w-0">
              <h4 className="text-lg font-bold text-text-main dark:text-white truncate">
                {nextAppointment.doctor}
              </h4>
              <p className="text-text-sub dark:text-gray-400 text-sm truncate">
                {nextAppointment.location}
              </p>
              <div className="flex items-center gap-1.5 mt-2 text-text-main dark:text-gray-200 font-bold">
                <span className="material-symbols-outlined text-primary !text-[18px]">
                  schedule
                </span>
                {nextAppointment.time} - {nextAppointment.date}
              </div>
            </div>
          </div>
          <div className="mt-5 pl-2 flex flex-col gap-3">
            <button
              onClick={() => onNavigate(Screen.DETAIL, nextAppointment)}
              className="w-full h-11 bg-primary hover:bg-primary-dark active:scale-[0.98] transition-all rounded-xl text-white font-bold text-sm shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
            >
              <span>Xem chi tiết</span>
              <span className="material-symbols-outlined !text-[18px]">
                arrow_forward
              </span>
            </button>
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center h-11 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-dark text-text-main dark:text-gray-200 font-semibold text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                Đổi lịch
              </button>
              <button className="flex items-center justify-center h-11 rounded-xl bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 font-semibold text-sm hover:bg-red-100 dark:hover:bg-red-500/20 transition-colors">
                Hủy lịch
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-col gap-3 px-5 pt-8">
        <h3 className="text-lg font-bold text-text-main dark:text-white">
          Hành động nhanh
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <QuickActionButton
            icon="calendar_add_on"
            label="Đặt lịch"
            color="blue"
            onClick={() => onNavigate(Screen.APPOINTMENTS)}
          />
          <QuickActionButton
            icon="event_note"
            label="Lịch hẹn"
            color="emerald"
            onClick={() => onNavigate(Screen.APPOINTMENTS)}
          />
          <QuickActionButton
            icon="folder_shared"
            label="Hồ sơ khám"
            color="orange"
            onClick={() => onNavigate(Screen.RECORDS)}
          />
          <QuickActionButton
            icon="smart_toy"
            label="Tư vấn AI"
            color="purple"
            onClick={() => onNavigate(Screen.AI_CONSULT)}
          />
        </div>
      </div>

      {/* Banner */}
      <div className="px-5 mt-8">
        <div className="w-full h-32 rounded-2xl bg-gradient-to-r from-primary to-blue-400 p-5 flex items-center justify-between relative overflow-hidden shadow-lg shadow-primary/20">
          <div className="relative z-10 flex flex-col gap-1 text-white">
            <span className="text-xs font-bold uppercase tracking-wider opacity-80">
              Ưu đãi tháng 10
            </span>
            <h3 className="text-lg font-bold leading-tight">
              Giảm 20% lấy cao răng
            </h3>
            <button className="mt-2 w-fit px-3 py-1.5 bg-white text-primary text-xs font-bold rounded-lg shadow-sm">
              Nhận ngay
            </button>
          </div>
          <div className="absolute right-[-20px] top-[-20px] rounded-full size-32 bg-white/10"></div>
          <div className="absolute right-10 bottom-[-30px] rounded-full size-24 bg-white/10"></div>
          <span className="material-symbols-outlined !text-[80px] text-white/20 absolute right-4 top-1/2 -translate-y-1/2 rotate-12">
            dentistry
          </span>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 w-full bg-white dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800 pb-safe pt-2 px-6 flex justify-between items-center z-50 h-[80px]">
        <NavButton
          icon="home"
          label="Home"
          active
          onClick={() => onNavigate(Screen.HOME)}
        />
        <NavButton
          icon="calendar_month"
          label="Lịch"
          onClick={() => onNavigate(Screen.APPOINTMENTS)}
        />
        <div className="relative -top-8">
          <button className="flex items-center justify-center size-14 rounded-full bg-text-main dark:bg-white text-white dark:text-text-main shadow-xl hover:scale-105 transition-transform">
            <span className="material-symbols-outlined !text-[32px]">
              qr_code_scanner
            </span>
          </button>
        </div>
        <NavButton
          icon="smart_toy"
          label="Gemini"
          onClick={() => onNavigate(Screen.AI_CONSULT)}
        />
        <NavButton
          icon="person"
          label="Hồ sơ"
          onClick={() => onNavigate(Screen.RECORDS)}
        />
      </div>
    </div>
  );
};

const QuickActionButton: React.FC<{
  icon: string;
  label: string;
  color: string;
  onClick: () => void;
}> = ({ icon, label, color, onClick }) => {
  const colorClasses =
    {
      blue: "bg-blue-50 dark:bg-blue-900/20 text-primary",
      emerald: "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-500",
      orange: "bg-orange-50 dark:bg-orange-900/20 text-orange-500",
      purple: "bg-purple-50 dark:bg-purple-900/20 text-purple-500",
    }[color] || "";

  return (
    <button
      onClick={onClick}
      className="group flex flex-col items-center justify-center gap-3 bg-white dark:bg-surface-dark p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:border-primary/50 active:scale-95 transition-all"
    >
      <div
        className={`size-12 rounded-full ${colorClasses} flex items-center justify-center transition-colors`}
      >
        <span className="material-symbols-outlined !text-[28px]">{icon}</span>
      </div>
      <span className="font-bold text-text-main dark:text-white text-sm">
        {label}
      </span>
    </button>
  );
};

const NavButton: React.FC<{
  icon: string;
  label: string;
  active?: boolean;
  onClick: () => void;
}> = ({ icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center gap-1 w-12 ${
      active
        ? "text-primary"
        : "text-gray-400 dark:text-gray-500 hover:text-text-main dark:hover:text-gray-300"
    }`}
  >
    <span className={`material-symbols-outlined ${active ? "fill" : ""}`}>
      {icon}
    </span>
    <span className="text-[10px] font-bold">{label}</span>
  </button>
);

export default HomeScreen;
