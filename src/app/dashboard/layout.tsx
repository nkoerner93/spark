import Header from "@/components/ui/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="container max-w-screen-2xl gap-8">
      <div className="relative flex min-h-screen flex-col items-center">
        <Header />
        <div className="mt-12"></div>
        {children}
      </div>
    </section>
  );
}
