"use client";

import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function NavBar() {
    return (
        <nav className="p-4 flex justify-end space-x-4">
            <SignedOut>
                <Link href="/sign-in" className="underline">
                    Sign In
                </Link>
                <Link href="/sign-up" className="underline">
                    Sign Up
                </Link>
            </SignedOut>
            <SignedIn>
                <UserButton afterSignOutUrl="/" />
            </SignedIn>
        </nav>
    );
}
