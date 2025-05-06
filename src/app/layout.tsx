/* eslint-disable @next/next/no-page-custom-font */
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import type { Metadata } from "next";

// SEO metadata and other tags
export const metadata: Metadata = {
  title: "CodeBuck - Web, App & Digital Solutions",
  description:
    "CodeBuck is a cutting-edge IT company specializing in web development, mobile apps, UI/UX design, and SEO services. We help businesses grow with powerful and scalable digital solutions.",
  icons: {
    icon: "/myfavicon.ico",
  },
  // Open Graph meta tags for social media optimization
  openGraph: {
    type: "website",
    title: "CodeBuck - Web, App & Digital Solutions",
    description:
      "CodeBuck is a cutting-edge IT company specializing in web development, mobile apps, UI/UX design, and SEO services.",
    url: "https://codebuck.com/", // Make sure to replace with your actual URL
    images: [
      {
        url: "/public/codebucklogo.png", // Replace with actual image path
        width: 1200,
        height: 630,
        alt: "CodeBuck - Digital Solutions"
      },
    ],
  },
  // Twitter Card meta tags for better visibility on Twitter
  twitter: {
    card: "summary_large_image",
    title: "CodeBuck - Web, App & Digital Solutions",
    description:
      "CodeBuck is a cutting-edge IT company specializing in web development, mobile apps, UI/UX design, and SEO services.",
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
        <meta name="robots" content="index, follow" /> {/* Allow crawling */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="author" content="CodeBuck" />
        <meta name="keywords" content="Web Development, Mobile Apps, SEO, UI/UX Design, Digital Solutions" /> {/* Add relevant keywords */}
        <meta name="description" content="CodeBuck is a cutting-edge IT company specializing in web development, mobile apps, UI/UX design, and SEO services." /> {/* Short description for search engines */}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-black overflow-x-hidden">
        <SmoothScrollProvider>
          {/* Navbar */}
          <div className="sticky top-0 z-50">
            <div className="w-full max-w-6xl mx-auto px-2 md:px-6">
              <Navbar />
            </div>
          </div>

          {/* Main Content */}
          <main className="flex-grow">
            <div className="w-full max-w-6xl mx-auto px-2 md:px-6">
              {children}
            </div>
          </main>

          {/* Footer */}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
