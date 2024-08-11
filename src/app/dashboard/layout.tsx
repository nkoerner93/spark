import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import { Toaster } from "@/components/ui/shad-cn/toaster";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="gap-8">
      <div className="relative mx-auto flex min-h-screen flex-col pb-32">
        <Header />
        {children}
      </div>
      <Footer />
      <Toaster />
    </section>
  );
}
