import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from '@/components/CustomCursor';

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
      <body className="antialiased cursor-none">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}