import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CodeBuck - Web, App & Digital Solutions",
  description:
    "CodeBuck is a cutting-edge IT company specializing in web development, mobile apps, UI/UX design, and SEO services. We help businesses grow with powerful and scalable digital solutions.",
  icons: {
    icon: "/myfavicon.ico", // Make sure this file is inside the public folder
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black overflow-x-hidden"> {/* Added overflow-x-hidden here */}
        {/* Navbar */}
        <div className="sticky top-0 z-50">
          <div className="w-full max-w-6xl mx-auto px-2 md:px-6"> {/* Adjusted padding here */} 
            <Navbar />
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-grow">
          <div className="w-full max-w-6xl mx-auto px-2 md:px-6"> {/* Adjusted padding here */}
            {children}
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
