import "../styles/globals.css";
import React from "react";
import type { Metadata } from "next";
import {
  Roboto,
  Bebas_Neue,
} from "next/font/google";

import Header from "@components/Header";
import { Footer } from "@components/Footer";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  weight: ["400"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-common",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "CrowdCoded",
  description: "Devs for a better future",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "CrowdCoded",
    description: "Devs for a better future",
    url: "https://adrianaito.com",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${bebasNeue.variable} layout`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
