import React from "react";

export const GreetingWidget: React.FC = () => {
    return (
      <div className="px-5 pt-6 pb-2">
        <div className="flex flex-col">
          <span className="text-text-secondary text-sm font-medium mb-1">Chào buổi sáng,</span>
          <h2 className="text-text-primary text-2xl font-bold leading-tight">
            Nguyễn Văn A
          </h2>
          <p className="text-primary text-sm font-medium mt-1 flex items-center gap-1">
            <span className="material-symbols-outlined !text-[16px]">dentistry</span>
            <span>Hãy giữ nụ cười luôn toả sáng!</span>
          </p>
        </div>
      </div>
    );
};
