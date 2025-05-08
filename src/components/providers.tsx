"use client";

import { ClerkProvider } from "@clerk/nextjs";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider
            publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}
            signInUrl={process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL!}
            signUpUrl={process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL!}
        >
            {children}
        </ClerkProvider>
    );
}
