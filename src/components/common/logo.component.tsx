import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <Link href={"/"} className="flex">
            <Image
                priority
                alt="logo"
                width={92}
                height={40}
                src={"/brand/logo-zync.png"}
            />
        </Link>
    );
};

export default Logo;
