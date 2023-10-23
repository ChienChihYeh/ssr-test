"use client";
import Link from "next/link";
import { fetchGreetings } from "@/utils/fetch";

export default function Client() {
  function showGreetings() {
    fetchGreetings().then((res) => {
      alert(res);
    });
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <p>
        <button
          onClick={showGreetings}
          className="text-secondary bg-primary py-1 px-2 rounded"
        >
          Click Me
        </button>
      </p>
      <Link href="/">Home</Link>
    </div>
  );
}
