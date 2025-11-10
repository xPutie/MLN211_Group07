import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, User, Bot, RotateCcw, Loader2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// --- TÀI LIỆU HỌC THUẬT ---
const resources = [
  {
    title: "Tư bản – Karl Marx (Das Kapital)",
    description:
      "Tác phẩm kinh điển trình bày lý luận giá trị, lao động và giá trị thặng dư.",
    url: "https://www.phantichkinhte123.com/2021/04/oc-lai-tu-ban-i.html",
  },
  {
    title: "Chiến lược phát triển nguồn nhân lực Việt Nam đến năm 2030",
    description:
      "Văn kiện chính thức của Chính phủ Việt Nam về phát triển nhân lực trong thời đại 4.0.",
    url: "https://hvctcand.bocongan.gov.vn/tin-tuc/tin-tuc-khac/nghi-quyet-cua-bo-chinh-tri-ve-tham-gia-cuoc-cach-mang-cong-nghiep-4-0-1016",
  },
  {
    title:
      "Tác động của trí tuệ nhân tạo đến việc làm và chính sách xã hội ở Việt Nam",
    description: "Phân tích học thuật về AI và thị trường lao động Việt Nam.",
    url: "https://dangcongsan.vn/hocvienchinhtri/xay-dung-dang/su-phat-trien-va-tac-dong-cua-tri-tue-nhan-tao-ai-nhung-co-hoi-va-thach-thuc-dat-ra-trong-cong-tac-quan-tri-quoc-gia.html",
  },
  {
    title:
      "Cách mạng công nghiệp 4.0 và vấn đề con người trong triết học Mác – Lênin",
    description:
      "Liên hệ lý luận Mác với bản chất lao động trong thời đại tự động hóa.",
    url: "http://m.tapchikhxh.vass.gov.vn/mot-so-van-de-triet-hoc-cua-cuoc-cach-mang-cong-nghiep-lan-thu-tu-n50081.html",
  },
  {
    title:
      "Trí tuệ nhân tạo và phát triển nguồn nhân lực chất lượng cao ở Việt Nam",
    description: "Vai trò giáo dục và sáng tạo trong bối cảnh AI phát triển.",
    url: "https://nhandan.vn/phat-trien-nguon-nhan-luc-trong-thoi-dai-tri-tue-nhan-tao-post913739.html",
  },
  {
    title: "Giá trị bền vững và ý nghĩa thời đại của chủ nghĩa Mác - Lênin",
    description:
      "Giá trị bền vững và ý nghĩa thời đại của chủ nghĩa Mác - Lênin.",
    url: "https://lyluanchinhtri.vn/gia-tri-ben-vung-va-y-nghia-thoi-dai-cua-chu-nghia-mac-lenin-387.html",
  },
  {
    title: "Xây dựng nguồn nhân lực cách mạng 4.0: Nhiều thách thức",
    description: "Xây dựng nguồn nhân lực cách mạng 4.0: Nhiều thách thức",
    url: "https://mst.gov.vn/xay-dung-nguon-nhan-luc-cach-mang-40-nhieu-thach-thuc-197149808.htm",
  },
  {
    title: "Tự động hóa, trí tuệ nhân tạo và sự biến đổi của quan hệ lao động",
    description:
      "Phân tích ảnh hưởng của AI và robot hóa đến người lao động, việc làm và các vấn đề xã hội theo góc nhìn triết học Mác – Lênin.",
    url: "https://lyluanchinhtri.vn/gia-tri-ben-vung-va-y-nghia-thoi-dai-cua-chu-nghia-mac-lenin-387.html",
  },
  {
    title:
      "Giá trị nhân văn trong tư tưởng Mác – Lênin và định hướng phát triển con người Việt Nam",
    description:
      "Khám phá cách lý luận Mác – Lênin soi sáng cho việc xây dựng con người toàn diện trong xã hội hiện đại.",
    url: "https://www.tapchicongsan.org.vn/web/guest/dau-tranh-phan-bac-cac-luan-dieu-sai-trai-thu-dich/chi-tiet/-/asset_publisher/YqSB2JpnYto9/content/gia-tri-suc-song-cua-chu-nghia-mac-le-nin-tu-tuong-ho-chi-minh-trong-thoi-dai-ngay-nay-va-mot-so-yeu-cau-dat-ra-doi-voi-cong-tac-bao-ve-nen-tang-tu-tu",
  },
];

// --- DANH SÁCH CÂU HỎI ---
const questions = [
  {
    id: 1,
    q: "Nếu máy móc thay thế lao động người, giá trị còn được tạo ra không?",
    a: "Theo Marx, máy móc không tạo ra giá trị mới. Chỉ lao động của con người – với sức sáng tạo và ý thức – mới sinh ra giá trị thặng dư.",
  },
  {
    id: 2,
    q: "AI có thể được xem là một dạng lao động sáng tạo không?",
    a: "AI không có nhu cầu xã hội, không có mục đích hay ý thức. Nó chỉ phản chiếu tri thức con người đã tạo ra, chứ không thật sự lao động.",
  },
  {
    id: 3,
    q: "Nếu máy móc giúp con người làm ít hơn, đó có phải là giải phóng lao động không?",
    a: "Giải phóng lao động không chỉ là giảm sức lực, mà là giải phóng con người khỏi sự tha hoá, để con người tự do sáng tạo và phát triển bản chất người.",
  },
  {
    id: 4,
    q: "Trong thời đại AI, đâu là thước đo giá trị lao động?",
    a: "Giá trị không còn chỉ ở năng suất, mà ở sáng tạo – thứ không thể bị thay thế bởi máy móc hay thuật toán.",
  },
  {
    id: 5,
    q: "Marx có thể sẽ nghĩ gì nếu ông sống trong kỷ nguyên AI?",
    a: "Ông sẽ thấy AI là công cụ sản xuất mới, nhưng vẫn tin rằng chừng nào con người còn sáng tạo, giá trị vẫn còn tồn tại.",
  },
  {
    id: 6,
    q: "Liệu AI có làm mất đi ý nghĩa của lao động không?",
    a: "Không. AI khiến ta nhìn lại bản chất thật của lao động – đó là quá trình con người tự khẳng định mình thông qua sáng tạo.",
  },
];

