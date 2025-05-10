"use client";

import Logo from "../logo.component";
import FooterNav from "./footer.nav.component";
import SocialMedia from "../social.media.component";
import {
    footerNavCompanyLinks,
    footerNavProductLinks,
} from "@/utils/footer.data";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="container mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div className="space-y-4">
                    <Logo />
                    <p className="text-gray-600">
                        Instantly connect with zero latency. Seamless
                        peer-to-peer video chat for creators, teams, and
                        friends.
                    </p>
                </div>

                <FooterNav title="Product" links={footerNavProductLinks} />
                <FooterNav title="Company" links={footerNavCompanyLinks} />

                <SocialMedia />
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-200">
                <div className="container mx-auto px-6 py-4 text-center text-gray-500 text-sm">
                    &copy; {currentYear} Zync. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
