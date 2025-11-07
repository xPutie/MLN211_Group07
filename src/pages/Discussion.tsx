import { useState } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LayoutGrid, Play } from "lucide-react";

const Discussion = () => {
  const [viewMode, setViewMode] = useState<"board" | "slideshow">("board");

  const padletBoard = "https://padlet.com/embed/5vyvx1jp12elgna7";
  const padletSlideshow =
    "https://padlet.com/embed/5vyvx1jp12elgna7/slideshow?autoplay=1&loop=1&duration=auto";

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFCFA] text-gray-800 overflow-x-hidden">
      <Header />

      {/* Banner Section */}
      <section className="relative w-full py-16 bg-gradient-to-b from-[#FFF5EB] to-[#FFFCFA] text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(247,183,51,0.2),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(244,93,72,0.15),transparent_70%)]"></div>

        <div className="relative z-10 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#F45D48] to-[#F7B733] bg-clip-text text-transparent">
            Discussion Board – MLN122
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-lg animate-fade-in">
            💬 Đây là bảng thảo luận Padlet của lớp — nơi bạn có thể xem, phản
            hồi và bình luận trực tiếp các câu hỏi từ nhóm khác mà không cần rời
            trang.
          </p>
        </div>

        {/* Nút chuyển chế độ */}
        <div className="flex gap-4 justify-center mt-10 animate-fade-up">
          <Button
            onClick={() => setViewMode("board")}
            variant="outline"
            className={`flex items-center gap-2 px-6 py-2 rounded-xl font-semibold shadow-md transition-all duration-300 ${
              viewMode === "board"
                ? "bg-gradient-to-r from-[#F45D48] to-[#F7B733] text-white shadow-lg shadow-[#F45D48]/30 scale-105"
                : "bg-transparent border border-[#F45D48]/40 text-[#F45D48] hover:bg-[#F45D48]/10"
            }`}
          >
            <LayoutGrid className="w-4 h-4" />
            Board View
          </Button>

          <Button
            onClick={() => setViewMode("slideshow")}
            variant="outline"
            className={`flex items-center gap-2 px-6 py-2 rounded-xl font-semibold shadow-md transition-all duration-300 ${
              viewMode === "slideshow"
                ? "bg-gradient-to-r from-[#F7B733] to-[#F45D48] text-white shadow-lg shadow-[#F7B733]/30 scale-105"
                : "bg-transparent border border-[#F7B733]/40 text-[#F7B733] hover:bg-[#F7B733]/10"
            }`}
          >
            <Play className="w-4 h-4" />
            Slideshow View
          </Button>
        </div>
      </section>

      {/* Khung hiển thị */}
      <main className="flex-1 flex flex-col items-center text-center py-10 px-4">
        <div
          className="w-full max-w-6xl aspect-[16/9] rounded-3xl overflow-hidden border-[2px] border-[#F45D48]/30 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_50px_rgba(244,93,72,0.15)] transition-all duration-700 animate-fade-up"
          style={{
            boxShadow:
              "inset 0 0 20px rgba(247,183,51,0.08), 0 10px 25px rgba(244,93,72,0.15)",
          }}
        >
          <iframe
            src={viewMode === "board" ? padletBoard : padletSlideshow}
            width="100%"
            height="100%"
            allow="camera; microphone; geolocation; display-capture; clipboard-write"
            className="rounded-3xl border-0"
          ></iframe>
        </div>

        <p className="mt-8 text-sm text-gray-500 max-w-2xl border-t border-[#F7B733]/30 pt-4 animate-fade-in">
          ⏳ Lưu ý: Bảng thảo luận có thể mất vài giây để tải tuỳ vào tốc độ
          mạng. Nếu khung trống, hãy tải lại trang hoặc kiểm tra quyền truy cập
          Padlet.
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default Discussion;
