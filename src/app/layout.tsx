import ClientLayout from '@/app/components/layout/ClientLayout';
import './styles/globals.scss';

export const metadata = {
  title: 'Victoire Schubert – Creative Developer',
  description:
    'A creative frontend portfolio built with Next.js and TypeScript',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
