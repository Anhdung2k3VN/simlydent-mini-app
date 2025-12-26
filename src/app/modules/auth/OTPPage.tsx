import React from "react";
import { useNavigate } from "react-router-dom";

const OTPPage: React.FC = () => {
  const navigate = useNavigate();

  const handleVerify = () => {
    navigate("/home");
  };

  return (
    <div className="flex flex-col h-screen bg-background p-6 justify-center">
      <h1 className="text-2xl font-bold text-text-primary mb-2">Xác thực OTP</h1>
      <p className="text-text-secondary mb-8">Mã xác thực đã được gửi đến số điện thoại của bạn.</p>

      <div className="flex gap-3 mb-8 justify-center">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="w-12 h-14 border-2 border-slate-200 bg-surface rounded-xl flex items-center justify-center text-xl font-bold text-text-primary">
            {i === 1 ? "•" : ""}
          </div>
        ))}
      </div>
      
      <button 
        onClick={handleVerify}
        className="w-full bg-primary text-white font-bold py-3 rounded-xl shadow-lg shadow-primary/30 active:scale-95 transition-all"
      >
        Xác nhận
      </button>
    </div>
  );
};

export default OTPPage;
