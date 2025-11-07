import { Link, useLocation } from "react-router-dom";
import { BookOpen } from "lucide-react";
import { useEffect, useState } from "react";

const Header = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { path: "/", label: "Trang chủ" },
    { path: "/content", label: "Nội dung" },
    { path: "/videos", label: "Video" },
    { path: "/quiz", label: "Ôn tập" },
    { path: "/simulator", label: "Mô phỏng" },
    { path: "/resources", label: "Tài liệu" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-white/70 dark:bg-[#0b1120]/70 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.08)]"
          : "bg-transparent backdrop-blur-[2px]"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 font-bold text-xl group transition-all"
          >
            <BookOpen className="w-6 h-6 text-primary group-hover:rotate-6 transition-transform duration-300" />
            <span className="relative bg-gradient-to-r from-[#F45D48] via-[#F7B733] to-[#F45D48] bg-[length:200%_auto] bg-clip-text text-transparent animate-[shine_6s_linear_infinite]">
              Human & AI
            </span>
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative ${
                    active
                      ? "bg-gradient-to-r from-[#F45D48] to-[#F7B733] text-white shadow-[0_0_20px_rgba(247,183,51,0.35)] scale-[1.02]"
                      : "text-foreground/80 hover:text-primary hover:bg-muted/50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      <style>{`
        @keyframes shine {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </header>
  );
};

export default Header;
