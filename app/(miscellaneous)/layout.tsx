import Footer from "@/components/custom/Footer";
import Header from "@/components/custom/Header/Header";

export default function MiscellaneousLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
