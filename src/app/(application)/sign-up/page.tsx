"use client";

import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-50">
            <SignUp routing="path" path="/sign-up" />
        </div>
    );
}
