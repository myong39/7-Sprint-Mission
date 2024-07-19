import NavBar from "@/components/NavBar";

export default function BoardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>{children}</main>
    </>
  );
}