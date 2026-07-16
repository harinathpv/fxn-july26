import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import TermsAndConditions from "@/components/TermsAndConditions";

export const metadata: Metadata = {
  title: "FxN — Leadership Pods and Leadership as a Service for Growing Companies",
  description:
    "FxN is India's shared leadership platform, helping growing companies access senior leaders through outcome-led Leadership Pods and flexible Leadership as a Service subscriptions.",
  icons: {
    icon: "https://www.fxn.network/images/fxn-logo-new.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
        <TermsAndConditions />
      </body>
    </html>
  );
}
