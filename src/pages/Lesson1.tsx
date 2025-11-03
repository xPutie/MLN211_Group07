import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Lesson1 = () => {
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
                Bài 1: Khái niệm về lao động cụ thể và lao động trừu tượng
              </h1>

              <Card className="p-6 mb-8 bg-muted/50">
                <p className="text-lg font-medium mb-0">
                  Theo Marx, mọi lao động đều có hai thuộc tính: lao động cụ thể
                  và lao động trừu tượng.
                </p>
              </Card>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                1. Lao động cụ thể
              </h2>
              <p>
                <strong>Lao động cụ thể</strong> là lao động được thực hiện dưới
                một hình thức nhất định, có mục đích cụ thể, sử dụng công cụ và
                phương pháp cụ thể để tạo ra một sản phẩm có giá trị sử dụng cụ
                thể.
              </p>

              <Card className="p-6 my-6 bg-primary/5 border-primary/20">
                <h3 className="text-xl font-semibold mb-3">Ví dụ minh họa:</h3>
                <ul className="space-y-2 mb-0">
                  <li>• Lao động của thợ may tạo ra áo quần</li>
                  <li>• Lao động của thợ mộc tạo ra bàn ghế</li>
                  <li>• Lao động của lập trình viên tạo ra phần mềm</li>
                </ul>
              </Card>

              <p>
                Mỗi loại lao động cụ thể có đặc điểm riêng, yêu cầu kỹ năng và
                công cụ khác nhau. Lao động cụ thể tạo ra{" "}
                <strong>giá trị sử dụng</strong> – tức là công dụng cụ thể của
                sản phẩm.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                2. Lao động trừu tượng
              </h2>
              <p>
                <strong>Lao động trừu tượng</strong> là lao động được xem xét
                độc lập với hình thức cụ thể của nó, chỉ là sự tiêu hao năng
                lượng của con người (não bộ, cơ bắp, thần kinh...). Đây là thuộc
                tính chung của mọi loại lao động.
              </p>

              <p>
                Lao động trừu tượng tạo ra <strong>giá trị</strong> của hàng
                hóa. Giá trị này được đo bằng thời gian lao động xã hội cần
                thiết để sản xuất ra hàng hóa đó.
              </p>

              <Card className="p-6 my-6 bg-accent/10 border-accent/20">
                <h3 className="text-xl font-semibold mb-3">Điểm quan trọng:</h3>
                <p className="mb-0">
                  Dù là thợ may, thợ mộc hay lập trình viên, tất cả đều tiêu hao
                  cùng một loại năng lượng con người. Chính sự tiêu hao năng
                  lượng này (lao động trừu tượng) tạo ra giá trị có thể trao đổi
                  của hàng hóa.
                </p>
              </Card>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                3. Mối quan hệ giữa hai thuộc tính
              </h2>
              <p>
                Lao động cụ thể và lao động trừu tượng là hai mặt thống nhất của
                cùng một quá trình lao động:
              </p>

              <ul className="space-y-2 my-4">
                <li>
                  <strong>Không tồn tại riêng rẽ:</strong> Không có lao động cụ
                  thể nào mà không phải là lao động trừu tượng, và ngược lại
                </li>
                <li>
                  <strong>Lao động cụ thể</strong> quyết định tính chất đặc thù
                  của sản phẩm (giá trị sử dụng)
                </li>
                <li>
                  <strong>Lao động trừu tượng</strong> quyết định giá trị trao
                  đổi của hàng hóa
                </li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                4. Ứng dụng trong kỷ nguyên tự động hóa
              </h2>
              <p>
                Trong thời đại AI và tự động hóa, máy móc có thể thay thế nhiều
                lao động cụ thể (như sản xuất ô tô, đóng gói sản phẩm). Tuy
                nhiên, theo Marx, chỉ có <strong>lao động sống</strong> (lao
                động của con người) mới tạo ra giá trị mới.
              </p>

              <Card className="p-6 my-6 bg-destructive/10 border-destructive/20">
                <h3 className="text-xl font-semibold mb-3">
                  Vấn đề cần suy ngẫm:
                </h3>
                <p className="mb-0">
                  Khi robot sản xuất hàng hóa, chúng chỉ chuyển giao giá trị của
                  máy móc vào sản phẩm (khấu hao), chứ không tạo ra giá trị mới.
                  Điều này đặt ra câu hỏi: Nếu tự động hóa hoàn toàn, nguồn gốc
                  của giá trị và lợi nhuận sẽ đến từ đâu?
                </p>
              </Card>

              <div className="mt-12 flex justify-between">
                <Link to="/content">
                  <Button variant="outline" className="gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    Quay lại danh sách
                  </Button>
                </Link>
                <Link to="/content/lesson-2">
                  <Button variant="hero">Bài tiếp theo</Button>
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

export default Lesson1;
