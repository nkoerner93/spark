import Header from "@/components/ui/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="gap-8">
      <div className="relative mx-auto flex min-h-screen flex-col">
        <Header />
        {children}
      </div>
    </section>
  );
}
