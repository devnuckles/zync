import Link from "next/link";
import { FooterNavProps } from "@/types/components/common/footer.nav.interface";

export default function FooterNav({ title, links }: FooterNavProps) {
    return (
        <nav aria-label={title} className="space-y-2">
            <h3 className="text-gray-900 font-semibold">{title}</h3>
            <ul className="mt-4 space-y-2 text-gray-600">
                {links.map(
                    ({ href, label }: { href: string; label: string }) => (
                        <li key={href}>
                            <Link href={href} className="hover:text-green-500">
                                {label}
                            </Link>
                        </li>
                    )
                )}
            </ul>
        </nav>
    );
}
