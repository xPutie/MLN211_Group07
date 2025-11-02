import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle2, XCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const questions = [
  {
    id: 1,
    question: "Theo Marx, giá trị của hàng hóa được xác định bởi yếu tố nào?",
    options: [
      "Giá cả thị trường",
      "Thời gian lao động xã hội cần thiết",
      "Chi phí sản xuất",
      "Cung và cầu"
    ],
    correct: 1,
  },
  {
    id: 2,
    question: "Lao động cụ thể là gì?",
    options: [
      "Lao động tạo ra giá trị sử dụng cụ thể",
      "Lao động chân tay nặng nhọc",
      "Lao động trong nhà máy",
      "Lao động có tay nghề cao"
    ],
    correct: 0,
  },
  {
    id: 3,
    question: "Giá trị thặng dư là gì?",
    options: [
      "Lợi nhuận từ kinh doanh",
      "Phần giá trị mà người công nhân tạo ra vượt quá giá trị sức lao động",
      "Thuế phải nộp cho nhà nước",
      "Chi phí quản lý doanh nghiệp"
    ],
    correct: 1,
  },
  {
    id: 4,
    question: "AI và robot có thể thay thế hoàn toàn lao động con người không?",
    options: [
      "Có, trong mọi lĩnh vực",
      "Không, vì chỉ con người mới tạo ra giá trị mới",
      "Có, trong tương lai gần",
      "Không, vì máy móc quá đắt"
    ],
    correct: 1,
  },
  {
    id: 5,
    question: "Trong kỷ nguyên số, loại lao động nào đang trở nên quan trọng hơn?",
    options: [
      "Lao động chân tay",
      "Lao động trí tuệ và sáng tạo",
      "Lao động nông nghiệp",
      "Lao động giản đơn"
    ],
    correct: 1,
  },
  {
    id: 6,
    question: "Theo Marx, máy móc trong sản xuất đóng vai trò gì?",
    options: [
      "Tạo ra giá trị mới",
      "Chuyển giao giá trị cũ vào sản phẩm",
      "Thay thế hoàn toàn con người",
      "Tăng giá trị thặng dư tuyệt đối"
    ],
    correct: 1,
  },
  {
    id: 7,
    question: "Việt Nam đang thực hiện chiến lược gì về nguồn nhân lực?",
    options: [
      "Tăng số lượng lao động giá rẻ",
      "Phát triển nguồn nhân lực chất lượng cao",
      "Chỉ tập trung vào nông nghiệp",
      "Nhập khẩu lao động nước ngoài"
    ],
    correct: 1,
  },
  {
    id: 8,
    question: "Sự khác biệt giữa lao động cụ thể và lao động trừu tượng là gì?",
    options: [
      "Lao động cụ thể dễ hơn lao động trừu tượng",
      "Lao động cụ thể tạo giá trị sử dụng, lao động trừu tượng tạo giá trị",
      "Không có sự khác biệt",
      "Lao động trừu tượng chỉ có trong công nghiệp"
    ],
    correct: 1,
  },
];

const Quiz = () => {
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionId: number, answerIndex: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: answerIndex }));
  };

  const handleSubmit = () => {
    setShowResults(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach(q => {
      if (answers[q.id] === q.correct) correct++;
    });
    return correct;
  };

  const score = showResults ? calculateScore() : 0;
  const percentage = showResults ? Math.round((score / questions.length) * 100) : 0;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Ôn tập kiến thức
              </h1>
              <p className="text-lg text-muted-foreground">
                Kiểm tra hiểu biết của bạn về lý thuyết Mác và AI
              </p>
            </div>

            {showResults && (
              <Card className="p-6 mb-8 bg-gradient-to-r from-primary/10 to-accent/10 animate-fade-in">
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-2">Kết quả của bạn</h2>
                  <div className="text-4xl font-bold mb-2">
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {score}/{questions.length}
                    </span>
                  </div>
                  <p className="text-lg text-muted-foreground">
                    Bạn đã hiểu {percentage}% kiến thức hôm nay!
                  </p>
                  {percentage >= 70 ? (
                    <p className="text-primary font-semibold mt-2">Xuất sắc! 🎉</p>
                  ) : percentage >= 50 ? (
                    <p className="text-accent font-semibold mt-2">Khá tốt! Hãy ôn lại một chút nhé! 📚</p>
                  ) : (
                    <p className="text-destructive font-semibold mt-2">Cần cố gắng thêm! 💪</p>
                  )}
                </div>
              </Card>
            )}

            <div className="space-y-6">
              {questions.map((question, index) => (
                <Card key={question.id} className="p-6 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex gap-3 mb-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold">
                      {question.id}
                    </div>
                    <h3 className="font-semibold text-lg flex-1">{question.question}</h3>
                  </div>
                  
                  <RadioGroup
                    value={answers[question.id]?.toString()}
                    onValueChange={(value) => handleAnswer(question.id, parseInt(value))}
                  >
                    {question.options.map((option, optionIndex) => (
                      <div
                        key={optionIndex}
                        className={`flex items-center space-x-2 p-3 rounded-lg border transition-colors ${
                          showResults
                            ? optionIndex === question.correct
                              ? "bg-green-50 border-green-500"
                              : answers[question.id] === optionIndex
                              ? "bg-red-50 border-red-500"
                              : ""
                            : "hover:bg-muted"
                        }`}
                      >
                        <RadioGroupItem value={optionIndex.toString()} id={`q${question.id}-${optionIndex}`} disabled={showResults} />
                        <Label htmlFor={`q${question.id}-${optionIndex}`} className="flex-1 cursor-pointer">
                          {option}
                        </Label>
                        {showResults && optionIndex === question.correct && (
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                        )}
                        {showResults && answers[question.id] === optionIndex && optionIndex !== question.correct && (
                          <XCircle className="w-5 h-5 text-red-600" />
                        )}
                      </div>
                    ))}
                  </RadioGroup>
                </Card>
              ))}
            </div>

            <div className="mt-8 flex justify-center gap-4">
              {!showResults ? (
                <Button 
                  size="lg" 
                  variant="hero"
                  onClick={handleSubmit}
                  disabled={Object.keys(answers).length !== questions.length}
                >
                  Nộp bài
                </Button>
              ) : (
                <Button 
                  size="lg" 
                  variant="hero"
                  onClick={() => {
                    setAnswers({});
                    setShowResults(false);
                  }}
                >
                  Làm lại
                </Button>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Quiz;
