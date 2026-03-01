import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import BackgroundSystem from '@/components/BackgroundSystem';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'CoreAxis Digital | Revenue Infrastructure',
  description: 'We build conversion-focused websites with automation built in.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className="bg-[#07080C] text-white font-sans antialiased selection:bg-blue-500/30 selection:text-white" suppressHydrationWarning>
        <BackgroundSystem />
        {children}
      </body>
    </html>
  );
}
