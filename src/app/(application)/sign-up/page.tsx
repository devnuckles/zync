"use client";

import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
    return (
        <div className="flex items-center justify-center py-3">
            <SignUp routing="path" path="/sign-up" />
        </div>
    );
}
