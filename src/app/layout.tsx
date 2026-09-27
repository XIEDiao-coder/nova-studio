import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { site } from "@/config/site";
import "./globals.css";
export const metadata: Metadata = {
  title: "Nova Studio — AI-powered Website Development",
  description: site.description,
  applicationName: site.name,
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "Nova Studio — Good ideas deserve great websites.",
    description: site.description,
    type: "website",
    locale: "zh_CN",
    siteName: site.name,
  },
  twitter: {
    card: "summary",
    title: "Nova Studio",
    description: site.description,
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
