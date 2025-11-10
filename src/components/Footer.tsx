const Footer = () => {
  return (
    <footer className="relative mt-auto overflow-hidden bg-gradient-to-b from-[#FFF8E7] via-[#FFF2D4] to-[#FFEBC7] text-gray-800 border-t border-yellow-200/50">
      {/* 🌤️ Hiệu ứng ánh sáng vàng mịn quét ngang */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F7B733]/10 via-[#F45D48]/10 to-[#F7B733]/10 blur-2xl animate-[lightmove_12s_linear_infinite]" />
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white/70 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 py-10 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Thông tin nhóm */}
          <div className="space-y-1">
            <p className="font-semibold text-gray-900 tracking-wide">
              MLN122 – FPT University
            </p>
            <p className="text-sm text-gray-600">Human & AI Project · 2025</p>
          </div>

          {/* Ghi chú trích dẫn */}
          <div className="max-w-sm md:text-right text-sm text-gray-700/90 leading-relaxed italic">
            Có sử dụng AI trong việc tóm tắt và hệ thống hóa chương 6 của{" "}
            <span className="font-medium text-gray-900">
              Giáo trình Kinh tế Chính trị Mác – Lênin
            </span>
            , đồng thời phân tích lại các khái niệm:{" "}
            <span className="text-gray-900">
              lao động cụ thể, lao động trừu tượng, giá trị thặng dư
            </span>
            .
          </div>
        </div>

        {/* Viền sáng nhẹ */}
        <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-[#F7B733]/40 to-transparent" />

        {/* Credit */}
        <p className="text-center mt-6 text-xs text-gray-600/80">
          © {new Date().getFullYear()} — Designed & Curated by{" "}
          <span className="font-semibold text-gray-900 hover:text-[#F7B733] transition-colors">
            Group 7-MLN211
          </span>
        </p>
      </div>

      <style>{`
        @keyframes lightmove {
          0% { transform: translateX(-100%); opacity: 0.5; }
          50% { opacity: 0.8; }
          100% { transform: translateX(100%); opacity: 0.5; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
