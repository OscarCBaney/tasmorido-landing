import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '¿Tas Morido? - Dead Man\'s Switch Safety App',
  description: 'A dead man\'s switch app for LatAm. Check in regularly, and if you miss a deadline, we\'ll alert your emergency contact.',
  viewport: 'width=device-width, initial-scale=1',
  keywords: ['safety', 'check-in', 'emergency', 'alert', 'latam'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#1a1a2e" />
      </head>
      <body>{children}</body>
    </html>
  );
}
