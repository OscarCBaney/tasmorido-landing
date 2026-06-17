import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '¿Tas Morido? - Dead Man\'s Switch Safety App',
  description: 'A dead man\'s switch app for LatAm. Check in regularly, and if you miss a deadline, we\'ll alert your emergency contact.',
  keywords: ['safety', 'check-in', 'emergency', 'alert', 'latam'],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1a1a2e',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
