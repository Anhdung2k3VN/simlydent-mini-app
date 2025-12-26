import React from "react";

export const PromoBannerWidget: React.FC = () => {
    return (
      <div className="px-5 mt-8 mb-24">
        <div className="w-full rounded-card bg-gradient-to-br from-teal-500 to-blue-600 p-6 flex flex-col relative overflow-hidden shadow-card shadow-teal-500/20 group cursor-pointer">
          {/* Decorative circles */}
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all"></div>
          <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          
          <div className="relative z-10 flex flex-col gap-2 text-white">
            <span className="inline-block px-2 py-0.5 bg-white/20 backdrop-blur-sm rounded text-xs font-bold w-fit uppercase tracking-wider">
              Ưu đãi tháng 12
            </span>
            <h3 className="text-xl font-bold leading-tight max-w-[70%]">
              Tự tin cười xinh<br/>
              <span className="text-yellow-300">Giảm 50%</span> Tẩy trắng
            </h3>
            <p className="text-white/80 text-sm mt-1 mb-2 max-w-[60%]">
              Áp dụng cho khách hàng đặt lịch online
            </p>
            
            <button className="w-fit bg-white text-teal-700 px-5 py-2 rounded-full font-bold text-sm shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-1">
              Đặt ngay
              <span className="material-symbols-outlined !text-[16px]">arrow_forward</span>
            </button>
          </div>

          {/* Illustrated Icon */}
          <div className="absolute -bottom-4 -right-2 text-white/90 group-hover:scale-110 transition-transform duration-500">
             <span className="material-symbols-outlined !text-[140px] opacity-20 rotate-[-15deg]">dentistry</span>
          </div>
           <div className="absolute bottom-4 right-4 text-white group-hover:scale-110 transition-transform duration-300">
             <span className="material-symbols-outlined !text-[80px] drop-shadow-lg">clean_hands</span>
          </div>
        </div>
      </div>
    );
};
