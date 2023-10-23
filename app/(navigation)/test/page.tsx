import Link from "next/link";
import Client from "./client";

export default async function Page() {
  const response = await fetch(process.env.SERVER_HOST + "/api/test", {
    cache: "no-store",
  });
  const { greeting }: { greeting: string } = await response.json();

  const text = greeting;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Client text={text} />
      <h2>{greeting}</h2>
      <Link href="/">Home</Link>
    </div>
  );
}
