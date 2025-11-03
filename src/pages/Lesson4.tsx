import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Lesson4 = () => {
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
                Bài 4: Định hướng phát triển nguồn nhân lực chất lượng cao của
                Việt Nam
              </h1>

              <Card className="p-6 mb-8 bg-muted/50">
                <p className="text-lg font-medium mb-0">
                  Trong bối cảnh cách mạng công nghiệp 4.0, Việt Nam cần chiến
                  lược phát triển nguồn nhân lực phù hợp để không bị tụt hậu.
                </p>
              </Card>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                1. Bối cảnh và thách thức
              </h2>

              <h3 className="text-xl font-semibold mt-6 mb-3">
                a) Hiện trạng nguồn nhân lực Việt Nam
              </h3>
              <ul className="space-y-2">
                <li>
                  • Dân số trẻ, lực lượng lao động dồi dào (khoảng 55 triệu
                  người)
                </li>
                <li>
                  • Nhưng phần lớn là lao động phổ thông, chưa qua đào tạo
                </li>
                <li>• Tỷ lệ lao động có trình độ cao còn thấp (khoảng 25%)</li>
                <li>
                  • Năng suất lao động thấp hơn nhiều so với các nước trong khu
                  vực
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">
                b) Thách thức từ AI và tự động hóa
              </h3>
              <Card className="p-6 my-6 bg-destructive/10 border-destructive/20">
                <ul className="space-y-2 mb-0">
                  <li>• Nguy cơ thất nghiệp cho lao động giản đơn</li>
                  <li>• Cạnh tranh gay gắt với các nước có công nghệ cao</li>
                  <li>
                    • Chênh lệch kỹ năng ngày càng lớn giữa lao động trẻ và lao
                    động lớn tuổi
                  </li>
                  <li>• Doanh nghiệp khó tìm nhân tài công nghệ cao</li>
                </ul>
              </Card>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                2. Chính sách của Nhà nước
              </h2>

              <h3 className="text-xl font-semibold mt-6 mb-3">
                a) Nghị quyết về phát triển nguồn nhân lực
              </h3>
              <p>
                <strong>Nghị quyết số 35-NQ/TW</strong> (2023) đặt mục tiêu:
              </p>
              <Card className="p-6 my-6 bg-primary/5 border-primary/20">
                <ul className="space-y-2 mb-0">
                  <li>• Đến 2030: 35-40% lao động qua đào tạo nghề</li>
                  <li>
                    • Đến 2045: Trở thành quốc gia có nguồn nhân lực chất lượng
                    cao
                  </li>
                  <li>• Tập trung vào khoa học, công nghệ, đổi mới sáng tạo</li>
                  <li>
                    • Phát triển mạnh giáo dục STEM (khoa học, công nghệ, kỹ
                    thuật, toán học)
                  </li>
                </ul>
              </Card>

              <h3 className="text-xl font-semibold mt-6 mb-3">
                b) Đầu tư vào giáo dục và đào tạo
              </h3>
              <ul className="space-y-2">
                <li>
                  <strong>Chuyển đổi số giáo dục:</strong> Trang bị nền tảng số
                  cho học sinh từ nhỏ
                </li>
                <li>
                  <strong>Đào tạo lại (Reskilling):</strong> Hỗ trợ người lao
                  động học kỹ năng mới
                </li>
                <li>
                  <strong>Liên kết doanh nghiệp - trường học:</strong> Đào tạo
                  gắn với nhu cầu thực tế
                </li>
                <li>
                  <strong>Thu hút chuyên gia:</strong> Chính sách ưu đãi cho
                  nhân tài công nghệ
                </li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                3. Các kỹ năng cần thiết trong thời đại 4.0
              </h2>

              <h3 className="text-xl font-semibold mt-6 mb-3">
                a) Kỹ năng kỹ thuật (Hard Skills)
              </h3>
              <Card className="p-6 my-6 bg-accent/10 border-accent/20">
                <ul className="space-y-2 mb-0">
                  <li>
                    • <strong>Lập trình và phát triển phần mềm:</strong> Python,
                    JavaScript, AI/ML
                  </li>
                  <li>
                    • <strong>Phân tích dữ liệu:</strong> SQL, Excel nâng cao,
                    BI tools
                  </li>
                  <li>
                    • <strong>Thiết kế số:</strong> UX/UI, đồ họa, multimedia
                  </li>
                  <li>
                    • <strong>Tư duy công nghệ:</strong> Hiểu cơ bản về AI,
                    blockchain, IoT
                  </li>
                </ul>
              </Card>

              <h3 className="text-xl font-semibold mt-6 mb-3">
                b) Kỹ năng mềm (Soft Skills)
              </h3>
              <Card className="p-6 my-6 bg-accent/10 border-accent/20">
                <ul className="space-y-2 mb-0">
                  <li>
                    • <strong>Tư duy phản biện:</strong> Phân tích, đánh giá
                    thông tin
                  </li>
                  <li>
                    • <strong>Sáng tạo:</strong> Đề xuất giải pháp mới, đổi mới
                  </li>
                  <li>
                    • <strong>Giao tiếp:</strong> Làm việc nhóm, thuyết trình,
                    đàm phán
                  </li>
                  <li>
                    • <strong>Học suốt đời:</strong> Thích nghi với thay đổi
                    nhanh
                  </li>
                  <li>
                    • <strong>Trí tuệ cảm xúc:</strong> Thấu hiểu con người,
                    quản lý cảm xúc
                  </li>
                </ul>
              </Card>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                4. Các ngành nghề tiềm năng
              </h2>
              <p>
                Dựa trên xu hướng phát triển, một số ngành nghề được dự báo sẽ
                phát triển mạnh:
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <Card className="p-4 bg-primary/5">
                  <h4 className="font-semibold mb-2">Công nghệ thông tin</h4>
                  <ul className="text-sm space-y-1 mb-0">
                    <li>• Lập trình viên AI/ML</li>
                    <li>• Chuyên gia an ninh mạng</li>
                    <li>• Cloud architect</li>
                    <li>• Data scientist</li>
                  </ul>
                </Card>

                <Card className="p-4 bg-accent/10">
                  <h4 className="font-semibold mb-2">
                    Y tế & Chăm sóc sức khỏe
                  </h4>
                  <ul className="text-sm space-y-1 mb-0">
                    <li>• Điều dưỡng chuyên khoa</li>
                    <li>• Chuyên gia y tế số</li>
                    <li>• Tư vấn sức khỏe tâm thần</li>
                  </ul>
                </Card>

                <Card className="p-4 bg-primary/5">
                  <h4 className="font-semibold mb-2">Năng lượng xanh</h4>
                  <ul className="text-sm space-y-1 mb-0">
                    <li>• Kỹ sư năng lượng tái tạo</li>
                    <li>• Chuyên gia bền vững</li>
                    <li>• Quản lý dự án xanh</li>
                  </ul>
                </Card>

                <Card className="p-4 bg-accent/10">
                  <h4 className="font-semibold mb-2">Sáng tạo nội dung</h4>
                  <ul className="text-sm space-y-1 mb-0">
                    <li>• Content creator</li>
                    <li>• Digital marketing</li>
                    <li>• UX designer</li>
                  </ul>
                </Card>
              </div>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                5. Liên hệ với lý thuyết Marx
              </h2>

              <Card className="p-6 my-6 bg-primary/5 border-primary/20">
                <p className="mb-3">
                  Theo Marx,{" "}
                  <strong>
                    con người là lực lượng sản xuất quan trọng nhất
                  </strong>
                  . Phát triển con người không chỉ là mục tiêu kinh tế, mà còn
                  là mục tiêu xã hội.
                </p>
                <p className="mb-3">Việt Nam cần đảm bảo:</p>
                <ul className="space-y-2 mb-0">
                  <li>
                    • <strong>Công bằng xã hội:</strong> Ai cũng có cơ hội tiếp
                    cận giáo dục chất lượng
                  </li>
                  <li>
                    • <strong>Phát triển toàn diện:</strong> Không chỉ kỹ năng,
                    mà cả nhân cách và đạo đức
                  </li>
                  <li>
                    • <strong>Bảo vệ người lao động:</strong> Luật lao động phù
                    hợp với thời đại số
                  </li>
                  <li>
                    • <strong>Phân phối lại của cải:</strong> Tránh khoảng cách
                    giàu nghèo quá lớn do AI
                  </li>
                </ul>
              </Card>

              <h2 className="text-2xl font-bold mt-8 mb-4">6. Kết luận</h2>
              <p>
                Việt Nam đang đứng trước cơ hội lớn để chuyển đổi từ{" "}
                <strong>lợi thế lao động giá rẻ</strong> sang{" "}
                <strong>lợi thế nguồn nhân lực chất lượng cao</strong>.
              </p>

              <Card className="p-6 my-6 bg-gradient-to-r from-primary/10 to-accent/10">
                <h3 className="text-xl font-semibold mb-3">Thông điệp cuối:</h3>
                <p className="mb-0 text-lg font-medium">
                  "Không có gì quý hơn độc lập tự do" – và trong thời đại AI,
                  độc lập về công nghệ và nguồn nhân lực là chìa khóa để Việt
                  Nam thực sự độc lập và phát triển.
                </p>
              </Card>

              <div className="mt-12 flex justify-between">
                <Link to="/content/lesson-3">
                  <Button variant="outline" className="gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    Bài trước
                  </Button>
                </Link>
                <Link to="/quiz">
                  <Button variant="hero">Làm bài tập</Button>
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

export default Lesson4;
