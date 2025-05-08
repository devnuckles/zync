"use client";

import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
    return (
        <div className="flex items-center justify-center">
            <SignIn routing="path" path="/sign-in" />
        </div>
    );
}
