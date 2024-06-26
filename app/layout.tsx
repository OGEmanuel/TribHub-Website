import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import { url } from "inspector";

const inter = Inter({ subsets: ["latin"] });

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
    type: "website", // Ensure the type is defined
    title: "Tribhub",
    description: "Manage and Grow your communities seamlessly",
    url: "https://trib-hub-website.vercel.app/",
    images: [
      {
        url: "/og-image.png",
        width: 1200, // Use recommended dimensions for large format
        height: 630,
        alt: "Tribhub Open Graph Image",
      },
    ],
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
