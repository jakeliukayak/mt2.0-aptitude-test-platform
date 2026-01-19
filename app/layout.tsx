import type { Metadata } from "next";
import "./globals.css";
import { basePath } from "@/lib/basePath";

export const metadata: Metadata = {
  title: "MT2.0 Aptitude Test",
  description: "A comprehensive aptitude test platform covering Numerical, Verbal, Inductive, and Deductive Reasoning",
  icons: {
    icon: `${basePath}/logo.svg`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
