import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import { Toaster } from "@/components/ui/shad-cn/toaster";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-grow py-10">
        <div className="relative mx-auto max-w-screen-2xl px-8 md:mx-auto">
          {children}
        </div>
      </div>
      <Footer />
      <Toaster />
    </section>
  );
}
