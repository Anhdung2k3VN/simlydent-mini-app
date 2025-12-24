import React from "react";
import { Appointment } from "../../types";

interface Props {
  appointment: Appointment;
  onBack: () => void;
}

const AppointmentDetailScreen: React.FC<Props> = ({ appointment, onBack }) => {
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col bg-background-light dark:bg-background-dark">
      <header className="flex items-center justify-between px-4 py-3 bg-white dark:bg-surface-dark sticky top-0 z-20 shadow-sm">
        <button
          onClick={onBack}
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-background-light dark:hover:bg-background-dark transition-colors text-text-main dark:text-white"
        >
          <span className="material-symbols-outlined text-[24px]">
            arrow_back
          </span>
        </button>
        <h1 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center">
          Chi tiết Lịch hẹn
        </h1>
        <div className="w-10"></div>
      </header>

      <main className="flex-1 overflow-y-auto pb-44 p-4 flex flex-col gap-4 no-scrollbar">
        {/* Doctor Card */}
        <div className="bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-slate-800">
          <div className="flex items-start gap-4">
            <div className="relative shrink-0">
              <div
                className="w-20 h-20 rounded-full bg-cover bg-center border-2 border-primary/20"
                style={{ backgroundImage: `url(${appointment.image})` }}
              ></div>
              <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1 border-2 border-white dark:border-surface-dark">
                <span className="material-symbols-outlined text-white text-[14px] font-bold">
                  check
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-1 flex-1 min-w-0">
              <h2 className="text-lg font-bold truncate pr-2">
                {appointment.doctor}
              </h2>
              <p className="text-primary text-sm font-medium">
                {appointment.specialty}
              </p>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                  Đã xác nhận
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Time & Location */}
        <div className="bg-white dark:bg-surface-dark rounded-2xl p-0 shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden">
          <div className="flex items-center gap-4 p-4 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900/20 text-primary shrink-0 w-12 h-12">
              <span className="material-symbols-outlined">calendar_month</span>
            </div>
            <div className="flex flex-col">
              <p className="text-text-sub dark:text-slate-400 text-xs font-medium uppercase tracking-wide">
                Thời gian
              </p>
              <p className="text-base font-semibold mt-0.5">
                {appointment.time} - {appointment.date}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4">
            <div className="flex items-center justify-center rounded-xl bg-orange-50 dark:bg-orange-900/20 text-orange-500 shrink-0 w-12 h-12">
              <span className="material-symbols-outlined">location_on</span>
            </div>
            <div className="flex flex-col flex-1">
              <p className="text-text-sub dark:text-slate-400 text-xs font-medium uppercase tracking-wide">
                Địa điểm
              </p>
              <p className="text-sm font-semibold mt-0.5 line-clamp-2">
                {appointment.location}
              </p>
            </div>
            <button className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 text-primary">
              <span className="material-symbols-outlined fill">map</span>
            </button>
          </div>
          <div className="w-full h-32 bg-slate-200 dark:bg-slate-800 relative group cursor-pointer overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center bg-black/10">
              <span className="bg-white/90 dark:bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                Xem bản đồ
              </span>
            </div>
            <img
              src="https://picsum.photos/400/200?grayscale"
              alt="map placeholder"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Service Info */}
        <div className="bg-white dark:bg-surface-dark rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-800">
          <h3 className="text-base font-bold mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-xl">
              medical_services
            </span>
            Thông tin dịch vụ
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-start gap-4 pb-4 border-b border-slate-100 dark:border-slate-800 border-dashed">
              <div>
                <p className="text-sm font-medium text-text-sub dark:text-slate-400">
                  Dịch vụ
                </p>
                <p className="text-base font-semibold mt-1">
                  {appointment.service}
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-sm font-medium text-text-sub dark:text-slate-400">
                Chi phí dự kiến
              </p>
              <p className="text-lg font-bold text-primary">
                {appointment.price}
              </p>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 dark:bg-blue-900/10 rounded-2xl p-5 border border-blue-100 dark:border-blue-800/30">
          <div className="flex items-center gap-2 mb-3">
            <span className="material-symbols-outlined text-primary fill">
              info
            </span>
            <h3 className="text-base font-bold text-primary dark:text-blue-400">
              Hướng dẫn trước khi đến
            </h3>
          </div>
          <ul className="space-y-2.5">
            {[
              "Vui lòng đến sớm 10 phút để hoàn tất thủ tục check-in tại quầy lễ tân.",
              "Mang theo hồ sơ khám bệnh hoặc phim X-Quang cũ (nếu có).",
              "Không ăn uống đồ có màu đậm trước khi khám 1 tiếng.",
            ].map((text, i) => (
              <li
                key={i}
                className="flex gap-3 text-sm text-text-main dark:text-blue-100"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></span>
                <span className="leading-relaxed">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-surface-dark border-t border-slate-200 dark:border-slate-800 p-4 pb-8 z-10 rounded-t-3xl shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col gap-3">
          <button className="w-full bg-primary hover:bg-blue-500 text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-lg shadow-blue-500/30">
            <span className="material-symbols-outlined">edit_calendar</span>
            Đổi lịch
          </button>
          <div className="grid grid-cols-2 gap-3">
            <button className="w-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-text-main dark:text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors border border-transparent">
              <span className="material-symbols-outlined text-[20px]">
                call
              </span>
              Gọi phòng khám
            </button>
            <button className="w-full bg-red-50 dark:bg-red-900/10 hover:bg-red-100 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400 font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors border border-transparent">
              <span className="material-symbols-outlined text-[20px]">
                cancel
              </span>
              Hủy lịch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentDetailScreen;
