import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const videos = [
  {
    id: 1,
    title: "Lý thuyết giá trị lao động của Marx",
    description: "Giải thích chi tiết về giá trị sử dụng, giá trị trao đổi và giá trị thặng dư",
    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    duration: "15:30",
  },
  {
    id: 2,
    title: "AI và tự động hóa trong sản xuất",
    description: "Cách trí tuệ nhân tạo và robot đang thay đổi quy trình sản xuất công nghiệp",
    thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    duration: "18:45",
  },
  {
    id: 3,
    title: "Chiến lược phát triển nguồn nhân lực Việt Nam",
    description: "Định hướng và chính sách đào tạo nguồn nhân lực chất lượng cao thời đại 4.0",
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    duration: "12:20",
  },
  {
    id: 4,
    title: "Tương lai của công việc trong kỷ nguyên AI",
    description: "Những thay đổi dự kiến trong thị trường lao động và kỹ năng cần thiết",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    duration: "20:15",
  },
];

const Videos = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Video giảng dạy
              </h1>
              <p className="text-lg text-muted-foreground">
                Bộ video minh họa sinh động về lao động và trí tuệ nhân tạo
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 animate-slide-up">
              {videos.map((video) => (
                <Card key={video.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button variant="hero" size="lg" className="gap-2">
                        <Play className="w-5 h-5" />
                        Xem video
                      </Button>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {video.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Videos;
