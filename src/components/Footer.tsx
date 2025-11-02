const Footer = () => {
  return (
    <footer className="border-t bg-card mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="font-semibold text-foreground">
              MLN122 – FPT University
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Nhóm sinh viên nghiên cứu về AI & lao động
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground italic">
              "Không có gì quý hơn độc lập tự do"
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              – Hồ Chí Minh
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
