import React from "react";
import { Home, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
 
export function NotFoundPage() {
  const navigate = useNavigate();
 
  return (
    <div className="min-h-screen flex items-center justify-center px-[5%] relative overflow-hidden">
      {/* Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-violet-200 rounded-full mix-blend-multiply filter blur-[80px] opacity-40 animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-[80px] opacity-40 animate-pulse" />
      </div>
 
      <div className="relative z-10 text-center">
        {/* 404 */}
        <div className="mb-6">
          <h1 className="text-[8rem] sm:text-[10rem] font-bold leading-none bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent select-none">
            404
          </h1>
          <div className="w-20 h-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] mx-auto rounded-full" />
        </div>
 
        {/* Message */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-700 mb-3">
            Oops! Halaman Tidak Ditemukan
          </h2>
          <p className="text-slate-400 max-w-md mx-auto leading-relaxed">
            Halaman yang kamu cari mungkin telah dipindahkan, dihapus, atau tidak pernah ada.
          </p>
        </div>
 
        {/* Icon */}
        <div className="mb-10">
          <div className="relative inline-block group">
            <div className="absolute -inset-3 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full blur opacity-10 group-hover:opacity-20 transition duration-500" />
            <div className="relative w-20 h-20 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-4xl shadow-sm">
              🔍
            </div>
          </div>
        </div>
 
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="group flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-200 text-slate-600 hover:text-indigo-600 hover:border-indigo-200 hover:bg-indigo-50 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] bg-white shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            Kembali
          </button>
 
          <button
            onClick={() => navigate("/")}
            className="group flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-indigo-200 active:scale-[0.98]"
          >
            <Home className="w-4 h-4" />
            Beranda
          </button>
        </div>
      </div>
    </div>
  );
}
 
export default NotFoundPage;