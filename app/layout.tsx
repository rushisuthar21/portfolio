import type { Metadata } from "next";
import FloatingNavbar from "./components/FloatingNavbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rushi Suthar",
  description:
    "Portfolio of Rushi Suthar, a full-stack developer building responsive, scalable web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[var(--ink)]">
        <FloatingNavbar />

        {children}
      </body>
    </html>
  );
}
