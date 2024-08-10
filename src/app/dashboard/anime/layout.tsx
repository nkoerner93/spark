export default function AnimeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto w-full max-w-screen-2xl px-4 2xl:px-0">
      {children}
    </section>
  );
}
