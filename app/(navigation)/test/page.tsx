import Link from "next/link";

export default async function Page() {
  const response = await fetch(process.env.SERVER_HOST + "/api/test", {
    cache: "no-store",
  });
  const { greeting }: { greeting: string } = await response.json();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1>{greeting}</h1>
      <Link href="/">Home</Link>
    </div>
  );
}
