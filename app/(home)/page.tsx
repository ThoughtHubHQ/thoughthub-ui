import Hero from "./_sections/Hero";
import Work from "./_sections/Work";
import FAQ from "./_sections/FAQ";
import Contact from "./_sections/Contact";
import Team from "./_sections/Teams";

export default function Home() {
  return (
    <div>
      <Hero />
      <Work />
      <Team/>
      <FAQ/>
      <Contact/>
    </div>
  );
}
