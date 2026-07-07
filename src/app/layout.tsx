import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import CustomCursor from "@/components/CustomCursor";
import AnimatedBackground from "@/components/AnimatedBackground";

export const metadata: Metadata = {
  title: 'Balloon CG Visuals | Premium Event Visual Solutions',
  description: 'Elevate your events with stunning LED screens, immersive projection mapping, and creative visual solutions. Based in Egypt and Saudi Arabia.',
  keywords: ['LED screens', 'projection mapping', 'event visuals', 'corporate events', 'Egypt', 'Saudi Arabia'],
  authors: [{ name: 'Balloon CG Visuals' }],
  openGraph: {
    title: 'Balloon CG Visuals | Premium Event Visual Solutions',
    description: 'Transform your events into breathtaking visual experiences.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neo-void text-foreground antialiased">
        <AnimatedBackground />
        <CustomCursor />
        <Navbar />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}