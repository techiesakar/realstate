import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/navigation/header/header";
import { Footer } from "@/components/navigation/footer/footer";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Houzez",
  description: "The home you're dreaming of is waiting for you",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} flex flex-col`}>
        <Header />
        <main className="flex-1 mb-10 lg:mb-26">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
