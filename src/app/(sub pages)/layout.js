import HomeBtn from "@/components/HomeBtn";

export default function SubPagesLayout({ children }) {
  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-center px-3 py-20 sm:px-8 lg:px-14">
      <HomeBtn />
      {children}
    </main>
  );
}
