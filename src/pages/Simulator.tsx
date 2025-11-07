import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Bot } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Simulator = () => {
  const [selected, setSelected] = useState<"human" | "robot" | null>(null);

  const humanData = {
    speed: 60,
    creativity: 95,
    surplusValue: 80,
  };

  const robotData = {
    speed: 95,
    creativity: 30,
    surplusValue: 40,
  };

  const currentData = selected === "human" ? humanData : robotData;

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-gradient-to-b from-[#FFF8F2] via-[#FFFDFB] to-[#FFF3E8]">
      {/* 🌈 Dynamic background gradient animation */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,150,100,0.15),transparent_70%),radial-gradient(circle_at_80%_80%,rgba(255,200,120,0.15),transparent_70%)] animate-gradientMove pointer-events-none" />

      <Header />

      <main className="flex-1 py-12 relative z-10">
        <div className="container mx-auto px-4">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#F45D48] via-[#F7B733] to-[#F45D48] bg-clip-text text-transparent drop-shadow-sm">
              AI vs Human Work Simulator
            </h1>
            <p className="text-gray-600 text-lg">
              So sánh sức sáng tạo và giá trị lao động giữa Con người và Trí tuệ
              nhân tạo
            </p>
          </motion.div>

          {/* Lựa chọn */}
          <motion.div
            className="grid md:grid-cols-2 gap-8 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div whileHover={{ scale: 1.03 }}>
              <Card
                className={`p-8 cursor-pointer rounded-2xl border transition-all duration-700 hover:shadow-[0_0_20px_rgba(255,160,80,0.2)] ${
                  selected === "human"
                    ? "ring-2 ring-[#F45D48] shadow-lg bg-white/90"
                    : "bg-white/60 hover:bg-white/80"
                }`}
                onClick={() => setSelected("human")}
              >
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-[#F45D48]/10 flex items-center justify-center mx-auto mb-4">
                    <User className="w-10 h-10 text-[#F45D48]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-[#F45D48]">
                    Người lao động
                  </h3>
                  <p className="text-gray-600">
                    Sức sáng tạo và khả năng tư duy phản biện
                  </p>
                </div>
              </Card>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }}>
              <Card
                className={`p-8 cursor-pointer rounded-2xl border transition-all duration-700 hover:shadow-[0_0_20px_rgba(255,200,80,0.25)] ${
                  selected === "robot"
                    ? "ring-2 ring-[#F7B733] shadow-lg bg-white/90"
                    : "bg-white/60 hover:bg-white/80"
                }`}
                onClick={() => setSelected("robot")}
              >
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-[#F7B733]/10 flex items-center justify-center mx-auto mb-4">
                    <Bot className="w-10 h-10 text-[#F7B733]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-[#F7B733]">
                    Robot / AI
                  </h3>
                  <p className="text-gray-600">
                    Tốc độ, chính xác và tự động hóa cao
                  </p>
                </div>
              </Card>
            </motion.div>
          </motion.div>

          {/* Kết quả mô phỏng */}
          <AnimatePresence mode="wait">
            {selected && (
              <motion.div
                key={selected}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="p-8 mt-4 backdrop-blur-sm bg-white/90 border border-orange-200 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 text-center text-gray-700">
                    So sánh hiệu suất
                  </h3>

                  <div className="space-y-6 mb-8">
                    {[
                      { label: "Tốc độ làm việc", key: "speed" },
                      { label: "Sáng tạo", key: "creativity" },
                      { label: "Giá trị thặng dư tạo ra", key: "surplusValue" },
                    ].map((item, i) => (
                      <motion.div
                        key={item.key}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 + 0.2 }}
                      >
                        <div className="flex justify-between mb-2 text-gray-700">
                          <span className="font-medium">{item.label}</span>
                          <span className="font-bold">
                            {currentData[item.key as keyof typeof currentData]}%
                          </span>
                        </div>
                        <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{
                              width: `${
                                currentData[
                                  item.key as keyof typeof currentData
                                ]
                              }%`,
                            }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className={`h-full rounded-full ${
                              selected === "human"
                                ? "bg-gradient-to-r from-[#F45D48] to-[#F7B733]"
                                : "bg-gradient-to-r from-[#F7B733] to-[#FAD961]"
                            }`}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* MarxBot phản hồi */}
                  <motion.div
                    className="mt-10 p-6 bg-gradient-to-br from-[#FFF0E5] to-[#FFE7C5] rounded-xl border border-[#F7B733]/30"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <p className="italic text-gray-800 leading-relaxed">
                      <strong>MarxBot:</strong>{" "}
                      {selected === "human"
                        ? "Con người không chỉ tạo ra vật chất — mà còn sáng tạo ra chính bản thân mình qua lao động."
                        : "Máy móc chỉ chuyển giao giá trị cũ; còn giá trị mới chỉ nảy sinh khi có lao động sống — ý thức và sáng tạo."}
                    </p>
                  </motion.div>

                  {/* Giải thích triết học */}
                  <motion.div
                    className="mt-10 p-6 bg-gradient-to-br from-[#FFF9F2] to-[#FFF4E3] border border-orange-200 rounded-xl shadow-inner"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    <p className="text-sm leading-relaxed text-gray-700">
                      <span className="font-semibold">Giải thích: </span>
                      Theo lý luận của C. Mác, máy móc có thể tăng năng suất lao
                      động, nhưng{" "}
                      <span className="font-semibold text-[#F45D48]">
                        giá trị chỉ xuất hiện khi có lao động sống
                      </span>{" "}
                      – tức là hoạt động sáng tạo của con người.{" "}
                      {selected === "human"
                        ? "Con người tạo ra giá trị mới thông qua tư duy, sáng tạo, và ý thức về mục đích."
                        : "Robot hoạt động dựa trên lập trình sẵn, không mang năng lực sáng tạo — do đó không tạo ra giá trị mới."}
                    </p>
                  </motion.div>

                  {/* Nút reset */}
                  <div className="text-center mt-8">
                    <Button
                      variant="outline"
                      className="border-[#F45D48] text-[#F45D48] hover:bg-[#F45D48]/10 hover:text-[#F45D48] transition font-medium"
                      onClick={() => setSelected(null)}
                    >
                      🔁 Thử lại
                    </Button>
                  </div>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Quote triết học */}
          <motion.p
            className="text-center text-gray-500 italic mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            “Máy móc không thay thế con người — nó khiến ta hiểu sâu hơn về bản
            chất sáng tạo của lao động.”
            <br />
            <span className="text-[#F45D48] font-medium">
              — C. Mác, Tư bản, quyển I
            </span>
          </motion.p>
        </div>
      </main>

      <Footer />

      {/* 🌈 Gradient animation CSS */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradientMove {
          background-size: 200% 200%;
          animation: gradientMove 14s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Simulator;