export default function Resources() {
  const [selected, setSelected] = useState<number | null>(null);
  const [isThinking, setIsThinking] = useState(false);
  const [typedAnswer, setTypedAnswer] = useState("");

  // --- Hiệu ứng typing tự nhiên ---
  useEffect(() => {
    if (selected !== null) {
      const found = questions.find((q) => q.id === selected);
      if (!found) return;
      const text = found.a;
      let index = 0;

      setIsThinking(true);
      setTypedAnswer("");

      const thinkTimer = setTimeout(() => {
        setIsThinking(false);

        const typeNext = () => {
          if (index < text.length) {
            const char = text[index];
            setTypedAnswer((prev) => prev + char);
            index++;
            const delay = char === "." || char === "," ? 120 : 25;
            setTimeout(typeNext, delay);
          }
        };
        typeNext();
      }, 900);

      return () => clearTimeout(thinkTimer);
    }
  }, [selected]);

  const handleReset = () => {
    setSelected(null);
    setTypedAnswer("");
    setIsThinking(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFCFA] text-gray-800">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* --- HEADER --- */}
          <div className="text-center mb-14 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#F45D48] to-[#F7B733] bg-clip-text text-transparent">
              Tài liệu & Hội thoại triết học
            </h1>
            <p className="text-lg text-muted-foreground">
              Tài liệu học thuật và đối thoại cùng{" "}
              <span className="font-semibold text-[#F45D48]">MarxBot 🤖</span>
            </p>
          </div>

          {/* --- TÀI LIỆU THAM KHẢO --- */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-[#F45D48]">
              📚 Tài liệu tham khảo
            </h2>
            <div className="grid gap-4">
              {resources.map((r, i) => (
                <Card
                  key={i}
                  className="p-6 border border-gray-200 hover:border-[#F45D48]/60 hover:shadow-lg transition-all duration-300 rounded-xl bg-white"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-[#F7B733] mb-2">
                        {r.title}
                      </h3>
                      <p className="text-sm text-gray-600">{r.description}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                      className="hover:text-[#F45D48]"
                    >
                      <a href={r.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* --- HỘI THOẠI MARXBOT --- */}
          <h2 className="text-2xl font-bold mb-8 text-center text-[#F45D48]">
            Hội thoại học thuật: AI và lao động con người
          </h2>

          <Card className="p-10 border border-gray-200 rounded-xl bg-white shadow-sm">
            <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Chọn một câu hỏi bên dưới để trò chuyện cùng{" "}
              <span className="text-[#F7B733] font-semibold">MarxBot</span> –
              trí tuệ nhân tạo mô phỏng tư duy triết học của C. Mác.
            </p>

            {/* DANH SÁCH CÂU HỎI */}
            <div className="grid gap-4 mb-8">
              {questions.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelected(item.id)}
                  className={`group flex items-center gap-3 w-full p-5 rounded-xl border transition-all duration-300 
                    ${
                      selected === item.id
                        ? "border-[#F45D48] bg-[#F45D48]/10 shadow-md scale-[1.01]"
                        : "border-gray-200 hover:border-[#F7B733]/50 hover:bg-[#FFF8EE]"
                    }`}
                >
                  <User className="w-5 h-5 text-gray-500 group-hover:text-[#F45D48] transition-colors" />
                  <span className="text-base text-gray-800 font-medium group-hover:text-[#F45D48] transition-colors">
                    {item.q}
                  </span>
                </button>
              ))}
            </div>

            {/* MARXBOT TRẢ LỜI */}
            {selected && (
              <div className="mt-6 animate-fade-in">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F7B733]/20">
                    <Bot className="w-5 h-5 text-[#F7B733]" />
                  </div>
                  <div className="flex-1 rounded-xl border border-[#F7B733]/50 p-5 bg-[#FFF8EE]">
                    <p className="text-sm text-[#F45D48]/80 font-semibold mb-2">
                      MarxBot trả lời:
                    </p>
                    {isThinking ? (
                      <p className="italic text-gray-600 flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin text-[#F7B733]" />
                        MarxBot đang suy nghĩ
                        <span className="animate-pulse ml-1">▍</span>
                      </p>
                    ) : (
                      <p className="text-base leading-relaxed text-gray-800 font-serif whitespace-pre-line">
                        {typedAnswer}
                        <span className="animate-pulse ml-1 text-[#F45D48]">
                          ▍
                        </span>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* NÚT RESET */}
            {selected && !isThinking && (
              <div className="flex justify-center mt-10">
                <Button
                  variant="outline"
                  onClick={handleReset}
                  className="gap-2 border border-[#F45D48]/50 text-[#F45D48] hover:bg-[#F45D48]/10"
                >
                  <RotateCcw className="w-4 h-4" /> Chọn câu hỏi khác
                </Button>
              </div>
            )}

            {/* TRÍCH DẪN */}
            <div className="mt-10 pt-6 border-t border-gray-200">
              <p className="text-center text-base italic text-gray-600 leading-relaxed">
                “Máy móc không thay thế con người — nó khiến ta nhận ra sâu sắc
                hơn bản chất sáng tạo của lao động.”
                <span className="block mt-1 text-sm text-[#F7B733]">
                  – Diễn giải tư tưởng C. Mác
                </span>
              </p>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
