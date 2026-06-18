import React from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
 
export function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-[5%] relative overflow-hidden">
      {/* Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-violet-200 rounded-full mix-blend-multiply filter blur-[80px] opacity-40 animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-[80px] opacity-40 animate-pulse" />
      </div>
 
      <div className="relative z-10 text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full blur opacity-10 group-hover:opacity-20 transition duration-500 animate-pulse" />
            <div className="relative w-20 h-20 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center shadow-sm">
              <CheckCircle className="w-10 h-10 text-indigo-500" />
            </div>
          </div>
        </div>
 
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
          Thank You!
        </h1>
 
        {/* Subtitle */}
        <p className="text-slate-400 text-lg mb-8 max-w-md mx-auto leading-relaxed">
          Pesanmu sudah diterima. Saya akan segera membalasnya sesegera mungkin.
        </p>
 
        {/* Divider */}
        <div className="w-16 h-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] mx-auto rounded-full mb-8" />
 
        {/* CTA */}
        <Link to="/">
          <button className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-semibold text-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-indigo-200 active:scale-[0.98]">
            Kembali ke Beranda
          </button>
        </Link>
      </div>
    </div>
  );
}
 
export default ThankYouPage;