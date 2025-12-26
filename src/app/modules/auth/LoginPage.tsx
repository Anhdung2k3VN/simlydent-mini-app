import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");

  const handleLogin = () => {
    if (phone.length >= 10) {
      navigate("/otp", { state: { phone } });
    }
  };

  return (
    <div className="flex flex-col h-screen bg-background p-6 justify-center">
      <div className="flex flex-col items-center mb-10">
        <div className="w-20 h-20 bg-primary rounded-2xl mb-4 flex items-center justify-center">
           <span className="material-symbols-outlined text-white text-4xl">dentistry</span>
        </div>
        <h1 className="text-2xl font-bold text-text-primary">SimlyDent</h1>
        <p className="text-text-secondary">Đặt lịch nha khoa dễ dàng</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-1">Số điện thoại</label>
          <input 
            type="tel" 
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-surface text-text-primary focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400"
            placeholder="Nhập số điện thoại của bạn"
          />
        </div>
        
        <button 
          onClick={handleLogin}
          className="w-full bg-primary text-white font-bold py-3 rounded-xl shadow-lg shadow-primary/30 active:scale-95 transition-all"
        >
          Đăng nhập
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
