import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const SERVICES = [
  {
    id: "1",
    label: "Niềng răng",
    icon: "dentistry",
    color: "bg-blue-50 text-blue-600",
  },
  {
    id: "2",
    label: "Răng sứ",
    icon: "diamond",
    color: "bg-purple-50 text-purple-600",
  },
  {
    id: "3",
    label: "Tẩy trắng",
    icon: "auto_awesome",
    color: "bg-yellow-50 text-yellow-600",
  },
  {
    id: "4",
    label: "Implant",
    icon: "medical_services",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    id: "5",
    label: "Nhổ răng",
    icon: "dentistry",
    color: "bg-red-50 text-red-600",
  },
  {
    id: "6",
    label: "Tổng quát",
    icon: "health_and_safety",
    color: "bg-slate-50 text-slate-600",
  },
];

const MORNING_SLOTS = ["08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30"];
const AFTERNOON_SLOTS = ["13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00"];
const BOOKED_SLOTS = ["09:00", "10:30", "14:30", "16:00"]; // Mock booked slots

const BookingPage: React.FC = () => {
  const navigate = useNavigate();

  const [service, setService] = useState(SERVICES[0].id);
  const [doctor, setDoctor] = useState("random");
  const [time, setTime] = useState("09:30");
  const [selectedDate, setSelectedDate] = useState(() => new Date());

  // Generate next 14 days
  const upcomingDays = useMemo(() => {
    const days: Date[] = [];
    const today = new Date();
    for (let i = 0; i < 14; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      days.push(d);
    }
    return days;
  }, []);

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden pb-24 bg-background font-display text-text-primary">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center bg-background/95 backdrop-blur-sm p-4 pt-safe-top pb-2 justify-between border-b border-slate-100 dark:border-slate-800">
        <button
          onClick={() => navigate(-1)}
          className="flex size-10 items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h1 className="text-lg font-bold flex-1 text-center pr-10">
          Đặt lịch khám
        </h1>
      </header>

      {/* Service Selection */}
      <section className="pt-6">
        <div className="px-4 pb-3">
          <h2 className="text-xl font-bold">Dịch vụ</h2>
        </div>
        <div className="flex overflow-x-auto no-scrollbar px-4 gap-3">
          {SERVICES.map((s) => (
            <button
              key={s.id}
              onClick={() => setService(s.id)}
              className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all ${
                service === s.id
                  ? "border-primary bg-primary/5 text-primary"
                  : "border-slate-200 dark:border-slate-800 bg-surface"
              }`}
            >
              <span className={`material-symbols-outlined text-xl`}>
                {s.icon}
              </span>
              <span className="font-bold text-sm">{s.label}</span>
              {service === s.id && (
                <span className="material-symbols-outlined text-lg fill">
                  check_circle
                </span>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Doctor selection */}
      <section className="pt-6">
        <div className="flex items-center justify-between px-4 pb-3">
          <h2 className="text-xl font-bold">Nha sĩ</h2>
          <button className="text-primary text-sm font-semibold">
            Xem tất cả
          </button>
        </div>

        <div className="flex overflow-x-auto no-scrollbar px-4 gap-4">
          {/* Random */}
          <DoctorItem
            selected={doctor === "random"}
            label="Ngẫu nhiên"
            icon="medical_services"
            onClick={() => setDoctor("random")}
          />

          <DoctorItem
            label="Bs. Hạnh"
            sub="Niềng răng"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuCNjo8zxD2PlUaqz4tSZMijgTvPzVTfYHczTF8BfB6HVr_dw2RqAzhLCr714N9dLvW2SmPb6q9AdtuARAI6KLeIXjnnRKlo1BCLn9HmS6xAPhhy2SicOydCJDXwB0Mhs4Rc14cuv4go6qU7jaYib1ycXjRPKjgFHuFfasE4Nc5AhR3Rf3m0C8-HWNHrfzWYFmikJq0eYkjqk86IZNvMnXyq2MxCknELnlhRYLmEr1JTUc14mPxtHWrQiZIw449EtgrS4HlWQWi1h40"
            onClick={() => setDoctor("hanh")}
          />

          <DoctorItem
            label="Bs. Tuấn"
            sub="Nha chu"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuDJnFDL_ShfDMwEtQDeaQBQeacQIGPPufAnmpccLgckOlnj7Ny_t5rV-vV0SinzFamE6cvr5uDnkBJogMbKulLoLayq4Tu9NgYm4jSG6-TfmDfv3yzsMvEQ2zYPTN_EtyjyryDb2trShP3NcHQYxf377HQgyYrk6OhLalGyF1pg_zco_1tJA6ZHnIuY1N8IDBWZJYU2rjhwfNhJDNRA4mrLuP7F_YMOX8cojIjaOUhyfu7NaHOaCTTNJp2lFl_VT2KaAM02Pt7KjMM"
            onClick={() => setDoctor("tuan")}
          />
        </div>
      </section>

      {/* Compact Date Selection */}
      <section className="flex flex-col mt-6">
        <div className="px-4 pb-3 flex justify-between items-center">
          <h2 className="text-xl font-bold">Ngày khám</h2>
          <span className="text-sm font-medium text-text-secondary">
            Tháng {selectedDate.getMonth() + 1}, {selectedDate.getFullYear()}
          </span>
        </div>

        <div className="flex overflow-x-auto no-scrollbar px-4 gap-3 py-1">
          {upcomingDays.map((date, idx) => {
            const isSelected = isSameDay(date, selectedDate);
            return (
              <button
                key={idx}
                onClick={() => setSelectedDate(date)}
                className={`flex flex-col items-center justify-center min-w-[64px] h-[72px] rounded-2xl border transition-all ${
                  isSelected
                    ? "bg-primary text-white border-primary shadow-lg shadow-primary/30 scale-105"
                    : "bg-surface border-transparent text-text-secondary hover:bg-slate-50 dark:hover:bg-slate-800"
                }`}
              >
                <span className="text-xs font-medium uppercase mb-1">
                  {getDayName(date)}
                </span>
                <span className="text-xl font-bold">{date.getDate()}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Time selection */}
      <section className="px-4 mt-8">
        <h2 className="text-xl font-bold mb-4">Giờ khám</h2>
        
        {/* Morning */}
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-text-secondary mb-2 uppercase tracking-wider">Buổi sáng</h3>
          <div className="grid grid-cols-4 gap-3">
            {MORNING_SLOTS.map((t) => {
              const isBooked = BOOKED_SLOTS.includes(t);
              return (
                <button
                  key={t}
                  disabled={isBooked}
                  onClick={() => setTime(t)}
                  className={`py-2.5 rounded-xl text-sm font-bold transition-all relative ${
                    isBooked 
                      ? "bg-slate-100 dark:bg-slate-800/50 text-slate-400 cursor-not-allowed line-through decoration-slate-400"
                      : time === t
                        ? "bg-primary text-white shadow-md shadow-primary/30"
                        : "bg-surface border border-slate-200 dark:border-slate-800 hover:border-primary text-slate-700 dark:text-slate-300"
                  }`}
                >
                  {t}
                </button>
              );
            })}
          </div>
        </div>

        {/* Afternoon */}
        <div>
          <h3 className="text-sm font-semibold text-text-secondary mb-2 uppercase tracking-wider">Buổi chiều</h3>
          <div className="grid grid-cols-4 gap-3">
            {AFTERNOON_SLOTS.map((t) => {
               const isBooked = BOOKED_SLOTS.includes(t);
               return (
                <button
                  key={t}
                  disabled={isBooked}
                  onClick={() => setTime(t)}
                  className={`py-2.5 rounded-xl text-sm font-bold transition-all relative ${
                    isBooked 
                      ? "bg-slate-100 dark:bg-slate-800/50 text-slate-400 cursor-not-allowed line-through decoration-slate-400"
                      : time === t
                        ? "bg-primary text-white shadow-md shadow-primary/30"
                        : "bg-surface border border-slate-200 dark:border-slate-800 hover:border-primary text-slate-700 dark:text-slate-300"
                  }`}
                >
                  {t}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/90 border-t border-slate-100 dark:border-slate-800 backdrop-blur-md z-40 pb-safe">
        <div className="max-w-md mx-auto flex items-center justify-between gap-4">
          <div>
            <span className="text-xs text-slate-500">Thời gian dự kiến</span>
            <p className="font-bold text-sm text-primary">
              {time}, {formatDateVN(selectedDate)}
            </p>
          </div>

          <button
            onClick={() => navigate("/appointments", { replace: true })}
            className="bg-primary hover:bg-primary-dark text-white rounded-xl px-6 py-3 font-bold shadow-lg shadow-primary/30 active:scale-95 flex items-center gap-2"
          >
            Xác nhận
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;

/* --------- Components & Helpers --------- */

const DoctorItem: React.FC<{
  label: string;
  sub?: string;
  image?: string;
  icon?: string;
  selected?: boolean;
  onClick: () => void;
}> = ({ label, sub, image, icon, selected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col items-center gap-2 min-w-[80px] cursor-pointer transition-opacity ${
        selected ? "opacity-100" : "opacity-60 hover:opacity-100"
      }`}
    >
      <div
        className={`relative w-16 h-16 rounded-full overflow-hidden flex items-center justify-center transition-all ${
          selected
            ? "bg-primary text-white ring-2 ring-primary ring-offset-2 scale-105"
            : "bg-slate-100 dark:bg-slate-800"
        }`}
      >
        {image ? (
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
        ) : (
          <span className="material-symbols-outlined text-3xl">{icon}</span>
        )}

        {selected && (
          <span className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
            <span className="material-symbols-outlined text-primary text-sm font-bold">
              check_circle
            </span>
          </span>
        )}
      </div>

      <div className="text-center">
        <p className={`text-sm ${selected ? "font-bold text-primary" : "font-medium"}`}>
          {label}
        </p>
        {sub && (
          <p className="text-xs text-slate-500 dark:text-slate-400">{sub}</p>
        )}
      </div>
    </div>
  );
};

function formatDateVN(d: Date) {
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = d.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}

function getDayName(d: Date) {
  const days = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
  return days[d.getDay()];
}

function isSameDay(d1: Date, d2: Date) {
  return (
    d1.getDate() === d2.getDate() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getFullYear() === d2.getFullYear()
  );
}
