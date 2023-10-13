export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav className="w-full bg-black p-2 pl-0 pr-0 text-white text-center">
        Hello
      </nav>

      {children}
    </section>
  );
}
