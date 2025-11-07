import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const Lesson3 = () => {
  // Scroll animation hooks
  const intro = useScrollFadeIn();
  const part1a = useScrollFadeIn();
  const part1b = useScrollFadeIn();
  const part1c = useScrollFadeIn();
  const part2 = useScrollFadeIn();
  const part3 = useScrollFadeIn();
  const part4a = useScrollFadeIn();
  const part4b = useScrollFadeIn();

  return (
    <div className="min-h-screen flex flex-col bg-lesson-gradient text-gray-800">
      <Header />
      <div className="h-40 bg-gradient-to-b from-primary/10 via-background to-transparent" />

      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Link to="/content">
              <Button variant="ghost" className="mb-10 gap-2">
                <ArrowLeft className="w-4 h-4" /> Quay lại
              </Button>
            </Link>

            <article className="prose prose-lg max-w-none">
              {/* INTRO */}
              <section
                ref={intro.ref}
                className={`text-center mb-20 transition-all duration-700 ${
                  intro.visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent">
                  Bài 3: Trí tuệ nhân tạo và sự thay đổi bản chất lao động
                </h1>
                <Card className="inline-block p-4 bg-primary/5 border-primary/20">
                  <p className="text-lg font-medium mb-0">
                    AI không chỉ thay đổi cách chúng ta làm việc, mà còn thay
                    đổi bản chất của lao động ở cấp độ sâu xa.
                  </p>
                </Card>
              </section>

              {/* PHẦN 1 */}
              <section>
                <h2 className="text-3xl font-bold mb-10 text-primary">
                  1. Sự dịch chuyển từ lao động chân tay sang lao động trí tuệ
                </h2>

                {/* a */}
                <div
                  ref={part1a.ref}
                  className={`grid md:grid-cols-2 gap-8 items-center mb-16 transition-all duration-700 ${
                    part1a.visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  <img
                    src="/images/phan3hinh1.png"
                    alt="Giai đoạn tiền công nghiệp"
                    className="rounded-2xl shadow-[0_0_25px_rgba(56,189,248,0.3)]"
                  />
                  <div className="p-5 bg-rose-50 border border-rose-100 rounded-xl shadow-sm">
                    <h3 className="text-lg font-semibold text-rose-700 mb-3 flex items-center gap-2">
                      <span className="bg-rose-100 text-rose-700 px-2 py-0.5 rounded-md font-bold">
                        (a)
                      </span>
                      Giai đoạn tiền công nghiệp
                    </h3>
                    <ul className="space-y-2 leading-relaxed text-gray-700">
                      <li>• Lao động chủ yếu là lao động chân tay</li>
                      <li>
                        • Nông nghiệp, thủ công nghiệp, truyền nghề qua nhiều
                        thế hệ
                      </li>
                      <li>• Giá trị do sức lao động vật chất tạo ra</li>
                    </ul>
                  </div>
                </div>

                {/* b */}
                <div
                  ref={part1b.ref}
                  className={`grid md:grid-cols-2 gap-8 items-center mb-16 transition-all duration-700 ${
                    part1b.visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  <div className="p-5 bg-amber-50 border border-amber-100 rounded-xl shadow-sm">
                    <h3 className="text-lg font-semibold text-amber-700 mb-3 flex items-center gap-2">
                      <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded-md font-bold">
                        (b)
                      </span>
                      Cách mạng công nghiệp
                    </h3>
                    <ul className="space-y-2 leading-relaxed text-gray-700">
                      <li>• Máy móc thay thế một phần lao động chân tay</li>
                      <li>• Công nhân vận hành máy móc trong nhà máy</li>
                      <li>• Lao động trở nên lặp đi lặp lại, tiêu chuẩn hóa</li>
                    </ul>
                  </div>
                  <img
                    src="/images/phan3hinh3.png"
                    alt="Cách mạng công nghiệp"
                    className="rounded-2xl shadow-[0_0_25px_rgba(56,189,248,0.3)]"
                  />
                </div>

                {/* c */}
                <div
                  ref={part1c.ref}
                  className={`grid md:grid-cols-2 gap-8 items-center mb-20 transition-all duration-700 ${
                    part1c.visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  <img
                    src="/images/phan3hinh2.jpg"
                    alt="Kỷ nguyên AI"
                    className="rounded-2xl shadow-[0_0_25px_rgba(56,189,248,0.3)]"
                  />
                  <div className="p-5 bg-indigo-50 border border-indigo-100 rounded-xl shadow-sm">
                    <h3 className="text-lg font-semibold text-indigo-700 mb-3 flex items-center gap-2">
                      <span className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-md font-bold">
                        (c)
                      </span>
                      Kỷ nguyên AI
                    </h3>
                    <ul className="space-y-2 leading-relaxed text-gray-700">
                      <li>
                        <strong>Lao động chân tay:</strong> Tự động hóa bởi
                        robot
                      </li>
                      <li>
                        <strong>Lao động nhận thức:</strong> Được hỗ trợ/thay
                        thế bởi AI
                      </li>
                      <li>
                        <strong>Lao động sáng tạo:</strong> Vẫn cần con người
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* PHẦN 2 */}
              <section
                ref={part2.ref}
                className={`transition-all duration-700 ${
                  part2.visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl font-bold mb-8 text-accent">
                  2. Vấn đề giá trị thặng dư trong thời đại AI
                </h2>

                <div className="space-y-6">
                  {[
                    {
                      title: "1. Dữ liệu người dùng",
                      content:
                        "Người dùng tạo ra dữ liệu (lao động không được trả công) → công ty công nghệ khai thác → tạo ra giá trị thặng dư.",
                      example:
                        "Ví dụ: Facebook, Google sống nhờ dữ liệu người dùng miễn phí.",
                    },
                    {
                      title: "2. Lao động gig (gig economy)",
                      content:
                        "Nền tảng số kết nối người lao động với khách hàng → chiết xuất giá trị thặng dư từ mỗi giao dịch.",
                      example:
                        "Ví dụ: Uber, Grab, Fiverr – người lao động không phải nhân viên chính thức.",
                    },
                    {
                      title: "3. Lao động trí tuệ cao cấp",
                      content:
                        "Kỹ sư AI, nhà khoa học dữ liệu, designer UX → vẫn tạo ra giá trị thặng dư qua lao động sáng tạo.",
                    },
                  ].map((item, i) => (
                    <Card
                      key={i}
                      className="p-6 bg-amber-50 border border-amber-200 rounded-xl shadow-sm"
                    >
                      <h4 className="text-lg font-semibold text-amber-700 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-base leading-relaxed mb-2">
                        {item.content}
                      </p>
                      {item.example && (
                        <p className="text-sm italic text-gray-600 mb-0">
                          {item.example}
                        </p>
                      )}
                    </Card>
                  ))}
                </div>
              </section>

              {/* PHẦN 3 */}
              <section
                ref={part3.ref}
                className={`transition-all duration-700 mt-20 ${
                  part3.visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl font-bold mb-8 text-destructive">
                  3. Xung đột mới giữa tư bản và lao động
                </h2>

                <img
                  src="/images/phan3hinh2.jpg"
                  alt="Xung đột tư bản và lao động"
                  className="rounded-2xl shadow-[0_0_25px_rgba(56,189,248,0.3)] mb-8 mx-auto"
                />

                <Card className="p-6 bg-destructive/10 border-destructive/20">
                  <h3 className="text-xl font-semibold mb-3">
                    Vấn đề cốt lõi:
                  </h3>
                  <ul className="space-y-2 mb-0">
                    <li>
                      • <strong>Tư bản:</strong> Sở hữu thuật toán, dữ liệu, nền
                      tảng → chiếm đoạt giá trị thặng dư.
                    </li>
                    <li>
                      • <strong>Lao động:</strong> Cung cấp dữ liệu & sức lao
                      động nhưng không kiểm soát được quá trình sản xuất.
                    </li>
                  </ul>
                </Card>

                <p className="text-center italic text-gray-700 mt-10 mb-8 text-lg">
                  “Liệu có thể dân chủ hóa quyền sở hữu AI và dữ liệu?”
                </p>
              </section>

              {/* PHẦN 4 */}
              <section className="mt-20">
                <h2 className="text-3xl font-bold mb-8 text-primary">
                  4. Tương lai của lao động
                </h2>

                {/* a */}
                <div
                  ref={part4a.ref}
                  className={`grid md:grid-cols-2 gap-8 items-center mb-16 transition-all duration-700 ${
                    part4a.visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  <img
                    src="/images/robotpussi.jpg"
                    alt="Kịch bản lạc quan"
                    className="rounded-2xl shadow-[0_0_25px_rgba(56,189,248,0.3)]"
                  />
                  <div className="p-5 bg-green-50 border border-green-100 rounded-xl shadow-sm">
                    <h3 className="text-lg font-semibold text-green-700 mb-3 flex items-center gap-2">
                      <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-md font-bold">
                        (a)
                      </span>
                      Kịch bản lạc quan
                    </h3>
                    <ul className="space-y-2 leading-relaxed text-gray-700">
                      <li>• AI giải phóng con người khỏi lao động nặng nhọc</li>
                      <li>
                        • Con người tập trung vào sáng tạo, nghệ thuật, chăm sóc
                        lẫn nhau
                      </li>
                      <li>• Áp dụng thu nhập cơ bản phổ quát (UBI), thuế AI</li>
                    </ul>
                  </div>
                </div>

                {/* b */}
                <div
                  ref={part4b.ref}
                  className={`grid md:grid-cols-2 gap-8 items-center transition-all duration-700 ${
                    part4b.visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  <div className="p-5 bg-red-50 border border-red-100 rounded-xl shadow-sm">
                    <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                      <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded-md font-bold">
                        (b)
                      </span>
                      Kịch bản bi quan
                    </h3>
                    <ul className="space-y-2 leading-relaxed text-gray-700">
                      <li>• Thất nghiệp gia tăng, bất bình đẳng trầm trọng</li>
                      <li>
                        • Quyền lực tập trung vào các tập đoàn công nghệ lớn
                      </li>
                      <li>• Lao động mất giá trị, con người bị thay thế</li>
                    </ul>
                  </div>
                  <img
                    src="/images/aithaytheconng.jpg"
                    alt="Kịch bản bi quan"
                    className="rounded-2xl shadow-[0_0_25px_rgba(56,189,248,0.3)]"
                  />
                </div>

                <Card className="p-6 my-10 bg-primary/5 border-primary/20">
                  <h3 className="text-xl font-semibold mb-3">Kết luận:</h3>
                  <p className="mb-0">
                    Tương lai của lao động không phụ thuộc vào công nghệ, mà phụ
                    thuộc vào{" "}
                    <strong>các quyết định chính trị và xã hội</strong> mà chúng
                    ta đưa ra hôm nay.
                  </p>
                </Card>
              </section>

              {/* NAV */}
              <div className="mt-20 flex justify-between">
                <Link to="/content/lesson-2">
                  <Button variant="outline" className="gap-2">
                    <ArrowLeft className="w-4 h-4" /> Bài trước
                  </Button>
                </Link>
                <Link to="/content/lesson-4">
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

export default Lesson3;
