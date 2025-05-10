import Link from "next/link";
import { socialMediaLinks } from "@/utils/social.media.links.data";

const SocialMedia = () => {
    return (
        <div className="space-y-4">
            <h3 className="text-gray-900 font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
                {socialMediaLinks.map(({ href, icon: Icon, label }) => (
                    <Link
                        key={href}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                    >
                        <Icon
                            size={20}
                            className="text-gray-600 hover:text-green-500"
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SocialMedia;
