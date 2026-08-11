import Hero from "./_sections/Hero";
import Work from "./_sections/Work";
import FAQ from "./_sections/FAQ";
import Contact from "./_sections/Contact";
import TeamMembers from "./_sections/TeamMembers";

export default function Home() {
  return (
    <div>
      <Hero />
      <Work />
      <TeamMembers/>
      <FAQ/>
      <Contact/>
    </div>
  );
}
