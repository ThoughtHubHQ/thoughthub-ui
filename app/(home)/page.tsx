import Header from "@/components/custom/Header/Header";
import Hero from "./_sections/Hero";
import Work from "./_sections/Work";
import Footer from "@/components/custom/Footer";
import FAQ from "./_sections/FAQ";
import Contact from "./_sections/Contact";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Work />
      <FAQ/>
      <Contact/>
      <Footer />
    </div>
  );
}
