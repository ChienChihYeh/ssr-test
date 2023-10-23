"use client";

export default function Client({ text }: { text: string }) {
  return (
    <button
      className="text-secondary bg-primary py-1 px-2 rounded hover:bg-highlight"
      onClick={() => {
        alert(text);
      }}
    >
      Click Me
    </button>
  );
}
