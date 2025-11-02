import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Lesson2 = () => {
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
                Bài 2: Quá trình lao động tạo giá trị trong kỷ nguyên công nghệ số
              </h1>

              <Card className="p-6 mb-8 bg-muted/50">
                <p className="text-lg font-medium mb-0">
                  Công nghệ số, AI và robot đang tham gia sâu vào quá trình sản xuất. Vậy chúng đóng vai trò như thế nào trong chuỗi tạo giá trị?
                </p>
              </Card>

              <h2 className="text-2xl font-bold mt-8 mb-4">1. Quá trình tạo giá trị theo Marx</h2>
              <p>
                Theo lý thuyết của Marx, giá trị hàng hóa bao gồm ba phần:
              </p>
              
              <Card className="p-6 my-6 bg-primary/5 border-primary/20">
                <ul className="space-y-3 mb-0">
                  <li><strong>c (tư bản bất biến):</strong> Giá trị của tư liệu sản xuất (máy móc, nguyên liệu) được chuyển vào sản phẩm</li>
                  <li><strong>v (tư bản khả biến):</strong> Giá trị sức lao động (tiền lương công nhân)</li>
                  <li><strong>m (giá trị thặng dư):</strong> Phần giá trị mới do người lao động tạo ra nhưng không được trả công</li>
                </ul>
              </Card>

              <p>
                Công thức tạo giá trị: <strong>W = c + v + m</strong>
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">2. Vai trò của AI và robot</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">a) Tư bản bất biến (c)</h3>
              <p>
                AI, robot, và phần mềm thuộc về <strong>tư bản bất biến</strong>. Chúng:
              </p>
              <ul className="space-y-2">
                <li>• Không tạo ra giá trị mới</li>
                <li>• Chỉ chuyển giao giá trị của mình vào sản phẩm qua quá trình khấu hao</li>
                <li>• Giúp tăng năng suất lao động, giảm thời gian sản xuất</li>
              </ul>

              <Card className="p-6 my-6 bg-accent/10 border-accent/20">
                <h3 className="text-xl font-semibold mb-3">Ví dụ thực tế:</h3>
                <p className="mb-3">
                  Một robot trong nhà máy ô tô trị giá 1 tỷ đồng, tuổi thọ 10 năm, sản xuất được 100,000 xe:
                </p>
                <ul className="space-y-2 mb-0">
                  <li>• Mỗi xe nhận được giá trị chuyển giao: 1 tỷ ÷ 100,000 = 10,000 đồng</li>
                  <li>• Robot không tạo thêm giá trị nào khác ngoài việc chuyển giao giá trị của bản thân</li>
                </ul>
              </Card>

              <h3 className="text-xl font-semibold mt-6 mb-3">b) Tư bản khả biến (v) và giá trị thặng dư (m)</h3>
              <p>
                Chỉ có <strong>lao động sống</strong> (con người) mới tạo ra giá trị mới (v + m). Khi AI và robot thay thế lao động:
              </p>
              <ul className="space-y-2">
                <li>• Tỷ lệ c/(v+m) tăng cao</li>
                <li>• Ít lao động sống hơn → Ít giá trị mới được tạo ra</li>
                <li>• Doanh nghiệp phải tăng qui mô sản xuất để duy trì lợi nhuận</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">3. Nghịch lý của tự động hóa</h2>
              <p>
                Marx đã dự báo một nghịch lý: Tự bản gia đầu tư vào máy móc để tăng năng suất và cắt giảm chi phí lao động. Nhưng:
              </p>

              <Card className="p-6 my-6 bg-destructive/10 border-destructive/20">
                <ul className="space-y-2 mb-0">
                  <li><strong>Vấn đề 1:</strong> Máy móc chỉ chuyển giao giá trị cũ, không tạo giá trị mới</li>
                  <li><strong>Vấn đề 2:</strong> Giá trị thặng dư (nguồn gốc lợi nhuận) chỉ đến từ lao động sống</li>
                  <li><strong>Kết quả:</strong> Nếu toàn bộ quá trình sản xuất được tự động hóa, nguồn gốc lợi nhuận sẽ cạn kiệt</li>
                </ul>
              </Card>

              <p>
                Đây là điều mà nhiều nhà kinh tế học hiện đại gọi là <strong>"xu hướng giảm tỷ suất lợi nhuận"</strong>.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">4. Phần mềm và dữ liệu: Giá trị mới?</h2>
              <p>
                Trong kỷ nguyên số, dữ liệu và thuật toán AI được coi là "tư liệu sản xuất mới". Tuy nhiên:
              </p>
              <ul className="space-y-2">
                <li>• Dữ liệu thô do người dùng tạo ra (lao động không được trả công)</li>
                <li>• Thuật toán AI được lập trình viên xây dựng (lao động trí óc)</li>
                <li>• Giá trị của phần mềm vẫn xuất phát từ lao động con người, không phải từ máy tính</li>
              </ul>

              <Card className="p-6 my-6 bg-primary/5 border-primary/20">
                <h3 className="text-xl font-semibold mb-3">Kết luận:</h3>
                <p className="mb-0">
                  Dù công nghệ có phát triển đến đâu, <strong>lao động con người vẫn là nguồn gốc của mọi giá trị mới</strong>. AI và robot có thể tăng năng suất, giảm chi phí, nhưng không thể thay thế vai trò sáng tạo giá trị của con người.
                </p>
              </Card>

              <div className="mt-12 flex justify-between">
                <Link to="/content/lesson-1">
                  <Button variant="outline" className="gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    Bài trước
                  </Button>
                </Link>
                <Link to="/content/lesson-3">
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

export default Lesson2;
