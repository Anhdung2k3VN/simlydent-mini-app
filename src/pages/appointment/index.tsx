import React, { useState } from "react";
import { Appointment } from "../../types";
import { DUMMY_APPOINTMENTS } from "../../constants";

interface Props {
  onBack: () => void;
  onSelect: (apt: Appointment) => void;
}

const AppointmentListScreen: React.FC<Props> = ({ onBack, onSelect }) => {
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-y-auto pb-32">
      {/* Sticky Header */}
      <div className="sticky top-0 z-30 flex items-center bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm p-4 border-b border-slate-200 dark:border-slate-800">
        <button
          onClick={onBack}
          className="text-slate-900 dark:text-slate-100 flex size-10 shrink-0 items-center justify-center rounded-full active:bg-slate-200 dark:active:bg-slate-800 transition-colors"
        >
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "24px" }}
          >
            chevron_left
          </span>
        </button>
        <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight flex-1 text-center pr-10">
          Lịch hẹn
        </h2>
      </div>

      {/* Tabs */}
      <div className="bg-background-light dark:bg-background-dark pt-2 sticky top-[60px] z-20">
        <div className="flex border-b border-slate-200 dark:border-slate-800 px-4 justify-between">
          <button
            onClick={() => setTab("upcoming")}
            className={`flex flex-col items-center justify-center border-b-[3px] flex-1 transition-all pb-3 pt-2 ${
              tab === "upcoming"
                ? "border-b-primary text-primary"
                : "border-b-transparent text-slate-500"
            }`}
          >
            <span className="text-sm font-bold leading-normal tracking-[0.015em]">
              Sắp tới
            </span>
          </button>
          <button
            onClick={() => setTab("past")}
            className={`flex flex-col items-center justify-center border-b-[3px] flex-1 transition-all pb-3 pt-2 ${
              tab === "past"
                ? "border-b-primary text-primary"
                : "border-b-transparent text-slate-500"
            }`}
          >
            <span className="text-sm font-bold leading-normal tracking-[0.015em]">
              Đã qua
            </span>
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4 p-4 mt-2">
        {tab === "upcoming" ? (
          DUMMY_APPOINTMENTS.map((apt) => (
            <AppointmentCard
              key={apt.id}
              appointment={apt}
              onClick={() => onSelect(apt)}
            />
          ))
        ) : (
          <div className="text-center py-20 text-slate-400 font-medium">
            Chưa có lịch hẹn đã qua
          </div>
        )}
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-surface-dark border-t border-slate-200 dark:border-slate-800 p-4 pb-8 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <button className="flex w-full items-center justify-center gap-2 rounded-xl h-12 bg-primary text-white text-base font-bold shadow-lg shadow-primary/25 active:scale-[0.98] transition-all hover:bg-sky-500">
          <span
            className="material-symbols-outlined text-white"
            style={{ fontSize: "24px" }}
          >
            add
          </span>
          Đặt lịch mới
        </button>
      </div>
    </div>
  );
};

const AppointmentCard: React.FC<{
  appointment: Appointment;
  onClick: () => void;
}> = ({ appointment, onClick }) => {
  const isConfirmed = appointment.status === "confirmed";

  return (
    <div
      onClick={onClick}
      className="flex flex-col gap-4 rounded-xl bg-white dark:bg-surface-dark p-4 shadow-sm border border-transparent dark:border-slate-800 cursor-pointer active:scale-[0.98] transition-transform"
    >
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700/50 pb-3">
        <div className="flex items-center gap-2">
          <span
            className={`material-symbols-outlined ${
              isConfirmed ? "text-primary" : "text-orange-500"
            }`}
            style={{ fontSize: "20px" }}
          >
            {isConfirmed ? "calendar_today" : "schedule"}
          </span>
          <p className="text-slate-900 dark:text-white text-sm font-bold">
            {appointment.time} - {appointment.date}
          </p>
        </div>
        <span
          className={`inline-flex items-center justify-center rounded-full px-2.5 py-0.5 text-xs font-bold ${
            isConfirmed
              ? "bg-primary/10 text-primary"
              : "bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400"
          }`}
        >
          {isConfirmed ? "Đã xác nhận" : "Chờ xác nhận"}
        </span>
      </div>
      <div className="flex gap-4">
        <div className="flex flex-1 flex-col justify-between gap-3">
          <div>
            <h3 className="text-slate-900 dark:text-white text-lg font-extrabold leading-tight mb-2">
              {appointment.service}
            </h3>
            <div className="flex flex-col gap-1.5">
              <div className="flex items-start gap-2">
                <span
                  className="material-symbols-outlined text-slate-400 dark:text-slate-500 mt-0.5"
                  style={{ fontSize: "16px" }}
                >
                  person
                </span>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-snug">
                  {appointment.doctor}
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span
                  className="material-symbols-outlined text-slate-400 dark:text-slate-500 mt-0.5"
                  style={{ fontSize: "16px" }}
                >
                  location_on
                </span>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-snug">
                  {appointment.location}
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-3 mt-1">
            <button className="flex-1 flex cursor-pointer items-center justify-center rounded-lg h-9 px-3 bg-primary/10 dark:bg-primary/20 text-primary text-sm font-bold hover:bg-primary/20 transition-colors">
              Chi tiết
            </button>
            {isConfirmed && (
              <button className="flex-1 flex cursor-pointer items-center justify-center rounded-lg h-9 px-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                Dời lịch
              </button>
            )}
          </div>
        </div>
        <div
          className="w-24 h-auto rounded-lg bg-cover bg-center shrink-0 self-start aspect-[3/4]"
          style={{ backgroundImage: `url(${appointment.image})` }}
        ></div>
      </div>
    </div>
  );
};

export default AppointmentListScreen;
