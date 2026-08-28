import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { PHONE_DISPLAY } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daniel's Arctic Touch | Refrigeration & Air Conditioning",
  description:
    "Professional refrigeration, air-conditioning installation, diagnostics, repairs and maintenance. 24HR assistance from Daniel's Arctic Touch in Zimbabwe.",
  keywords: [
    "refrigeration",
    "air conditioning",
    "AC repair",
    "AC installation",
    "cold room installation",
    "freezer room",
    "refrigerator repair",
    "vehicle air conditioning",
    "commercial refrigeration",
    "refrigeration repairs",
    "Zimbabwe",
  ],
  authors: [{ name: "Daniel's Arctic Touch" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Daniel's Arctic Touch | Refrigeration & Air Conditioning",
    description:
      "Professional refrigeration, air-conditioning installation, diagnostics, repairs and maintenance. 24HR assistance.",
    siteName: "Daniel's Arctic Touch",
    type: "website",
    locale: "en_ZW",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel's Arctic Touch | Refrigeration & Air Conditioning",
    description:
      "Professional refrigeration, air-conditioning installation, diagnostics, repairs and maintenance. 24HR assistance.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Daniel's Arctic Touch",
              description:
                "Professional refrigeration and air-conditioning installation, diagnostics, repairs and maintenance.",
              telephone: PHONE_DISPLAY,
              email: "danryanhill18@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressCountry: "ZW",
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "00:00",
                closes: "23:59",
              },
              serviceType: [
                "Air Conditioning Installation",
                "Cold Room Installation",
                "Refrigeration Repair",
                "Vehicle Air Conditioning",
                "Commercial Refrigeration",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
