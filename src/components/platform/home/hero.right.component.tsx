import DynamicButton from "@/components/common/dynamic.button.component";
import Image from "next/image";

const HeroRight = () => {
    return (
        <div className="w-full lg:w-1/2 mb-12 lg:mb-0 relative z-10">
            <div className="relative w-full h-full lg:h-90">
                <Image
                    src={"/asset/hero-image.png"}
                    fill
                    alt="hero image"
                    className="transform -scale-x-100 animate-scale"
                />
            </div>
        </div>
    );
};

export default HeroRight;
