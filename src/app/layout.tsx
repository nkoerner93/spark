import Footer from "@/components/ui/Footer";
import "./globals.css";

import { GeistSans } from "geist/font/sans";

let title = "Spark - Anime, Gaming and Gaming-Tools all in one place!";
let description =
  "This is a Next.js starter kit that uses NextAuth.js for simple email + password login and a Postgres database to persist the data.";

export const metadata = {
  title,
  description,
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  metadataBase: new URL("https://nextjs-postgres-auth.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} w-screen bg-slate-50`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
