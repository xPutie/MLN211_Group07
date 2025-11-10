import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Lesson4 = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Link to="/content">
              <Button variant="ghost" className="mb-6 gap-2">
                <ArrowLeft className="w-4 h-4" />
                Quay lại
              </Button>
            </Link>

            <motion.h1
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            >
              Bài 4: Định hướng phát triển nguồn nhân lực chất lượng cao của
              Việt Nam
            </motion.h1>

            {/* Section 1 */}
            <motion.div
              className="grid md:grid-cols-2 gap-8 items-center mb-16"
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
            >
              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  1. Bối cảnh và thách thức
                </h2>
                <p>
                  Việt Nam đang bước vào thời kỳ công nghiệp 4.0 với nhiều cơ
                  hội nhưng cũng không ít thách thức trong việc phát triển nguồn
                  nhân lực phù hợp.
                </p>
                <ul className="list-disc ml-6 mt-3 space-y-1">
                  <li>Dân số trẻ, lực lượng lao động dồi dào</li>
                  <li>Tỷ lệ lao động qua đào tạo vẫn còn thấp</li>
                  <li>Năng suất lao động chưa cao</li>
                </ul>
              </div>
              <motion.img
                src="/images/P4.1.png"
                alt="Công nhân nhà máy công nghệ cao"
                className="rounded-2xl shadow-lg"
                variants={fadeIn}
              />
            </motion.div>

            {/* Section 2 */}
            <motion.div
              className="grid md:grid-cols-2 gap-8 items-center mb-16"
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
            >
              <motion.img
                src="/images/P4.2.png"
                alt="Lớp học thông minh"
                className="rounded-2xl shadow-lg order-2 md:order-1"
                variants={fadeIn}
              />
              <div className="order-1 md:order-2">
                <h2 className="text-2xl font-semibold mb-4">
                  2. Thách thức từ AI và tự động hóa
                </h2>
                <p>
                  Sự phát triển mạnh mẽ của trí tuệ nhân tạo, robot và công nghệ
                  tự động hóa đang khiến nhiều ngành nghề truyền thống thay đổi
                  nhanh chóng.
                </p>
                <Card className="p-4 mt-3 bg-destructive/10 border-destructive/20">
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Nguy cơ thất nghiệp cho lao động giản đơn</li>
                    <li>Chênh lệch kỹ năng giữa các thế hệ</li>
                    <li>Doanh nghiệp khó tìm nhân lực công nghệ cao</li>
                  </ul>
                </Card>
              </div>
            </motion.div>

            {/* Section 3 */}
            <motion.div
              className="grid md:grid-cols-2 gap-8 items-center mb-16"
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
            >
              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  3. Chính sách phát triển nhân lực
                </h2>
                <p>
                  Nhà nước đã ban hành nhiều chính sách như{" "}
                  <strong>Nghị quyết 35-NQ/TW (2023)</strong> nhằm phát triển
                  nguồn nhân lực chất lượng cao.
                </p>
                <Card className="p-4 mt-3 bg-primary/10 border-primary/20">
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Tăng tỷ lệ lao động qua đào tạo nghề</li>
                    <li>Đầu tư mạnh vào giáo dục STEM</li>
                    <li>Đổi mới mô hình đào tạo theo nhu cầu doanh nghiệp</li>
                  </ul>
                </Card>
              </div>
              <motion.img
                src="/images/P4.3.png"
                alt="Sinh viên công nghệ"
                className="rounded-2xl shadow-lg"
                variants={fadeIn}
              />
            </motion.div>

            {/* Section 4 */}
            <motion.div
              className="grid md:grid-cols-2 gap-8 items-center mb-16"
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
            >
              <motion.img
                src="/images/P4.4.png"
                alt="Nhà máy sản xuất"
                className="rounded-2xl shadow-lg order-2 md:order-1"
                variants={fadeIn}
              />
              <div className="order-1 md:order-2">
                <h2 className="text-2xl font-semibold mb-4">
                  4. Các kỹ năng cần thiết trong thời đại 4.0
                </h2>
                <p>
                  Để thích nghi với sự thay đổi, người lao động cần được trang
                  bị cả <strong>kỹ năng cứng</strong> và{" "}
                  <strong>kỹ năng mềm</strong>.
                </p>
                <ul className="list-disc ml-6 mt-3 space-y-1">
                  <li>Lập trình, phân tích dữ liệu, tư duy công nghệ</li>
                  <li>Tư duy phản biện, sáng tạo, giao tiếp hiệu quả</li>
                  <li>Khả năng học hỏi suốt đời</li>
                </ul>
              </div>
            </motion.div>

            {/* Section 5 */}
            <motion.div
              className="grid md:grid-cols-2 gap-8 items-center mb-16"
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
            >
              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  5. Các ngành nghề tiềm năng
                </h2>
                <p>
                  Một số ngành nghề được dự báo phát triển mạnh trong tương lai
                  gồm:
                </p>
                <ul className="list-disc ml-6 mt-3 space-y-1">
                  <li>Công nghệ thông tin và AI</li>
                  <li>Năng lượng xanh và bền vững</li>
                  <li>Y tế và chăm sóc sức khỏe</li>
                  <li>Sáng tạo nội dung và truyền thông số</li>
                </ul>
              </div>
              <motion.img
                src="/images/P4.5.jpg"
                alt="Ngành nghề tương lai"
                className="rounded-2xl shadow-lg"
                variants={fadeIn}
              />
            </motion.div>

            {/* Section 6 */}
            <motion.div
              className="grid md:grid-cols-2 gap-8 items-center mb-16"
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
            >
              <motion.img
                src="/images/P4.6.jpg"
                alt="Liên hệ với Marx"
                className="rounded-2xl shadow-lg order-2 md:order-1"
                variants={fadeIn}
              />
              <div className="order-1 md:order-2">
                <h2 className="text-2xl font-semibold mb-4">
                  6. Liên hệ với lý thuyết Marx
                </h2>
                <p>
                  Theo Marx, con người là lực lượng sản xuất quan trọng nhất. Do
                  đó, phát triển nguồn nhân lực là nền tảng cho sự phát triển xã
                  hội.
                </p>
                <Card className="p-4 mt-3 bg-accent/10 border-accent/20">
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Bảo đảm công bằng xã hội trong giáo dục</li>
                    <li>Phát triển toàn diện về kỹ năng và đạo đức</li>
                    <li>Bảo vệ quyền lợi người lao động trong thời đại số</li>
                  </ul>
                </Card>
              </div>
            </motion.div>

            {/* Conclusion */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
            >
              <Card className="p-6 mb-12 bg-gradient-to-r from-primary/10 to-accent/10">
                <h2 className="text-2xl font-bold mb-3">Kết luận</h2>
                <p>
                  Việt Nam đang chuyển mình từ nền kinh tế dựa trên lao động giá
                  rẻ sang nền kinh tế tri thức, nơi con người là trung tâm của
                  phát triển bền vững. "Không có gì quý hơn độc lập tự do" – và
                  trong thời đại AI, độc lập về công nghệ và nguồn nhân lực là
                  chìa khóa để Việt Nam thực sự độc lập và phát triển.
                </p>
              </Card>

              <div className="mt-12 flex justify-between">
                <Link to="/content/lesson-3">
                  <Button variant="outline" className="gap-2">
                    <ArrowLeft className="w-4 h-4" /> Bài trước
                  </Button>
                </Link>
                <Link to="/quiz">
                  <Button variant="hero">Làm bài tập</Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Lesson4;
