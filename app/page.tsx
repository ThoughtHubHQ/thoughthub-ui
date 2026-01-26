import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Demo Screen */}
      <section className="bg-[#e7eacd] flex justify-center items-center min-h-screen">
        <Link href="https://thoughthubhq.com">
          <Image
            src="/logo/th-logo.png"
            alt="Logo"
            width={400}
            height={400}
            className="animate-pulse duration-500 hover:animate-none transition-all aspect-square object-cover"
          />
        </Link>
      </section>
    </div>
  );
}
