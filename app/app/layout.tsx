import { SiteFooter } from "@/components/site-footer";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppHeader } from "@/components/app-header";
import { ClerkProvider } from "@clerk/nextjs";
import { PageContaier } from "@/components/misc";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SERP ONE",
  description: "SERP ONE is a tool for tracking your search engine rankings.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {/* <AppHeader /> */}
          {children}
          <SiteFooter />
        </body>
      </html>
    // </ClerkProvider>
  );
}
