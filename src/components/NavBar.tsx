import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <Link href="/">판다마켓</Link>
      <Link href="/boards" prefetch>자유게시판</Link>
      <Link href="/itmes" prefetch>중고마켓</Link>
    </>
  );
}