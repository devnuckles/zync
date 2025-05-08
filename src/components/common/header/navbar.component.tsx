"use client";

import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import DynamicButton from "../dynamic.button.component";

export default function NavBar() {
    return (
        <nav className="p-4 flex justify-end space-x-4">
            <SignedOut>
                <DynamicButton
                    btnText="Sign In"
                    btnType="primary"
                    btnUrl="/sign-in"
                />
                <DynamicButton
                    btnText="Sign Up"
                    btnType="outline"
                    btnUrl="/sign-up"
                />
            </SignedOut>
            <SignedIn>
                <UserButton afterSignOutUrl="/" />
            </SignedIn>
        </nav>
    );
}
