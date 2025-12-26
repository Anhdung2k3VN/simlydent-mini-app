import React from "react";
import { useNavigate } from "react-router-dom";

export const HomeHeader: React.FC = () => {
    const navigate = useNavigate();
    
    return (
      <div className="sticky top-0 z-50 flex items-center bg-background/90 backdrop-blur-md p-4 justify-between border-b border-gray-100 dark:border-gray-800">
        <div 
          className="flex items-center gap-3 cursor-pointer active:opacity-70 transition-opacity"
          onClick={() => navigate("/profile")}
        >
          <div 
            className="rounded-full size-10 ring-2 ring-primary/20 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://picsum.photos/100/100?random=10)' }}
          ></div>
          <div className="flex flex-col">
            <span className="text-xs text-text-secondary font-medium leading-none">SimlyDent</span>
            <span className="text-sm font-bold text-primary">Thành viên</span>
          </div>
        </div>
        <button className="relative flex items-center justify-center rounded-full size-10 bg-surface text-text-primary shadow-sm hover:opacity-80 transition-opacity">
          <span className="material-symbols-outlined !text-[24px]">notifications</span>
          <span className="absolute top-2 right-2 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
          </span>
        </button>
      </div>
    );
};
