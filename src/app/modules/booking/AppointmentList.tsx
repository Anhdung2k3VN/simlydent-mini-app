import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Appointment } from "@/types";
import { DUMMY_APPOINTMENTS } from "@/constants";
import BottomNavigation from "@/components/BottomNavigation";

const AppointmentListScreen: React.FC = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");

  const handleSelect = (apt: Appointment) => {
    navigate(`/appointments/${apt.id}`, { state: apt });
  };

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col bg-background overflow-y-auto pb-32">
      {/* Sticky Header */}
      <div className="sticky top-0 z-30 flex items-center bg-background/95 backdrop-blur-sm p-4 pt-safe-top border-b border-slate-200 dark:border-slate-800">
        <button
          onClick={() => navigate(-1)}
          className="text-text-primary flex size-10 shrink-0 items-center justify-center rounded-full active:bg-slate-200 dark:active:bg-slate-800 transition-colors"
        >
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "24px" }}
          >
            chevron_left
          </span>
        </button>

        <h2 className="text-text-primary text-lg font-bold leading-tight flex-1 text-center pr-10">
          Lịch hẹn
        </h2>
      </div>

      {/* Tabs */}
      <div className="bg-background pt-2 sticky top-[60px] z-20 transition-colors">
        <div className="flex border-b border-slate-200 dark:border-slate-800 px-4 justify-between">
          <button
            onClick={() => setTab("upcoming")}
            className={`flex flex-col items-center justify-center border-b-[3px] flex-1 transition-all pb-3 pt-2 ${
              tab === "upcoming"
                ? "border-b-primary text-primary"
                : "border-b-transparent text-text-secondary"
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
                : "border-b-transparent text-text-secondary"
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
              onClick={() => handleSelect(apt)}
            />
          ))
        ) : (
          <div className="text-center py-20 text-text-secondary font-medium">
            Chưa có lịch hẹn đã qua
          </div>
        )}
      </div>

      <BottomNavigation />
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
      className="flex flex-col gap-4 rounded-xl bg-surface p-4 shadow-sm border border-transparent dark:border-slate-800 cursor-pointer active:scale-[0.98] transition-transform"
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
          <p className="text-text-primary text-sm font-bold">
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
            <h3 className="text-text-primary text-lg font-extrabold leading-tight mb-2">
              {appointment.service}
            </h3>

            <div className="flex flex-col gap-1.5">
              <div className="flex items-start gap-2">
                <span
                  className="material-symbols-outlined text-text-secondary mt-0.5"
                  style={{ fontSize: "16px" }}
                >
                  person
                </span>
                <p className="text-text-secondary text-sm font-medium leading-snug">
                  {appointment.doctor}
                </p>
              </div>

              <div className="flex items-start gap-2">
                <span
                  className="material-symbols-outlined text-text-secondary mt-0.5"
                  style={{ fontSize: "16px" }}
                >
                  location_on
                </span>
                <p className="text-text-secondary text-sm font-medium leading-snug">
                  {appointment.location}
                </p>
              </div>
            </div>
          </div>

          {/* Buttons chỉ để UI; click cả card đã đi detail */}
          <div className="flex gap-3 mt-1">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onClick();
              }}
              className="flex-1 flex items-center justify-center rounded-lg h-9 px-3 bg-primary/10 dark:bg-primary/20 text-primary text-sm font-bold hover:bg-primary/20 transition-colors"
            >
              Chi tiết
            </button>

            {isConfirmed && (
              <button
                type="button"
                onClick={(e) => e.stopPropagation()}
                className="flex-1 flex items-center justify-center rounded-lg h-9 px-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
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
