import Header from "@/components/ui/Header";

export default function AnimeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto w-full max-w-screen-2xl">{children}</section>
  );
}
