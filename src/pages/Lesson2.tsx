import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const Lesson2 = () => {
  const s1 = useScrollFadeIn();
  const s2 = useScrollFadeIn();
  const s3 = useScrollFadeIn();
  const s4 = useScrollFadeIn();

  return (
    <div className="min-h-screen flex flex-col bg-lesson-gradient text-gray-800">
      <Header />

      {/* --- Background Gradient Header Transition --- */}
      <div className="h-40 bg-gradient-to-b from-primary/10 via-background to-transparent" />

      {/* === Nội dung chính === */}
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Link to="/content">
              <Button variant="ghost" className="mb-10 gap-2">
                <ArrowLeft className="w-4 h-4" /> Quay lại
              </Button>
            </Link>

            <article className="prose prose-lg max-w-none">
              {/* MỞ ĐẦU */}
              <section
                ref={s1.ref}
                className={`mb-20 text-center transition-all duration-700 ${
                  s1.visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <h1 className="text-4xl font-bold text-primary mb-4">
                  Quá trình lao động tạo giá trị
                </h1>
                <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                  Công nghệ số, AI và robot đang tham gia sâu vào quá trình sản
                  xuất. Vậy chúng đóng vai trò như thế nào trong chuỗi tạo giá
                  trị? Cùng Marx khám phá câu trả lời trong thời đại mới.
                </p>
              </section>

              {/* PHẦN 1 */}
              <section
                ref={s2.ref}
                className={`flex flex-col md:flex-row items-center gap-8 mb-20 transition-all duration-700 ${
                  s2.visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="md:w-1/2">
                  <img
                    src="/images/bai2-banner.jpg"
                    alt="Chuỗi giá trị sản xuất"
                    className="rounded-2xl shadow-2xl hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold mb-4 text-primary">
                    1. Quá trình tạo giá trị theo Marx
                  </h2>
                  <p>
                    Theo lý thuyết của Marx, giá trị hàng hóa bao gồm ba phần:
                  </p>
                  <Card className="p-6 my-6 bg-primary/5 border-primary/20">
                    <ul className="space-y-3 mb-0">
                      <li>
                        <strong>c (tư bản bất biến):</strong> Giá trị của tư
                        liệu sản xuất (máy móc, nguyên liệu)
                      </li>
                      <li>
                        <strong>v (tư bản khả biến):</strong> Giá trị sức lao
                        động (tiền lương công nhân)
                      </li>
                      <li>
                        <strong>m (giá trị thặng dư):</strong> Phần giá trị mới
                        do người lao động tạo ra nhưng không được trả công
                      </li>
                    </ul>
                  </Card>
                  <p>
                    Công thức tạo giá trị: <strong>W = c + v + m</strong>
                  </p>
                </div>
              </section>

              {/* PHẦN 2 */}
              <section
                ref={s3.ref}
                className={`flex flex-col md:flex-row-reverse items-center gap-8 mb-20 transition-all duration-700 ${
                  s3.visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="md:w-1/2">
                  <img
                    src="/images/How-AI-change-Robot-a1-1170x700.png"
                    alt="AI và robot trong sản xuất"
                    className="rounded-2xl shadow-2xl hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold mb-4 text-accent">
                    2. Vai trò của AI và robot
                  </h2>
                  <p>
                    AI, robot, và phần mềm thuộc về{" "}
                    <strong>tư bản bất biến (c)</strong>. Chúng không tạo ra giá
                    trị mới mà chỉ chuyển giao giá trị của mình vào sản phẩm qua
                    khấu hao.
                  </p>
                  <Card className="p-6 my-6 bg-accent/10 border-accent/20">
                    <h3 className="text-xl font-semibold mb-3">
                      Ví dụ thực tế:
                    </h3>
                    <p>
                      Một robot trị giá 1 tỷ đồng, tuổi thọ 10 năm, sản xuất
                      được 100,000 xe → mỗi xe nhận giá trị chuyển giao{" "}
                      <strong>10,000đ</strong>.
                    </p>
                    <p className="mb-0">
                      Robot không tạo thêm giá trị nào khác ngoài việc chuyển
                      giao giá trị của bản thân.
                    </p>
                  </Card>
                </div>
              </section>

              {/* PHẦN 3 */}
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
                    src="/images/vai-tro-cua-ai.png"
                    alt="Vai trò của AI trong chuỗi giá trị"
                    className="rounded-2xl shadow-2xl hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold mb-4 text-destructive">
                    3. Nghịch lý của tự động hóa
                  </h2>
                  <p>
                    Marx dự báo rằng: khi máy móc thay thế con người, tỷ lệ lao
                    động sống giảm — dẫn đến giảm giá trị thặng dư, tức là nguồn
                    gốc lợi nhuận.
                  </p>
                  <Card className="p-6 my-6 bg-destructive/10 border-destructive/20">
                    <ul className="space-y-2 mb-0">
                      <li>
                        <strong>Vấn đề 1:</strong> Máy móc chỉ chuyển giao giá
                        trị cũ
                      </li>
                      <li>
                        <strong>Vấn đề 2:</strong> Giá trị mới chỉ đến từ lao
                        động con người
                      </li>
                      <li>
                        <strong>Kết quả:</strong> Nếu sản xuất tự động hoàn
                        toàn, lợi nhuận sẽ dần biến mất
                      </li>
                    </ul>
                  </Card>
                </div>
              </section>

              {/* PHẦN 4 */}
              <section className="text-center max-w-3xl mx-auto animate-fade-in-up">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  4. Phần mềm và dữ liệu: Giá trị mới?
                </h2>
                <p className="leading-relaxed mb-6">
                  Trong kỷ nguyên số, dữ liệu và thuật toán AI được xem như “tư
                  liệu sản xuất mới”. Nhưng giá trị của chúng vẫn bắt nguồn từ
                  lao động con người — từ người lập trình, thu thập dữ liệu, đến
                  người sử dụng.
                </p>

                {/* === HÌNH MINH HỌA MỚI === */}
                {/* === HÌNH MINH HỌA MỚI (ĐÃ CHỈNH) === */}
                <section
                  ref={s4.ref}
                  className={`transition-all duration-700 ${
                    s4.visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  <div className="my-10 flex justify-center">
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-b from-slate-100 via-white to-slate-50 p-4 md:p-6 max-w-4xl">
                      <img
                        src="/images/phanmemvadulieu.jpg"
                        alt="Phần mềm và dữ liệu"
                        className="rounded-2xl w-full max-w-3xl mx-auto object-contain brightness-105 contrast-105 hover:scale-[1.015] transition-transform duration-500 ease-out"
                      />
                    </div>
                  </div>
                </section>

                <Card className="p-6 my-6 bg-primary/5 border-primary/20">
                  <h3 className="text-xl font-semibold mb-3">Kết luận:</h3>
                  <p className="mb-0">
                    Dù công nghệ có phát triển đến đâu,{" "}
                    <strong>lao động con người</strong> vẫn là nguồn gốc của mọi
                    giá trị mới. AI và robot chỉ là công cụ mở rộng sức lao
                    động, chứ không thể thay thế bản chất sáng tạo của con
                    người.
                  </p>
                </Card>
              </section>

              {/* NÚT ĐIỀU HƯỚNG */}
              <div className="mt-20 flex justify-between animate-fade-in-up">
                <Link to="/content/lesson-1">
                  <Button variant="outline" className="gap-2">
                    <ArrowLeft className="w-4 h-4" /> Bài trước
                  </Button>
                </Link>
                <Link to="/content/lesson-3">
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

export default Lesson2;
