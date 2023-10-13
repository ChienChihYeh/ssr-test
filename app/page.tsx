import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Link href="/test">SSR Test</Link>
      <Link href="/client">Client</Link>
    </main>
  );
}
