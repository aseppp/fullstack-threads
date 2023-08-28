import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import Navbar from '@/components/shared/Navbar';
import LeftSidebar from '@/components/shared/LeftSidebar';
import Bottombar from '@/components/shared/Bottombar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Threads',
  description: 'Created by asepp, inspired by JavaScriptMastery',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          <Navbar />

          <main className="bg-dark-4 flex flex-row">
            <LeftSidebar />

            <section className="main-container">
              <div className="w-full max-w-4xl'">{children}</div>
            </section>
          </main>

          <Bottombar />
        </body>
      </html>
    </ClerkProvider>
  );
}
