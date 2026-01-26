import { VerifiedSign } from "@/components/custom/verifiedSign";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Demo Screen */}
      <section className="bg-[#e7eacd] text-center min-h-screen">
        <Link href="https://thoughthubhq.com">
          <div className=" flex-col flex justify-center items-center min-h-[96vh] bg-[url('/logo/th-logo.png')] bg-no-repeat bg-center bg-contain" />
        </Link>
        <span className="font-semibold flex justify-center items-center text-center gap-1">
          &copy; {new Date().getFullYear()} ThoughtHub{" "}
          <VerifiedSign className="text-[#075eea]" size={17}/>
        </span>
      </section>
    </div>
  );
}
