import React, { useState, useEffect } from "react";
import { Share2, User, Mail, MessageSquare, Send } from "lucide-react";
import SocialLinks from "../components/SocialLinks";
import Komentar from "../components/Commentar";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    Swal.fire({
      title: 'Mengirim Pesan...',
      html: 'Harap tunggu selagi kami mengirim pesan Anda',
      allowOutsideClick: false,
      didOpen: () => { Swal.showLoading(); }
    });

    try {
      const formSubmitUrl = 'https://formsubmit.co/rezkyramadhan@gmail.com';
      const submitData = new FormData();
      submitData.append('name', formData.name);
      submitData.append('email', formData.email);
      submitData.append('message', formData.message);
      submitData.append('_subject', 'Pesan Baru dari Website Portfolio');
      submitData.append('_captcha', 'false');
      submitData.append('_template', 'table');

      await axios.post(formSubmitUrl, submitData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      Swal.fire({
        title: 'Berhasil!',
        text: 'Pesan Anda telah berhasil terkirim!',
        icon: 'success',
        confirmButtonColor: '#6366f1',
        timer: 2000,
        timerProgressBar: true
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      if (error.request && error.request.status === 0) {
        Swal.fire({
          title: 'Berhasil!',
          text: 'Pesan Anda telah berhasil terkirim!',
          icon: 'success',
          confirmButtonColor: '#6366f1',
          timer: 2000,
          timerProgressBar: true
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        Swal.fire({
          title: 'Gagal!',
          text: 'Terjadi kesalahan. Silakan coba lagi nanti.',
          icon: 'error',
          confirmButtonColor: '#6366f1'
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="px-[5%] sm:px-[5%] lg:px-[10%]">
      {/* Header */}
      <div className="text-center lg:mt-[5%] mt-10 mb-2 sm:px-0 px-[5%]">
        <h2
          data-aos="fade-down"
          data-aos-duration="1000"
          className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
        >
          Hubungi Saya
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="1100"
          className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2"
        >
          Punya pertanyaan? Kirimi saya pesan, dan saya akan segera membalasnya.
        </p>
      </div>

      <div
        className="h-auto py-10 flex items-center justify-center"
        id="Contact"
      >
        <div className="container px-[1%] grid grid-cols-1 lg:grid-cols-[45%_55%] 2xl:grid-cols-[35%_65%] gap-8">

          {/* Form Card — solid white, no transparency */}
          <div
            className="rounded-3xl p-5 py-10 sm:p-10 transition-all duration-500 hover:shadow-xl hover:shadow-indigo-500/10"
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 24px 0 rgba(99,102,241,0.07)',
            }}
          >
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                  Hubungi
                </h2>
                <p className="text-slate-500">
                  Ada yang ingin didiskusikan? Kirim saya pesan dan mari kita bicara.
                </p>
              </div>
              <Share2 className="w-10 h-10 text-indigo-400 opacity-60" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div data-aos="fade-up" data-aos-delay="100" className="relative group">
                <User className="absolute left-4 top-4 w-5 h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors z-10" />
                <input
                  type="text"
                  name="name"
                  placeholder="Nama Anda"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  style={{ backgroundColor: '#f8fafc' }}
                  className="w-full p-4 pl-12 rounded-xl border border-slate-200 placeholder-slate-400 text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-300/50 focus:border-indigo-300 transition-all duration-300 hover:border-indigo-200 disabled:opacity-50"
                  required
                />
              </div>

              {/* Email */}
              <div data-aos="fade-up" data-aos-delay="200" className="relative group">
                <Mail className="absolute left-4 top-4 w-5 h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors z-10" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Anda"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  style={{ backgroundColor: '#f8fafc' }}
                  className="w-full p-4 pl-12 rounded-xl border border-slate-200 placeholder-slate-400 text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-300/50 focus:border-indigo-300 transition-all duration-300 hover:border-indigo-200 disabled:opacity-50"
                  required
                />
              </div>

              {/* Message */}
              <div data-aos="fade-up" data-aos-delay="300" className="relative group">
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors z-10" />
                <textarea
                  name="message"
                  placeholder="Pesan Anda"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  style={{ backgroundColor: '#f8fafc' }}
                  className="w-full resize-none p-4 pl-12 rounded-xl border border-slate-200 placeholder-slate-400 text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-300/50 focus:border-indigo-300 transition-all duration-300 hover:border-indigo-200 h-[9.9rem] disabled:opacity-50"
                  required
                />
              </div>

              <button
                data-aos="fade-up"
                data-aos-delay="400"
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-indigo-200 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
              </button>
            </form>

            <div className="mt-10 pt-6 border-t border-slate-100">
              <SocialLinks />
            </div>
          </div>

          {/* Comment Card — solid white */}
          <div
            className="rounded-3xl p-3 py-3 md:p-10 md:py-8 transition-all duration-500 hover:shadow-xl hover:shadow-indigo-500/10"
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 24px 0 rgba(99,102,241,0.07)',
            }}
          >
            <Komentar />
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;