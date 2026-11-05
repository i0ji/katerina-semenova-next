import type { Metadata } from 'next';
import Metrics from '@/services/metrics';

import Providers from 'services/provider';
import './global.scss';

export const metadata: Metadata = {
  title: 'Katerina Semenova',
  description: 'Graphic designer | Katerina Semenova | ',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try { var savedTheme = localStorage.getItem('katerina-theme'); var initialTheme = savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'); document.documentElement.classList.add('theme-' + initialTheme); } catch (e) { document.documentElement.classList.add(matchMedia('(prefers-color-scheme: dark)').matches ? 'theme-dark' : 'theme-light'); }` }} />
      </head>
      <body>
        <Metrics />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
