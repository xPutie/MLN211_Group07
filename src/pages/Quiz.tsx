import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Bot } from "lucide-react";

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
    correct: 1,
    explanation:
      "Giá trị hàng hóa được quyết định bởi *thời gian lao động xã hội cần thiết* để sản xuất ra nó. Marx xem đây là thước đo khách quan của giá trị, không phụ thuộc vào giá cả thị trường.",
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
    correct: 1,
    explanation:
      "Marx phân biệt: *lao động cụ thể* tạo ra giá trị sử dụng, còn *lao động trừu tượng* là nguồn gốc của giá trị. Đây là nền tảng lý luận của kinh tế chính trị Mác-xít.",
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
    correct: 1,
    explanation:
      "Giá trị thặng dư là phần giá trị do công nhân tạo ra *vượt quá giá trị sức lao động* của họ – đây chính là nguồn gốc lợi nhuận trong nền kinh tế tư bản.",
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
    correct: 1,
    explanation:
      "AI chỉ là công cụ mở rộng năng lực sáng tạo của con người – không thể tự tạo ra giá trị mới. Con người vẫn là chủ thể sáng tạo, AI chỉ hỗ trợ quá trình đó.",
  },
  {
    id: 5,
    question: "Theo Marx, bản chất con người được thể hiện qua?",
    options: ["Công cụ lao động", "Tôn giáo", "Lao động", "Ngôn ngữ"],
    correct: 2,
    explanation:
      "Theo Marx, *bản chất con người là tổng hòa các mối quan hệ xã hội*, và được thể hiện rõ nhất qua *lao động* – hoạt động sáng tạo làm biến đổi tự nhiên và chính bản thân con người.",
  },
  {
    id: 6,
    question: "Theo Marx, lao động bị tha hóa khi?",
    options: [
      "Người lao động làm vì đam mê",
      "Lao động trở thành hàng hóa, xa lạ với chính mình",
      "Người lao động được tự do sáng tạo",
      "Làm việc tập thể",
    ],
    correct: 1,
    explanation:
      "Lao động bị *tha hóa* khi con người không còn làm chủ sản phẩm và quá trình lao động của mình. Họ trở thành công cụ, xa lạ với chính bản chất sáng tạo của mình.",
  },
  {
    id: 7,
    question: "AI thay đổi khái niệm lao động như thế nào?",
    options: [
      "Xóa bỏ lao động",
      "Mở rộng khái niệm lao động sáng tạo",
      "Không ảnh hưởng",
      "Giảm năng suất",
    ],
    correct: 1,
    explanation:
      "AI không xóa bỏ lao động, mà *mở rộng phạm vi lao động sáng tạo* – con người tập trung hơn vào tư duy, cảm xúc, đạo đức và những giá trị không thể sao chép.",
  },
  {
    id: 8,
    question: "Theo Marx, của cải xã hội bắt nguồn từ?",
    options: ["Tiền tệ", "Lao động của con người", "Máy móc", "Vốn tư bản"],
    correct: 1,
    explanation:
      "Marx khẳng định: *lao động của con người* là nguồn gốc của của cải xã hội. Máy móc hay vốn chỉ là công cụ giúp lao động trở nên hiệu quả hơn.",
  },
  {
    id: 9,
    question: "Công nghiệp 4.0 tác động gì đến người lao động?",
    options: [
      "Tăng thất nghiệp, giảm cơ hội học tập",
      "Đòi hỏi kỹ năng sáng tạo và tư duy phản biện",
      "Không ảnh hưởng đáng kể",
      "Giảm năng suất",
    ],
    correct: 1,
    explanation:
      "Công nghiệp 4.0 đặt ra yêu cầu *người lao động phải học tập suốt đời*, phát triển năng lực sáng tạo và tư duy phản biện để thích ứng với sự thay đổi nhanh chóng của công nghệ.",
  },
  {
    id: 10,
    question:
      "Trong xã hội hiện đại, yếu tố nào giúp con người khác biệt với AI?",
    options: [
      "Trí nhớ",
      "Cảm xúc và đạo đức",
      "Khả năng tính toán",
      "Tốc độ xử lý",
    ],
    correct: 1,
    explanation:
      "Điều khiến con người khác biệt với AI không phải là trí nhớ hay tốc độ, mà là *cảm xúc và đạo đức* – nền tảng của sáng tạo và nhân văn mà máy móc không thể thay thế.",
  },
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [feedback, setFeedback] = useState<{
    correct: boolean;
    text: string | null;
  }>({ correct: false, text: null });
  const [finished, setFinished] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    setAnswers((prev) => ({ ...prev, [questions[current].id]: answerIndex }));
  };

  const nextQuestion = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
      setFeedback({ correct: false, text: null });
    } else {
      setFinished(true);
    }
  };

  const checkAnswer = () => {
    const selected = answers[questions[current].id];
    if (selected === undefined) return;

    const correct = selected === questions[current].correct;
    const correctOption =
      questions[current].options[questions[current].correct];

    const text = correct
      ? `✅ Chính xác rồi! ${questions[current].explanation}`
      : `🤖 Chưa đúng. Đáp án là *${correctOption}*. ${questions[current].explanation}`;

    setFeedback({ correct, text });
  };

  const progress = Math.round(((current + 1) / questions.length) * 100);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#FFF8F2] via-[#FFFDFB] to-[#FFF3E8]">
      <Header />

      <main className="flex-1 py-12 relative">
        <div className="container mx-auto px-4 max-w-3xl">
          {!finished ? (
            <>
              <div className="mb-8 text-center">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-[#F45D48] to-[#F7B733] bg-clip-text text-transparent">
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

              <Card className="p-6 shadow-md border border-orange-100 rounded-2xl bg-white/90 backdrop-blur-sm">
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

                <div className="flex justify-between mt-8">
                  <Button
                    onClick={checkAnswer}
                    className="bg-gradient-to-r from-[#F7B733] to-[#F45D48] text-white shadow-md hover:scale-105 transition-transform"
                  >
                    Kiểm tra
                  </Button>

                  <Button
                    onClick={nextQuestion}
                    disabled={!feedback.text}
                    className={`${
                      feedback.text
                        ? "bg-gradient-to-r from-[#F45D48] to-[#F7B733]"
                        : "bg-gray-300 cursor-not-allowed"
                    } text-white shadow-md hover:scale-105 transition-transform`}
                  >
                    {current < questions.length - 1 ? "Câu tiếp" : "Hoàn thành"}
                  </Button>
                </div>

                <AnimatePresence>
                  {feedback.text && (
                    <motion.div
                      key={feedback.text}
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 20, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className="relative mt-8 flex justify-center"
                    >
                      <div className="relative max-w-xl bg-gradient-to-r from-[#FFF7E3] to-[#FFE8C5] border border-[#F7B733]/50 text-gray-800 rounded-2xl px-5 py-4 shadow-md italic leading-relaxed">
                        <div className="flex items-start gap-2">
                          <Bot className="w-5 h-5 text-[#F7B733] mt-1" />
                          <span
                            dangerouslySetInnerHTML={{
                              __html: feedback.text.replace(
                                /\*(.*?)\*/g,
                                "<strong>$1</strong>"
                              ),
                            }}
                          />
                        </div>

                        <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-4 h-4 bg-[#FFE8C5] rotate-45 border-b border-r border-[#F7B733]/50"></div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </>
          ) : (
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
                Mỗi câu hỏi không chỉ là kiến thức,
                <br />
                mà còn là hành trình hiểu về{" "}
                <em>con người và giá trị sáng tạo</em>.
              </p>

              <Button
                className="mt-12 bg-gradient-to-r from-[#F45D48] to-[#F7B733] text-white shadow-lg hover:scale-105 transition-transform"
                onClick={() => {
                  setFinished(false);
                  setCurrent(0);
                  setFeedback({ correct: false, text: null });
                  setAnswers({});
                }}
              >
                Làm lại
              </Button>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
