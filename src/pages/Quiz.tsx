import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const questions = [
  {
    id: 1,
    question: "Theo Marx, giá trị của hàng hóa được quyết định bởi?",
    options: [
      "Giá cả thị trường",
      "Thời gian lao động xã hội cần thiết",
      "Cung cầu",
      "Chi phí sản xuất",
    ],
  },
  {
    id: 2,
    question: "Lao động cụ thể khác với lao động trừu tượng ở điểm nào?",
    options: [
      "Không khác",
      "Lao động cụ thể tạo giá trị sử dụng, trừu tượng tạo giá trị",
      "Lao động trừu tượng năng suất cao hơn",
      "Lao động cụ thể là lao động trí óc",
    ],
  },
  {
    id: 3,
    question: "Giá trị thặng dư là gì?",
    options: [
      "Phần lợi nhuận của doanh nghiệp",
      "Phần giá trị công nhân tạo ra vượt giá trị sức lao động",
      "Thuế nhà nước thu",
      "Tiền thưởng thêm",
    ],
  },
  {
    id: 4,
    question: "AI đóng vai trò gì trong quá trình sản xuất hiện đại?",
    options: [
      "Tạo giá trị mới độc lập",
      "Công cụ hỗ trợ lao động sáng tạo của con người",
      "Thay thế hoàn toàn lao động",
      "Giảm nhu cầu lao động",
    ],
  },
  {
    id: 5,
    question: "Theo Marx, bản chất con người được thể hiện qua?",
    options: ["Công cụ lao động", "Tôn giáo", "Lao động", "Ngôn ngữ"],
  },
  {
    id: 6,
    question: "Lao động sáng tạo có vai trò gì trong kỷ nguyên AI?",
    options: [
      "Giảm dần tầm quan trọng",
      "Là yếu tố không thể thay thế",
      "Bị thay thế bởi robot",
      "Chỉ dành cho chuyên gia",
    ],
  },
  {
    id: 7,
    question: "Theo Marx, máy móc trong sản xuất có chức năng chính là?",
    options: [
      "Tạo giá trị mới",
      "Chuyển giá trị cũ vào sản phẩm",
      "Thay thế giá trị lao động",
      "Tăng chi phí sản xuất",
    ],
  },
  {
    id: 8,
    question: "Lao động trong nền kinh tế tri thức có đặc điểm gì?",
    options: [
      "Phụ thuộc vào sức cơ bắp",
      "Dựa vào sáng tạo và tri thức",
      "Không cần công nghệ",
      "Thiếu tính xã hội",
    ],
  },
  {
    id: 9,
    question: "AI thay đổi khái niệm lao động như thế nào?",
    options: [
      "Xóa bỏ lao động",
      "Mở rộng khái niệm lao động sáng tạo",
      "Không ảnh hưởng",
      "Giảm năng suất",
    ],
  },
  {
    id: 10,
    question: "Theo Mác, của cải xã hội bắt nguồn từ?",
    options: ["Tiền tệ", "Lao động của con người", "Máy móc", "Vốn tư bản"],
  },
  {
    id: 11,
    question: "Mục tiêu cao nhất của chủ nghĩa xã hội theo Hồ Chí Minh là?",
    options: [
      "Phát triển quân đội",
      "Xóa bỏ nghèo nàn, mang lại ấm no hạnh phúc cho nhân dân",
      "Tăng trưởng GDP",
      "Phát triển công nghệ",
    ],
  },
  {
    id: 12,
    question:
      "Trong xã hội hiện đại, yếu tố nào giúp con người khác biệt với AI?",
    options: [
      "Trí nhớ",
      "Cảm xúc và đạo đức",
      "Khả năng tính toán",
      "Tốc độ xử lý",
    ],
  },
  {
    id: 13,
    question: "Công nghiệp 4.0 tác động gì đến người lao động?",
    options: [
      "Tăng thất nghiệp, giảm cơ hội học tập",
      "Đòi hỏi kỹ năng sáng tạo và tư duy phản biện",
      "Không ảnh hưởng đáng kể",
      "Giảm năng suất",
    ],
  },
  {
    id: 14,
    question: "Theo Marx, lao động bị tha hóa khi?",
    options: [
      "Người lao động làm vì đam mê",
      "Lao động trở thành hàng hóa, xa lạ với chính mình",
      "Người lao động được tự do sáng tạo",
      "Làm việc tập thể",
    ],
  },
  {
    id: 15,
    question: "Trí tuệ nhân tạo nên được hiểu là?",
    options: [
      "Một công cụ trung lập phản ánh trình độ phát triển của con người",
      "Một thực thể độc lập có ý thức",
      "Nguy cơ xóa bỏ nhân loại",
      "Một xu hướng nhất thời",
    ],
  },
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [finished, setFinished] = useState(false);
  const [direction, setDirection] = useState(1);

  const handleAnswer = (answerIndex: number) => {
    setAnswers((prev) => ({ ...prev, [questions[current].id]: answerIndex }));
  };

  const nextQuestion = () => {
    if (current < questions.length - 1) {
      setDirection(1);
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  const prevQuestion = () => {
    if (current > 0) {
      setDirection(-1);
      setCurrent(current - 1);
    }
  };

  const progress = Math.round(((current + 1) / questions.length) * 100);

  // animation setup
  const slideVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.3 },
    }),
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#FFF8F2] via-[#FFFDFB] to-[#FFF3E8] relative overflow-hidden">
      <Header />

      <main className="flex-1 py-12 relative z-10">
        <div className="container mx-auto px-4 max-w-3xl">
          {!finished ? (
            <>
              <div className="mb-8 text-center">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-[#F45D48] to-[#F7B733] bg-clip-text text-transparent drop-shadow-sm">
                  Ôn tập kiến thức
                </h1>
                <p className="text-muted-foreground mt-2">
                  Câu {current + 1} / {questions.length}
                </p>
                <div className="w-full bg-gray-200 h-2 rounded-full mt-4 overflow-hidden">
                  <div
                    className="h-2 bg-gradient-to-r from-[#F45D48] to-[#F7B733] transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>

              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  custom={direction}
                >
                  <Card className="p-6 shadow-md border border-orange-100 rounded-2xl backdrop-blur-sm bg-white/90">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800">
                      {questions[current].question}
                    </h2>
                    <RadioGroup
                      value={answers[questions[current].id]?.toString()}
                      onValueChange={(val) => handleAnswer(parseInt(val))}
                    >
                      {questions[current].options.map((opt, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-2 p-3 rounded-lg hover:bg-orange-50 transition cursor-pointer"
                        >
                          <RadioGroupItem
                            value={idx.toString()}
                            id={`opt-${idx}`}
                          />
                          <Label
                            htmlFor={`opt-${idx}`}
                            className="flex-1 text-gray-700"
                          >
                            {opt}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </Card>
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-between mt-8">
                <Button
                  onClick={prevQuestion}
                  disabled={current === 0}
                  variant="outline"
                >
                  Câu trước
                </Button>
                <Button
                  onClick={nextQuestion}
                  className="bg-gradient-to-r from-[#F45D48] to-[#F7B733] text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition-transform"
                >
                  {current < questions.length - 1 ? "Câu tiếp" : "Hoàn thành"}
                </Button>
              </div>
            </>
          ) : (
            <>
              <motion.div
                className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,200,150,0.25),transparent_70%),radial-gradient(circle_at_80%_70%,rgba(250,120,90,0.2),transparent_70%)] animate-gradientMove"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              />
              <motion.div
                className="text-center py-20 relative z-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h2 className="text-5xl font-bold bg-gradient-to-r from-[#F45D48] via-[#F7B733] to-[#F45D48] bg-clip-text text-transparent mb-6 animate-pulse-slow">
                  ✨ Hoàn thành hành trình
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Cảm ơn bạn đã đồng hành cùng <strong>Human & AI</strong>.
                  <br />
                  Hành trình này không chỉ là tìm hiểu về công nghệ,
                  <br />
                  mà còn là hành trình hiểu về{" "}
                  <em>con người và giá trị sáng tạo</em>.
                </p>
                <blockquote className="italic text-gray-700 max-w-xl mx-auto border-l-4 pl-4 border-[#F7B733]">
                  “Trong thời đại trí tuệ nhân tạo, lao động của con người không
                  mất đi – mà chuyển hóa thành sáng tạo, tri thức và giá trị
                  nhân văn.”
                  <br />{" "}
                  <span className="text-sm text-gray-500">
                    – Phân tích theo tư tưởng C. Mác
                  </span>
                </blockquote>

                <Button
                  className="mt-12 bg-gradient-to-r from-[#F45D48] to-[#F7B733] text-white shadow-lg hover:scale-105 transition-transform"
                  onClick={() => {
                    setFinished(false);
                    setCurrent(0);
                  }}
                >
                  Làm lại
                </Button>
              </motion.div>

              <style>{`
                @keyframes gradientMove {
                  0% { background-position: 0% 50%; }
                  50% { background-position: 100% 50%; }
                  100% { background-position: 0% 50%; }
                }
                .animate-gradientMove {
                  background-size: 200% 200%;
                  animation: gradientMove 12s ease infinite;
                }
                .animate-pulse-slow {
                  animation: pulse 3s ease-in-out infinite;
                }
                @keyframes pulse {
                  0%, 100% { opacity: 1; text-shadow: 0 0 12px rgba(247,183,51,0.3); }
                  50% { opacity: 0.9; text-shadow: 0 0 18px rgba(244,93,72,0.45); }
                }
              `}</style>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
