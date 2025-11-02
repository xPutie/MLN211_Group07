import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Lesson3 = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/content">
              <Button variant="ghost" className="mb-6 gap-2">
                <ArrowLeft className="w-4 h-4" />
                Quay lại
              </Button>
            </Link>

            <article className="prose prose-lg max-w-none">
              <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Bài 3: Trí tuệ nhân tạo và sự thay đổi bản chất lao động
              </h1>

              <Card className="p-6 mb-8 bg-muted/50">
                <p className="text-lg font-medium mb-0">
                  AI không chỉ thay đổi cách chúng ta làm việc, mà còn thay đổi bản chất của lao động ở cấp độ sâu xa.
                </p>
              </Card>

              <h2 className="text-2xl font-bold mt-8 mb-4">1. Sự dịch chuyển từ lao động chân tay sang lao động trí tuệ</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">a) Giai đoạn tiền công nghiệp</h3>
              <p>
                Lao động chủ yếu là <strong>lao động chân tay</strong>:
              </p>
              <ul className="space-y-2">
                <li>• Nông nghiệp, thủ công nghiệp</li>
                <li>• Kỹ năng được truyền từ thế hệ này sang thế hệ khác</li>
                <li>• Giá trị do sức lao động vật chất tạo ra</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">b) Cách mạng công nghiệp</h3>
              <p>
                Máy móc thay thế một phần lao động chân tay:
              </p>
              <ul className="space-y-2">
                <li>• Công nhân vận hành máy móc trong nhà máy</li>
                <li>• Lao động trở nên tiêu chuẩn hóa, lặp đi lặp lại</li>
                <li>• Người lao động mất quyền kiểm soát quá trình sản xuất</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">c) Kỷ nguyên AI</h3>
              <p>
                Lao động dịch chuyển mạnh sang <strong>lao động trí tuệ</strong>:
              </p>
              
              <Card className="p-6 my-6 bg-primary/5 border-primary/20">
                <ul className="space-y-3 mb-0">
                  <li><strong>Lao động chân tay:</strong> Tự động hóa bởi robot</li>
                  <li><strong>Lao động nhận thức:</strong> Được hỗ trợ/thay thế bởi AI (phân tích dữ liệu, dự đoán, ra quyết định)</li>
                  <li><strong>Lao động sáng tạo:</strong> Vẫn cần con người (nghệ thuật, chiến lược, đổi mới)</li>
                </ul>
              </Card>

              <h2 className="text-2xl font-bold mt-8 mb-4">2. Vấn đề giá trị thặng dư trong thời đại AI</h2>

              <h3 className="text-xl font-semibold mt-6 mb-3">a) Chiết xuất giá trị thặng dư mới</h3>
              <p>
                Khi AI thay thế lao động truyền thống, tư bản phải tìm nguồn giá trị mới:
              </p>

              <Card className="p-6 my-6 bg-accent/10 border-accent/20">
                <h4 className="font-semibold mb-3">1. Dữ liệu người dùng:</h4>
                <p className="mb-3">
                  Người dùng tạo ra dữ liệu (lao động không được trả công) → Công ty công nghệ khai thác → Tạo ra giá trị thặng dư
                </p>
                <p className="text-sm italic mb-0">
                  Ví dụ: Facebook, Google sống nhờ dữ liệu người dùng miễn phí
                </p>
              </Card>

              <Card className="p-6 my-6 bg-accent/10 border-accent/20">
                <h4 className="font-semibold mb-3">2. Lao động gig (gig economy):</h4>
                <p className="mb-3">
                  Nền tảng số kết nối người lao động với khách hàng → Chiết xuất giá trị thặng dư từ mỗi giao dịch
                </p>
                <p className="text-sm italic mb-0">
                  Ví dụ: Uber, Grab, Fiverr – người lao động không phải nhân viên chính thức
                </p>
              </Card>

              <Card className="p-6 my-6 bg-accent/10 border-accent/20">
                <h4 className="font-semibold mb-3">3. Lao động trí tuệ cao cấp:</h4>
                <p className="mb-0">
                  Kỹ sư AI, nhà khoa học dữ liệu, designer UX → Vẫn tạo ra giá trị thặng dư qua lao động sáng tạo
                </p>
              </Card>

              <h3 className="text-xl font-semibold mt-6 mb-3">b) Tầng lớp lao động mới</h3>
              <p>
                AI tạo ra sự phân hóa sâu sắc trong giai cấp lao động:
              </p>

              <ul className="space-y-2">
                <li><strong>Lao động kỹ thuật cao:</strong> Kỹ sư AI, chuyên gia dữ liệu (lương cao, điều kiện tốt)</li>
                <li><strong>Lao động gig:</strong> Tài xế Grab, shipper (thu nhập bấp bênh, không bảo hiểm)</li>
                <li><strong>Lao động thất nghiệp:</strong> Những người bị AI thay thế (nguy cơ cao nhất)</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">3. Xung đột mới giữa tư bản và lao động</h2>
              
              <Card className="p-6 my-6 bg-destructive/10 border-destructive/20">
                <h3 className="text-xl font-semibold mb-3">Vấn đề cốt lõi:</h3>
                <p className="mb-3">
                  Ai sở hữu AI và dữ liệu, người đó sẽ nắm quyền lực kinh tế.
                </p>
                <ul className="space-y-2 mb-0">
                  <li>• <strong>Tư bản:</strong> Sở hữu thuật toán, dữ liệu, nền tảng → Chiếm đoạt giá trị thặng dư</li>
                  <li>• <strong>Lao động:</strong> Cung cấp dữ liệu và sức lao động nhưng không kiểm soát được quá trình sản xuất</li>
                </ul>
              </Card>

              <p>
                Câu hỏi đặt ra: <strong>Liệu có thể dân chủ hóa quyền sở hữu AI và dữ liệu?</strong>
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">4. Tương lai của lao động</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">a) Kịch bản lạc quan</h3>
              <ul className="space-y-2">
                <li>• AI giải phóng con người khỏi lao động nặng nhọc</li>
                <li>• Con người tập trung vào sáng tạo, nghệ thuật, chăm sóc lẫn nhau</li>
                <li>• Xã hội áp dụng thuế AI, thu nhập cơ bản phổ quát (UBI)</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">b) Kịch bản bi quan</h3>
              <ul className="space-y-2">
                <li>• Thất nghiệp gia tăng, bất bình đẳng trầm trọng</li>
                <li>• Quyền lực tập trung vào số ít tập đoàn công nghệ</li>
                <li>• Lao động mất giá trị, con người bị thay thế</li>
              </ul>

              <Card className="p-6 my-6 bg-primary/5 border-primary/20">
                <h3 className="text-xl font-semibold mb-3">Kết luận:</h3>
                <p className="mb-0">
                  Tương lai của lao động không phụ thuộc vào công nghệ, mà phụ thuộc vào <strong>các quyết định chính trị và xã hội</strong> mà chúng ta đưa ra hôm nay.
                </p>
              </Card>

              <div className="mt-12 flex justify-between">
                <Link to="/content/lesson-2">
                  <Button variant="outline" className="gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    Bài trước
                  </Button>
                </Link>
                <Link to="/content/lesson-4">
                  <Button variant="hero">
                    Bài tiếp theo
                  </Button>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Lesson3;
