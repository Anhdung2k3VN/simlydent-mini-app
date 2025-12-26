import React from "react";
import { useNavigate } from "react-router-dom";
import { DUMMY_RECORDS } from "@/constants";
import BottomNavigation from "@/components/BottomNavigation";

const MedicalRecordsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col bg-background overflow-x-hidden transition-colors">
      {/* Header */}
      <div className="sticky top-0 z-20 flex items-center bg-background/95 backdrop-blur-md p-4 pt-safe-top pb-2 justify-between border-b border-slate-200 dark:border-slate-800">
        <button
          onClick={() => navigate(-1)}
          className="text-text-primary flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-text-primary text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10">
          Hồ sơ khám
        </h2>
      </div>

      {/* Filters */}
      <div className="sticky top-[60px] z-10 bg-background pt-2 pb-4 transition-colors">
        <div className="flex gap-3 px-4 overflow-x-auto no-scrollbar snap-x">
          {[
            "Tất cả",
            "Khám tổng quát",
            "Niềng răng",
            "Nhổ răng",
            "Tẩy trắng",
          ].map((filter, i) => (
            <button
              key={i}
              className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 snap-start transition-all active:scale-95 ${
                i === 0
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-surface border border-slate-200 dark:border-slate-700 text-text-secondary"
              }`}
            >
              <p className="text-sm font-semibold">{filter}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="flex flex-col px-4 pb-32">
        {DUMMY_RECORDS.map((record, index) => (
          <div
            key={record.id}
            className="grid grid-cols-[40px_1fr] gap-x-3 group"
          >
            {/* Timeline dot */}
            <div className="flex flex-col items-center pt-2">
              <div
                className={`relative flex items-center justify-center size-8 rounded-full z-10 border-2 border-background ${getIconBackground(
                  record.type
                )}`}
              >
                <span className="material-symbols-outlined text-[18px] fill">
                  {getIcon(record.type)}
                </span>
              </div>
              {index !== DUMMY_RECORDS.length - 1 && (
                <div className="w-[2px] bg-slate-200 dark:bg-slate-700 h-full -mt-2 rounded-b-full"></div>
              )}
            </div>

            {/* Card */}
            <div className="flex flex-1 flex-col pb-6">
              <div
                className="bg-surface p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => navigate(`/records/${record.id}`)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    navigate(`/records/${record.id}`);
                  }
                }}
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <span className="bg-slate-100 dark:bg-slate-700 text-text-secondary text-xs font-bold px-2 py-1 rounded-md">
                      {record.date}
                    </span>
                    <span className="bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-medium px-2 py-1 rounded-md flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">
                        check
                      </span>
                      Hoàn thành
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-slate-400 text-xl">
                    chevron_right
                  </span>
                </div>

                <h3 className="text-text-primary text-base font-bold leading-tight mb-1">
                  {record.title}
                </h3>

                <div className="flex items-center gap-2 text-text-secondary text-sm mb-3">
                  <span className="material-symbols-outlined text-[16px]">
                    person
                  </span>
                  <span>{record.doctor}</span>
                </div>

                <div className="text-text-secondary text-sm bg-slate-50 dark:bg-slate-800/50 p-2 rounded-lg border border-slate-100 dark:border-slate-700/50">
                  <p className="line-clamp-2">{record.summary}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <BottomNavigation />
    </div>
  );
};

function getIcon(type: string) {
  switch (type) {
    case "dentistry":
      return "dentistry";
    case "orthopedics":
      return "orthopedics";
    case "surgery":
      return "medical_services";
    default:
      return "history";
  }
}

function getIconBackground(type: string) {
  switch (type) {
    case "dentistry":
      return "bg-primary/10 text-primary";
    case "orthopedics":
      return "bg-purple-100 text-purple-600";
    case "surgery":
      return "bg-orange-100 text-orange-600";
    default:
      return "bg-slate-100 text-slate-500";
  }
}

export default MedicalRecordsPage;
