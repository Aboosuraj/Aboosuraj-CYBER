import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CYBER 🐂🀄️ | Aboosuraj — Web3 Developer",
  description:
    "Explore Aboosuraj's portfolio featuring blockchain development, Web3 applications, decentralized finance, and security tools.",
  openGraph: {
    title: "CYBER 🐂🀄️ | Aboosuraj",
    description:
      "Web3 Developer & Blockchain Builder. Building the decentralized future.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
