export interface FooterNavItem {
    href: string;
    label: string;
}

export interface FooterNavProps {
    title: string;
    links: FooterNavItem[];
}
