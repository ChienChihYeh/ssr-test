import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next Playground",
  description: "...",
};

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-secondary">
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav className="w-full bg-primary p-2 pl-0 pr-0 text-secondary text-center">
        Hello
      </nav>
      {children}
    </section>
  );
}
