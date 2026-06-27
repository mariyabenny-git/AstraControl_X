import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AstraControl",
  description: "AI Tactical Command Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}