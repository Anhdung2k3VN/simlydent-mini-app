import React from "react";
import { 
  IconBraces, 
  IconImplant, 
  IconCrown, 
  IconWhitening, 
  IconExtraction, 
  IconCleaning, 
  IconGeneral, 
  IconPrice 
} from "./DentalIcons";

interface Props {
  onNavigate: (to: string, options?: any) => void;
}

interface ServiceItemProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ icon, label, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="flex flex-col items-center gap-2 group p-2 hover:bg-gray-50 dark:hover:bg-white/5 rounded-xl transition-colors"
    >
      <div className="size-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">
        {icon}
      </div>
      <span className="text-xs font-bold text-text-primary text-center line-clamp-2 leading-tight min-h-[2.5em] flex items-center justify-center">
        {label}
      </span>
    </button>
  );
};

export const FeaturedServicesWidget: React.FC<Props> = ({ onNavigate }) => {
  const services = [
    { id: "nieng-rang", label: "Niềng răng", icon: <IconBraces /> },
    { id: "implant", label: "Trồng Implant", icon: <IconImplant /> },
    { id: "rang-su", label: "Bọc Răng sứ", icon: <IconCrown /> },
    { id: "tay-trang", label: "Tẩy trắng", icon: <IconWhitening /> },
    { id: "nho-rang", label: "Nhổ răng", icon: <IconExtraction /> },
    { id: "cao-voi", label: "Cạo vôi", icon: <IconCleaning /> },
    { id: "tong-quat", label: "Tổng quát", icon: <IconGeneral /> },
    { id: "bang-gia", label: "Bảng giá", icon: <IconPrice /> },
  ];

  return (
    <div className="flex flex-col gap-3 px-5 pt-8">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-bold text-text-primary flex items-center gap-2">
           <span className="material-symbols-outlined text-primary">medical_information</span>
           Dịch vụ nổi bật
        </h3>
        <button className="text-text-secondary text-sm font-semibold hover:text-primary transition-colors flex items-center gap-1">
          Xem tất cả
          <span className="material-symbols-outlined !text-[16px]">chevron_right</span>
        </button>
      </div>
      
      <div className="bg-surface rounded-card p-4 shadow-card border border-gray-100 dark:border-gray-800">
        <div className="grid grid-cols-4 gap-x-2 gap-y-4">
          {services.map((service) => (
            <ServiceItem 
              key={service.id}
              icon={service.icon}
              label={service.label}
              onClick={() => onNavigate(`/services/${service.id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
