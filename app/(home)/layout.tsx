export default function HomeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="relative bg-[#e7eacd] dark:bg-[#0a0a0a] transition-colors duration-500">
      <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-white/40 dark:bg-[#e7eacd]/5 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-black/5 dark:bg-[#e7eacd]/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 flex flex-col">
        <div className="grow flex flex-col w-full">{children}</div>
      </div>
    </div>
  );
}
