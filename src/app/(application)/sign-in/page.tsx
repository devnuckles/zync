"use client";

import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
    return (
        <div className="flex items-center justify-center py-3">
            <SignIn routing="path" path="/sign-in" />
        </div>
    );
}
