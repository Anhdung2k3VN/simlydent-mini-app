import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white p-4 text-center">
      <div className="text-6xl mb-4">😕</div>
      <h1 className="text-xl font-bold mb-2">Không tìm thấy trang</h1>
      <p className="text-gray-500 mb-6">Trang bạn tìm kiếm không tồn tại hoặc đã bị di chuyển.</p>
      <button 
        onClick={() => navigate("/")}
        className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium active:scale-95 transition-transform"
      >
        Về trang chủ
      </button>
    </div>
  );
};

export default NotFound;
