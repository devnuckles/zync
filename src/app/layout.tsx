import "./globals.css";

import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import { Geist_Mono } from "next/font/google";

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Zync",
    description: "Sync with zero latency",
    icons: {
        icon: "/brand/icon-zync.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                suppressHydrationWarning
                className={`${geistMono.variable} antialiased`}
            >
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
