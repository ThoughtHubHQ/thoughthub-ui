import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="bg-[#e7eacd] flex justify-center items-center min-h-screen">
        <Image
      src="/logo/th-logo.png"
      alt="Logo"
      width={400}
      height={400}
      className="animate-pulse duration-500 hover:animate-none transition-all aspect-square object-cover"
    />
      </section>
    </div>
  );
}
