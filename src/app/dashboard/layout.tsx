import Header from "@/components/ui/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="container max-w-screen-2xl items-center justify-between gap-8">
      <div className="relative flex min-h-screen flex-col bg-background">
        <Header />
        {children}
      </div>
    </section>
  );
}
