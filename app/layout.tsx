import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";

const inter = Inter({ subsets: ["latin"] });

// HEAD - metadata setting
export const metadata = {
  metadataBase: new URL("https://trib-hub-website.vercel.app/"),
  title: "Tribhub",
  description: "Manage and Grow your communities seamlessly",
  keywords:
    "community, web development, online marketing, websites, e-commerce, marketing campaigns, SEO, SEM, social media marketing, lead generation, online growth",
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/favicon.ico",
    },
  },
  openGraph: {
    images: "/og-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
