import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, Variants } from "framer-motion";

// Dữ liệu các bài học
const lessons = [
  {
    id: 1,
    title: "Khái niệm về lao động cụ thể và lao động trừu tượng",
    description:
      "Giải thích hai khái niệm theo Mác, ví dụ minh họa bằng công việc thực tế và tự động hóa.",
    path: "/content/lesson-1",
    color: "from-red-500 to-orange-400",
  },
  {
    id: 2,
    title: "Quá trình lao động tạo giá trị trong kỷ nguyên công nghệ số",
    description:
      "Phân tích cách AI, robot, và phần mềm tham gia vào chuỗi tạo giá trị.",
    path: "/content/lesson-2",
    color: "from-orange-500 to-yellow-400",
  },
  {
    id: 3,
    title: "Trí tuệ nhân tạo và sự thay đổi bản chất lao động",
    description:
      "Nêu ra sự dịch chuyển từ lao động chân tay sang lao động trí tuệ, và vấn đề giá trị thặng dư.",
    path: "/content/lesson-3",
    color: "from-amber-400 to-orange-500",
  },
  {
    id: 4,
    title: "Định hướng phát triển nguồn nhân lực chất lượng cao của Việt Nam",
    description:
      "Liên hệ chính sách của Việt Nam trong phát triển con người và giáo dục thời 4.0.",
    path: "/content/lesson-4",
    color: "from-pink-500 to-red-400",
  },
];

// Framer Motion variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }, // fixed ease type
  },
};

const Content = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-yellow-50 via-white to-orange-50">
      <Header />

      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* --- Tiêu đề --- */}
            <div className="text-center mb-14 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent drop-shadow-sm">
                Nội dung học tập
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Khám phá 4 bài học chuyên sâu về lý thuyết Mác và trí tuệ nhân
                tạo
              </p>
            </div>

            {/* --- Danh sách bài học có animation --- */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="space-y-6"
            >
              {lessons.map((lesson) => (
                <motion.div key={lesson.id} variants={itemVariants}>
                  <Link to={lesson.path}>
                    <Card className="p-6 bg-white border border-yellow-100 hover:shadow-[0_4px_25px_rgba(255,175,45,0.15)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group rounded-2xl">
                      {/* Overlay hiệu ứng hover */}
                      <div
                        className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-r ${lesson.color}`}
                      ></div>

                      <div className="flex items-start gap-4 relative z-10">
                        {/* Số thứ tự gradient */}
                        <div
                          className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br ${lesson.color} flex items-center justify-center text-white font-semibold text-lg shadow-md group-hover:scale-110 transition-transform`}
                        >
                          {lesson.id}
                        </div>

                        {/* Nội dung bài học */}
                        <div className="flex-1">
                          <h3
                            className={`text-xl font-semibold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${lesson.color} transition-all`}
                          >
                            {lesson.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {lesson.description}
                          </p>
                        </div>

                        {/* Mũi tên */}
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* --- Nút đọc kết luận --- */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="show"
              className="mt-14 text-center"
            >
              <Link to="/conclusion">
                <Button
                  size="lg"
                  className="gap-2 rounded-full bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 text-white font-medium hover:scale-105 hover:shadow-[0_0_20px_rgba(255,180,50,0.4)] transition-all"
                >
                  <BookCheck className="w-5 h-5" />
                  Đọc kết luận
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Content;
