import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '¿Tas Morido? - App de reporte de seguridad',
  description: 'Una app de seguridad para México y Latinoamérica. Reporta regularmente que estás bien, y si no lo haces, alertaremos automáticamente a tu contacto de emergencia vía WhatsApp.',
  keywords: ['seguridad', 'check-in', 'emergencia', 'alerta', 'latam', 'whatsapp', 'mexico'],
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
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
