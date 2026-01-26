import { VerifiedSign } from "@/components/custom/verifiedSign";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Demo Screen */}
      <section className="bg-[#e7eacd] dark:bg-black text-center min-h-screen">
        <Link href="https://thoughthubhq.com">
          <div className=" flex-col flex justify-center items-center min-h-[88vh] bg-[url('/logo/th-logo.png')] dark:bg-[url('/logo/th-logo-wt.png')] bg-no-repeat bg-center bg-contain" />
        </Link>
        <span className="font-semibold flex justify-center items-center text-center gap-1 mb-5">
          &copy; {new Date().getFullYear()} ThoughtHub{" "}
          <VerifiedSign className="text-[#075eea]" size={17}/>
        </span>
      <ThemeToggle className="bg-transparent"/>
      </section>
    </div>
  );
}
