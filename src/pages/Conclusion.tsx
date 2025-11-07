import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Conclusion = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0b1120] text-slate-100 overflow-x-hidden">
      <Header />

      <main className="flex-1 py-20 relative overflow-hidden">
        {/* 💫 Hiệu ứng ánh sáng động nền */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-transparent to-black/40 pointer-events-none"></div>
        <div className="absolute top-1/3 left-[20%] w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-3xl animate-pulse-slow pointer-events-none"></div>
        <div className="absolute top-[60%] right-[15%] w-[400px] h-[400px] bg-amber-400/10 rounded-full blur-3xl animate-pulse-slow delay-700 pointer-events-none"></div>

        {/* ✨ flare quét nhẹ qua tiêu đề */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-[-40%] w-[50%] h-full bg-gradient-to-r from-transparent via-yellow-300/10 to-transparent blur-2xl animate-[flare_6s_linear_infinite]" />
        </div>

        <style>{`
          @keyframes flare {
            0% { transform: translateX(-100%); opacity: 0; }
            25% { opacity: 0.6; }
            75% { opacity: 0.6; }
            100% { transform: translateX(200%); opacity: 0; }
          }
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.5; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.05); }
          }
        `}</style>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto animate-fade-in">
            {/* Tiêu đề */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-sky-400 via-amber-300 to-red-400 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(250,204,21,0.25)] tracking-tight">
                Kết luận
              </h1>
              <p className="text-lg text-slate-300/80">
                Tổng kết mối quan hệ giữa Con người, Lao động và Trí tuệ nhân
                tạo
              </p>
            </div>

            {/* Card nội dung chính */}
            <Card className="backdrop-blur-xl bg-white/5 border border-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.1)] hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] transition-all duration-700 rounded-3xl">
              <CardContent className="p-10 md:p-14 space-y-8 text-justify leading-relaxed text-slate-200/90">
                <p className="text-lg">
                  Trong kỷ nguyên trí tuệ nhân tạo, bản chất của lao động con
                  người đang thay đổi sâu sắc. Theo Karl Marx,{" "}
                  <span className="font-semibold italic text-sky-300">
                    lao động cụ thể
                  </span>{" "}
                  tạo ra giá trị sử dụng, còn{" "}
                  <span className="font-semibold italic text-sky-300">
                    lao động trừu tượng
                  </span>{" "}
                  là nguồn gốc của giá trị hàng hóa. Máy móc và AI không thể tự
                  tạo ra giá trị mới – chúng chỉ chuyển tải giá trị đã có sẵn.
                  Chỉ{" "}
                  <span className="font-bold text-amber-400">con người</span>{" "}
                  mới có khả năng sáng tạo, mới “thổi hồn” vào vật chất, biến nó
                  thành giá trị xã hội.
                </p>

                <p className="text-lg">
                  Ở Việt Nam, chiến lược phát triển con người gắn liền với triết
                  lý:{" "}
                  <span className="italic text-slate-100/90">
                    “Công nghệ là phương tiện, con người là mục tiêu.”
                  </span>{" "}
                  Khi trí tuệ nhân tạo phát triển, nhiệm vụ của chúng ta không
                  phải là chạy theo máy móc, mà là học cách sử dụng nó để mở
                  rộng trí tuệ, trí tưởng tượng, và giá trị nhân văn. Đó là tinh
                  thần của thời đại — kết hợp lý luận Mác – Lênin với năng lực
                  sáng tạo mới.
                </p>

                {/* 🌌 Quote Card */}
                <div className="mt-12 text-center relative p-8 rounded-2xl border border-sky-400/30 bg-gradient-to-br from-blue-950/50 to-slate-900/40 backdrop-blur-lg shadow-[0_0_25px_rgba(56,189,248,0.1)] hover:shadow-[0_0_35px_rgba(56,189,248,0.2)] transition-all duration-700">
                  <p className="text-xl italic text-blue-100 font-light">
                    “AI có thể giúp con người làm việc nhanh hơn, nhưng chỉ con
                    người mới có thể làm cho thế giới trở nên ý nghĩa hơn.”
                  </p>
                  <p className="mt-4 text-sky-400 font-medium">
                    — C. Mác (nếu ông sống trong thế kỷ XXI)
                  </p>
                </div>

                {/* 🔭 Reflection */}
                <div className="mt-16 text-center">
                  <p className="text-lg text-slate-200/90">
                    <span className="font-semibold text-sky-400">AI</span> không
                    phải là điểm kết thúc của lao động,
                    <br />
                    mà là{" "}
                    <span className="font-semibold text-amber-300">
                      tấm gương phản chiếu trí tuệ con người.
                    </span>
                  </p>
                  <p className="mt-4 text-slate-400/80 text-sm italic">
                    Tương lai không thuộc về máy móc. Tương lai thuộc về những
                    ai biết hiểu — và sáng tạo cùng chúng.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Conclusion;
