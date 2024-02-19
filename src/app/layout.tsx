import { Toaster } from "@/components/ui/shad-cn/toaster";
import "./globals.css";

import { GeistSans } from "geist/font/sans";

let title = "Next14 + Postgres Auth Starterkit";
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
      <body className={`${GeistSans.variable} bg-slate-50`}>{children}</body>
      <Toaster />
    </html>
  );
}
