import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const heading = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Resume AI - Create a Resume that Gets Noticed",
  description: "Create a resume that gets noticed with Resume AI. Our AI-powered resume builder helps you craft a resume that highlights your skills and experience.",
  keywords: "resume builder, resume ai, job search, career development",
  authors: [{ name: "Manoj Kumar", url: "https://github.com/iamsidar07" }],
  openGraph: {
    title: "Resume AI - Create a Resume that Gets Noticed",
    description: "Create a resume that gets noticed with Resume AI. Our AI-powered resume builder helps you craft a resume that highlights your skills and experience.",
    images: ["https://myjobresumeai.vercel.app/og.png"],
    url: "https://myjobresumeai.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume AI - Create a Resume that Gets Noticed",
    description: "Create a resume that gets noticed with Resume AI. Our AI-powered resume builder helps you craft a resume that highlights your skills and experience.",
    images: ["https://myjobresumeai.vercel.app/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${body.variable} ${heading.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
