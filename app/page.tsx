import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./theme";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Link href="/test">SSR Test</Link>
      <Link href="/client">Client</Link>
      <Link href="/list">List</Link>
      <Link href="/pagination?page=1">Pagination</Link>
      <ThemeToggle />
    </main>
  );
}
