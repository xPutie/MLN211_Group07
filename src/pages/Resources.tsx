import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ExternalLink, MessageSquare } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { toast } from "sonner";

const resources = [
  {
    title: "Tư bản - Karl Marx",
    description: "Tác phẩm kinh điển về lý thuyết giá trị lao động",
    url: "#",
  },
  {
    title: "Chiến lược phát triển nguồn nhân lực Việt Nam đến 2030",
    description: "Nghị quyết của Chính phủ về phát triển nguồn nhân lực",
    url: "#",
  },
  {
    title: "AI và tương lai của công việc - ILO",
    description: "Báo cáo của Tổ chức Lao động Quốc tế",
    url: "#",
  },
  {
    title: "Cách mạng công nghiệp 4.0 ở Việt Nam",
    description: "Nghiên cứu về tác động của công nghệ số",
    url: "#",
  },
];

const Resources = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<string[]>([]);

  const handleSubmit = () => {
    if (comment.trim()) {
      setComments([comment, ...comments]);
      setComment("");
      toast.success("Đã gửi ý kiến thành công!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Tài nguyên bổ sung
              </h1>
              <p className="text-lg text-muted-foreground">
                Tài liệu tham khảo và thảo luận
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Tài liệu tham khảo</h2>
              <div className="grid gap-4">
                {resources.map((resource, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{resource.title}</h3>
                        <p className="text-sm text-muted-foreground">{resource.description}</p>
                      </div>
                      <Button variant="ghost" size="icon" asChild>
                        <a href={resource.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-primary" />
                Thảo luận
              </h2>
              <Card className="p-6 mb-6">
                <p className="font-medium mb-4">
                  Câu hỏi thảo luận: Nếu máy móc thay thế lao động người, thì giá trị và giá trị thặng dư được tạo ra như thế nào?
                </p>
                <Textarea 
                  placeholder="Nhập ý kiến của bạn..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="mb-4 min-h-[120px]"
                />
                <Button variant="hero" onClick={handleSubmit}>
                  Gửi ý kiến
                </Button>
              </Card>

              {comments.length > 0 && (
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Ý kiến đã gửi:</h3>
                  {comments.map((c, index) => (
                    <Card key={index} className="p-4 bg-muted/50 animate-fade-in">
                      <p className="text-sm">{c}</p>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Resources;
