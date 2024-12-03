import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Header } from '@/components/header';
import { Sidebar } from '@/components/sidebar';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Best team ever!',
  description: 'T3 Layover Hackathon',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} antialiased font-[family-name:var(--font-geist-sans)] bg-gray-900`}>
        <div className='h-svh font-[family-name:var(--font-geist-sans)]'>
          <Header />
          <div className='flex h-[calc(100%-82px)]'>
            <Sidebar />
            <main className='bg-white w-full h-full rounded-ss-[40px] rounded-es-[40px]'>
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
