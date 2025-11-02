import { useState } from "react";
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
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                AI vs Human Work Simulator
              </h1>
              <p className="text-lg text-muted-foreground">
                Chọn xem ai làm việc tốt hơn – Con người hay Robot?
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card 
                className={`p-8 cursor-pointer transition-all duration-300 hover:-translate-y-1 ${
                  selected === "human" ? "ring-2 ring-primary shadow-xl" : "hover:shadow-lg"
                }`}
                onClick={() => setSelected("human")}
              >
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <User className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Người lao động</h3>
                  <p className="text-muted-foreground">Sức sáng tạo và trí tuệ con người</p>
                </div>
              </Card>

              <Card 
                className={`p-8 cursor-pointer transition-all duration-300 hover:-translate-y-1 ${
                  selected === "robot" ? "ring-2 ring-accent shadow-xl" : "hover:shadow-lg"
                }`}
                onClick={() => setSelected("robot")}
              >
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Bot className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Robot</h3>
                  <p className="text-muted-foreground">Tốc độ và hiệu suất cao</p>
                </div>
              </Card>
            </div>

            {selected && (
              <Card className="p-8 animate-fade-in">
                <h3 className="text-2xl font-bold mb-6 text-center">So sánh hiệu suất</h3>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Tốc độ làm việc</span>
                      <span className="font-bold">{currentData.speed}%</span>
                    </div>
                    <div className="h-4 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${selected === "human" ? "bg-primary" : "bg-accent"} transition-all duration-1000 ease-out`}
                        style={{ width: `${currentData.speed}%` }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Sáng tạo</span>
                      <span className="font-bold">{currentData.creativity}%</span>
                    </div>
                    <div className="h-4 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${selected === "human" ? "bg-primary" : "bg-accent"} transition-all duration-1000 ease-out`}
                        style={{ width: `${currentData.creativity}%` }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Giá trị thặng dư tạo ra</span>
                      <span className="font-bold">{currentData.surplusValue}%</span>
                    </div>
                    <div className="h-4 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${selected === "human" ? "bg-primary" : "bg-accent"} transition-all duration-1000 ease-out`}
                        style={{ width: `${currentData.surplusValue}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                <Card className="p-6 bg-muted/50 border-0">
                  <p className="text-sm leading-relaxed">
                    <span className="font-semibold">Giải thích: </span>
                    Theo lý luận Mác, máy móc có thể tạo ra sản phẩm nhanh hơn, nhưng <span className="font-semibold text-primary">giá trị chỉ xuất hiện khi có lao động sống</span> – trí tuệ và sức sáng tạo của con người. 
                    {selected === "human" 
                      ? " Con người có khả năng sáng tạo và tạo ra giá trị mới, đó là yếu tố không thể thay thế." 
                      : " Robot tuy nhanh nhưng chỉ chuyển giao giá trị cũ, không tạo ra giá trị mới như con người."}
                  </p>
                </Card>

                <div className="text-center mt-6">
                  <Button variant="hero" onClick={() => setSelected(null)}>
                    Thử lại
                  </Button>
                </div>
              </Card>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Simulator;
