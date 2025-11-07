import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const Lesson1 = () => {
  const s1 = useScrollFadeIn();
  const s2 = useScrollFadeIn();
  const s3 = useScrollFadeIn();
  const s4 = useScrollFadeIn();

  return (
    <div className="min-h-screen flex flex-col bg-lesson-gradient">
      <Header />

      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Link to="/content">
              <Button variant="ghost" className="mb-10 gap-2">
                <ArrowLeft className="w-4 h-4" /> Quay lại
              </Button>
            </Link>

            <article className="prose prose-lg max-w-none text-gray-800">
              <h1 className="text-4xl font-bold mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-center animate-fade-in-up">
                Bài 1: Khái niệm về lao động cụ thể và lao động trừu tượng
              </h1>

              {/* PHẦN 1 */}
              <section
                ref={s1.ref}
                className={`flex flex-col md:flex-row items-center gap-8 mb-20 transition-all duration-700 ${
                  s1.visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="md:w-1/2">
                  <img
                    src="/images/lao-dong-cu-the.jpg"
                    alt="Lao động cụ thể"
                    className="rounded-2xl shadow-2xl hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold mb-4 text-primary">
                    1. Lao động cụ thể
                  </h2>
                  <p>
                    <strong>Lao động cụ thể</strong> là lao động được thực hiện
                    dưới một hình thức nhất định, có mục đích cụ thể, sử dụng
                    công cụ và phương pháp cụ thể để tạo ra sản phẩm có giá trị
                    sử dụng cụ thể.
                  </p>

                  <Card className="p-6 my-6 bg-primary/5 border-primary/20">
                    <h3 className="text-xl font-semibold mb-3">
                      Ví dụ minh họa:
                    </h3>
                    <ul className="space-y-2 mb-0">
                      <li>• Thợ may tạo ra áo quần</li>
                      <li>• Thợ mộc tạo ra bàn ghế</li>
                      <li>• Lập trình viên tạo ra phần mềm</li>
                    </ul>
                  </Card>
                </div>
              </section>

              {/* PHẦN 2 */}
              <section
                ref={s2.ref}
                className={`flex flex-col md:flex-row-reverse items-center gap-8 mb-20 transition-all duration-700 ${
                  s2.visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="md:w-1/2">
                  <img
                    src="/images/lao-dong-truu-tuong.jpg"
                    alt="Lao động trừu tượng"
                    className="rounded-2xl shadow-2xl hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold mb-4 text-accent">
                    2. Lao động trừu tượng
                  </h2>
                  <p>
                    <strong>Lao động trừu tượng</strong> là sự tiêu hao năng
                    lượng của con người – trí óc, cơ bắp, thần kinh... – tách
                    khỏi hình thức cụ thể của nó.
                  </p>
                  <p>
                    Lao động trừu tượng tạo ra <strong>giá trị</strong> của hàng
                    hóa, được đo bằng thời gian lao động xã hội cần thiết để sản
                    xuất ra nó.
                  </p>
                  <Card className="p-6 my-6 bg-accent/10 border-accent/20">
                    <h3 className="text-xl font-semibold mb-3">
                      Điểm quan trọng:
                    </h3>
                    <p className="mb-0">
                      Dù là thợ may, thợ mộc hay lập trình viên, tất cả đều tiêu
                      hao cùng một loại năng lượng con người. Chính sự tiêu hao
                      này tạo nên giá trị trao đổi của hàng hóa.
                    </p>
                  </Card>
                </div>
              </section>

              {/* PHẦN 3 - MỐI QUAN HỆ */}
              <section
                ref={s3.ref}
                className={`mb-20 text-center transition-all duration-700 ${
                  s3.visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl font-bold mb-6 text-gradient bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  3. Mối quan hệ giữa hai thuộc tính
                </h2>
                <p className="max-w-3xl mx-auto leading-relaxed tracking-wide">
                  Lao động cụ thể và lao động trừu tượng là hai mặt thống nhất
                  của cùng một quá trình lao động:
                </p>

                {/* === HÌNH MINH HỌA MỚI === */}
                <div className="my-10 flex justify-center">
                  <img
                    src="/images/moiquanhe.jpg"
                    alt="Mối quan hệ giữa lao động cụ thể và trừu tượng"
                    className="rounded-2xl shadow-2xl max-w-xl hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>

                <ul className="space-y-2 mt-4 text-left max-w-2xl mx-auto">
                  <li>
                    <strong>Không tồn tại riêng rẽ:</strong> Không có lao động
                    cụ thể nào mà không phải là lao động trừu tượng, và ngược
                    lại.
                  </li>
                  <li>
                    <strong>Lao động cụ thể</strong> quyết định tính chất đặc
                    thù của sản phẩm (giá trị sử dụng).
                  </li>
                  <li>
                    <strong>Lao động trừu tượng</strong> quyết định giá trị trao
                    đổi của hàng hóa.
                  </li>
                </ul>
              </section>

              {/* PHẦN 4 */}
              <section
                ref={s4.ref}
                className={`flex flex-col md:flex-row items-center gap-8 mb-20 transition-all duration-700 ${
                  s4.visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="md:w-1/2">
                  <img
                    src="/images/ky-nguyen-tu-dong.jpg"
                    alt="Kỷ nguyên tự động hóa"
                    className="rounded-2xl shadow-2xl hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold mb-4 text-destructive">
                    4. Ứng dụng trong kỷ nguyên tự động hóa
                  </h2>
                  <p>
                    Trong thời đại AI, máy móc có thể thay thế nhiều lao động cụ
                    thể. Tuy nhiên, chỉ có <strong>lao động sống</strong> – con
                    người – mới tạo ra giá trị mới.
                  </p>

                  <Card className="p-6 my-6 bg-destructive/10 border-destructive/20">
                    <h3 className="text-xl font-semibold mb-3">
                      Vấn đề cần suy ngẫm:
                    </h3>
                    <p className="mb-0">
                      Khi robot sản xuất hàng hóa, chúng chỉ chuyển giá trị của
                      máy móc vào sản phẩm (khấu hao), chứ không tạo ra giá trị
                      mới. Vậy nếu tự động hóa hoàn toàn, nguồn gốc lợi nhuận sẽ
                      đến từ đâu?
                    </p>
                  </Card>
                </div>
              </section>

              {/* Nút điều hướng */}
              <div className="mt-20 flex justify-between animate-fade-in-up">
                <Link to="/content">
                  <Button variant="outline" className="gap-2">
                    <ArrowLeft className="w-4 h-4" /> Quay lại danh sách
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
