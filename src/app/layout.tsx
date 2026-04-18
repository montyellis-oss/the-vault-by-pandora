import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Élite Digital — Curated Premium Digital Products",
  description:
    "The internet's finest hand-curated collection of premium digital products. Notion templates, AI tools, design assets, and more — personally vetted by our editorial team.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-boutique-black font-body text-boutique-white antialiased">
        {children}
      </body>
    </html>
  );
}