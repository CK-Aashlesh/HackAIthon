import React from 'react';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import './globals.css';

export const metadata = {
    title: 'HACK[AI]THON 2026 | National Level AI Hackathon at Joy University',
    description: 'Join HACK[AI]THON 2026, a premier 24-hour national Artificial Intelligence hackathon organized by Sphere Hive at Joy University, Tamil Nadu. Push the limits of AI and build innovative solutions.',
    keywords: ['Hackathon 2026', 'AI Hackathon', 'Artificial Intelligence', 'Joy University', 'Machine Learning', 'Coding Competition India', 'Tech Fest Tamil Nadu', 'Sphere Hive', '24 hour coding'],
    authors: [{ name: 'Sphere Hive' }, { name: 'Startup Lab JU' }],
    openGraph: {
        title: 'HACK[AI]THON 2026 | National Level AI Hackathon',
        description: 'Join the premier 24-hour Artificial Intelligence hackathon at Joy University, Tamil Nadu. Compete with the best minds in tech to build transformative AI solutions.',
        url: 'https://unstop.com/p/hackaithon-2026-joy-university-1675805',
        siteName: 'HACK[AI]THON 2026',
        images: [
            {
                url: '/logo.png',
                width: 1200,
                height: 630,
                alt: 'HACK[AI]THON 2026 Banner',
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'HACK[AI]THON 2026 | National Level AI Hackathon',
        description: 'Join the premier 24-hour Artificial Intelligence hackathon at Joy University, Tamil Nadu. Compete with the best minds in tech.',
        images: ['/logo.png'],
    },
    icons: {
        icon: [
            { url: '/logo.ico', sizes: '32x32' },
            { url: '/logo.ico', sizes: 'any' }
        ],
        apple: '/logo.ico',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="min-h-screen bg-samurai-black text-white font-sans selection:bg-samurai-orange selection:text-white relative flex flex-col">
                {/* Side Rails */}
                <div className="fixed bottom-10 left-10 [writing-mode:vertical-rl] rotate-180 text-[10px] tracking-[0.3em] uppercase text-white/20 z-50 pointer-events-none hidden lg:block">
                    DESIGNED FOR DISCIPLINE
                </div>
                <div className="fixed bottom-10 right-10 [writing-mode:vertical-rl] text-[10px] tracking-[0.3em] uppercase text-white/20 z-50 pointer-events-none hidden lg:block">
                    BUILT FOR INNOVATION
                </div>

                <Navbar />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
