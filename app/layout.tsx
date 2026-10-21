import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'A playlist under a cap',
  description: '90 plus 90 is 180, under 200. Over 100 is refused. A repeated id is refused. Nothing is played.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
