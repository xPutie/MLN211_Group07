import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Video, Brain, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 100;
      const y = (e.clientY / innerHeight - 0.5) * 100;
      setMousePos({ x, y });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-yellow-50 via-white to-orange-50 overflow-x-hidden">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-24 md:py-36 bg-gradient-to-r from-[#FFE0B2] via-[#FFD59E] to-[#FFC87A] text-gray-900 transition-all duration-500">
          {/* overlay */}
          <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]" />

          {/* Parallax lights */}
          <div
            className="absolute top-[-100px] left-[calc(-50px)] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#FF9F4A]/40 to-[#FFD36B]/30 blur-3xl"
            style={{ transform: `translateY(${offsetY * 0.2}px)` }}
          ></div>
          <div
            className="absolute bottom-[-100px] right-[calc(-50px)] w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-[#FFD36B]/40 to-[#FFA94D]/30 blur-3xl"
            style={{ transform: `translateY(${offsetY * 0.15}px)` }}
          ></div>

          {/* Light flare theo chuột */}
          <div
            className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-r from-[#FFF5CC]/60 to-[#FFD36B]/40 rounded-full blur-3xl pointer-events-none transition-transform duration-200 ease-out"
            style={{
              transform: `translate(${mousePos.x * 0.5}px, ${
                mousePos.y * 0.5
              }px)`,
              opacity: 0.4,
            }}
          ></div>

          {/* Flare quét ngang auto */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-[-50%] w-[60%] h-full bg-gradient-to-r from-transparent via-[#FFF2C2]/40 to-transparent blur-2xl animate-[flare_5s_linear_infinite]" />
          </div>

          {/* Fade bottom */}
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#FFF8F2]" />

          <style>{`
            @keyframes shine {
              0% { background-position: -200% center; }
              100% { background-position: 200% center; }
            }
            @keyframes flare {
              0% { transform: translateX(-100%); opacity: 0; }
              30% { opacity: 0.6; }
              70% { opacity: 0.6; }
              100% { transform: translateX(200%); opacity: 0; }
            }
            .shine-text {
              background-image: linear-gradient(
                120deg,
                rgba(255,255,255,0.15) 0%,
                rgba(255,255,255,1) 50%,
                rgba(255,255,255,0.15) 100%
              );
              background-size: 200% auto;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              animation: shine 5s linear infinite;
              transition: text-shadow 0.4s ease;
            }
            .shine-text:hover {
              text-shadow: 0 0 20px rgba(255, 220, 140, 0.8),
                           0 0 35px rgba(255, 180, 70, 0.6);
            }
          `}</style>

          <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-white drop-shadow-[0_4px_12px_rgba(244,93,72,0.4)] tracking-tight">
              <span className="shine-text">
                Trí tuệ nhân tạo và người lao động
              </span>
              <br />
              <span className="shine-text">trong thời đại mới</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-900/90 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
              Khám phá mối quan hệ giữa trí tuệ nhân tạo, tự động hóa và bản
              chất của lao động theo lý luận Mác
            </p>

            <div className="flex flex-wrap justify-center gap-4 animate-slide-up">
              {[
                { icon: BookOpen, text: "Nội dung", link: "/content" },
                { icon: Video, text: "Video", link: "/videos" },
                { icon: Brain, text: "Ôn tập", link: "/quiz" },
                { icon: Sparkles, text: "Q&A", link: "/discussion" },
              ].map((btn, i) => (
                <Link to={btn.link} key={i}>
                  <Button
                    variant="hero"
                    size="lg"
                    className="gap-2 rounded-full bg-gradient-to-r from-[#F45D48] to-[#F7B733] text-white hover:shadow-[0_0_25px_rgba(247,183,51,0.4)] transition-all shadow-md hover:scale-105"
                  >
                    <btn.icon className="w-5 h-5" />
                    {btn.text}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-white to-yellow-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent">
                Khám phá nội dung học
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Học liệu tương tác giúp bạn hiểu sâu hơn về lao động, giá trị và
                công nghệ AI
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: BookOpen,
                  title: "Nội dung học tập",
                  desc: "4 bài học chuyên sâu về lý thuyết Mác và AI",
                  color: "from-red-500 to-orange-400",
                  link: "/content",
                },
                {
                  icon: Video,
                  title: "Video giảng dạy",
                  desc: "Bộ video minh họa sinh động về lao động và AI",
                  color: "from-orange-500 to-yellow-400",
                  link: "/videos",
                },
                {
                  icon: Brain,
                  title: "Kiểm tra kiến thức",
                  desc: "Bài tập trắc nghiệm với phản hồi tức thì",
                  color: "from-yellow-400 to-amber-500",
                  link: "/quiz",
                },
                {
                  icon: Sparkles,
                  title: "Mô phỏng AI vs Con người",
                  desc: "So sánh năng suất và giá trị lao động",
                  color: "from-pink-500 to-red-400",
                  link: "/simulator",
                },
              ].map((card, i) => (
                <Link to={card.link} key={i} className="group">
                  <div
                    className={`p-6 rounded-2xl bg-white border shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500 relative overflow-hidden`}
                  >
                    <div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-r ${card.color}`}
                    ></div>
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-4 text-white shadow-md group-hover:scale-110 transition-transform`}
                    >
                      <card.icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-20 relative overflow-hidden bg-gradient-to-r from-yellow-100 via-white to-orange-100">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-red-400 to-transparent opacity-50"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <blockquote className="text-2xl md:text-3xl font-semibold text-foreground mb-5 italic animate-fade-in">
                “Máy móc không tạo ra giá trị mới – chỉ con người mới làm được
                điều đó.”
              </blockquote>
              <p className="text-muted-foreground">
                – Tư tưởng C. Mác về lao động và giá trị thặng dư
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
