
'use client';

import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/common/header';
import { Footer } from '@/components/common/footer';
import { Toaster } from '@/components/ui/toaster';
import { AiChatWidget } from '@/components/ai-chat-widget';

// Metadata needs to be exported from a server component or at the page level.
// Since we are making the layout a client component, we can't export it from here.
// It's better to move it to pages or keep a separate layout for metadata.
// For now, we will comment it out, but for production, this should be handled properly.
// export const metadata: Metadata = {
//   title: 'Streamlink Technologies Operations',
//   description: 'Powering Connectivity, Cloud & Cyber Solutions',
//   icons: {
//     icon: '/favicon.ico',
//   },
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <title>Streamlink Technologies Operations</title>
        <meta name="description" content="Powering Connectivity, Cloud & Cyber Solutions" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0a0a0a" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider>
          <div className="relative flex min-h-dvh flex-col bg-background">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
              <div className="absolute top-1/2 left-1/2 w-[60rem] h-[60rem] bg-accent-blue/20 rounded-full filter blur-3xl animate-blob-one opacity-30"></div>
              <div className="absolute top-1/2 left-1/2 w-[50rem] h-[50rem] bg-accent-yellow/20 rounded-full filter blur-3xl animate-blob-two opacity-30"></div>
            </div>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
          <AiChatWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
