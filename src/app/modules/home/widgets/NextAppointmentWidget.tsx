import React from "react";

interface Props {
    onNavigate: (to: string, options?: any) => void;
}

export const NextAppointmentWidget: React.FC<Props> = ({ onNavigate }) => {
  // Mock data - in real app this comes from API
  const nextAppointment = {
    id: "APT-001",
    doctor: "Bs. Trần Hạnh",
    specialty: "Niềng răng - Chỉnh nha",
    location: "Phòng khám số 1 • Ghế 02",
    date: "26/12/2025",
    time: "09:30",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNjo8zxD2PlUaqz4tSZMijgTvPzVTfYHczTF8BfB6HVr_dw2RqAzhLCr714N9dLvW2SmPb6q9AdtuARAI6KLeIXjnnRKlo1BCLn9HmS6xAPhhy2SicOydCJDXwB0Mhs4Rc14cuv4go6qU7jaYib1ycXjRPKjgFHuFfasE4Nc5AhR3Rf3m0C8-HWNHrfzWYFmikJq0eYkjqk86IZNvMnXyq2MxCknELnlhRYLmEr1JTUc14mPxtHWrQiZIw449EtgrS4HlWQWi1h40"
  };

  return (
      <div className="flex flex-col gap-3 px-5 pt-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-text-primary flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">calendar_clock</span>
            Lịch hẹn sắp tới
          </h3>
          <button onClick={() => onNavigate("/appointments")} className="text-primary text-sm font-bold hover:underline">Xem tất cả</button>
        </div>
        
        <div className="w-full bg-surface rounded-card p-0 shadow-card border border-gray-100 dark:border-gray-800 relative overflow-hidden group">
          {/* Status Bar */}
          <div className="bg-primary/10 px-5 py-2 flex justify-between items-center border-b border-primary/10">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-primary text-xs font-bold uppercase tracking-wider">Sắp diễn ra</span>
            </div>
            <span className="text-text-secondary text-xs font-medium bg-white dark:bg-surface-dark px-2 py-0.5 rounded text-center">#{nextAppointment.id}</span>
          </div>

          <div className="p-5">
            <div className="flex gap-4 items-start">
              <div 
                className="shrink-0 rounded-full border-2 border-primary/20 overflow-hidden size-14 bg-gray-100 bg-cover bg-center"
                style={{ backgroundImage: `url(${nextAppointment.image})` }}
              ></div>
              <div className="flex-1 min-w-0">
                <h4 className="text-lg font-bold text-text-primary truncate">{nextAppointment.doctor}</h4>
                <p className="text-primary text-sm font-medium truncate mb-1">{nextAppointment.specialty}</p>
                <div className="flex items-center gap-2 text-text-secondary text-xs">
                   <span className="material-symbols-outlined !text-[14px]">location_on</span>
                   {nextAppointment.location}
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between bg-background rounded-lg p-3">
               <div className="flex flex-col">
                  <span className="text-xs text-text-secondary mb-0.5">Ngày khám</span>
                  <span className="text-text-primary font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined !text-[16px]">event</span>
                    {nextAppointment.date}
                  </span>
               </div>
               <div className="w-px h-8 bg-gray-200 dark:bg-gray-700"></div>
               <div className="flex flex-col text-right">
                  <span className="text-xs text-text-secondary mb-0.5">Giờ khám</span>
                  <span className="text-primary font-bold flex items-center gap-1 justify-end">
                    <span className="material-symbols-outlined !text-[16px]">schedule</span>
                    {nextAppointment.time}
                  </span>
               </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-4">
              <button 
                onClick={() => onNavigate(`/appointments/${nextAppointment.id}`)}
                className="flex items-center justify-center h-10 rounded-button border border-gray-200 dark:border-gray-700 bg-surface text-text-primary font-semibold text-sm hover:opacity-80 transition-colors"
                >
                Chi tiết
              </button>
              <button 
                className="flex items-center justify-center h-10 rounded-button bg-primary text-white font-semibold text-sm shadow-lg shadow-primary/20 hover:opacity-90 transition-colors"
              >
                Nhắc hẹn
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};
