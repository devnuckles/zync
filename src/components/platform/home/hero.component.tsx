"use client";

import DynamicButton from "@/components/common/dynamic.button.component";
import HeroLeft from "./hero.left.component";
import HeroRight from "./hero.right.component";

export default function Hero() {
    return (
        <section className="relative overflow-hidden">
            <div className="container mx-auto px-6 py-24 flex flex-col-reverse lg:flex-row items-center">
                <HeroLeft />
                <HeroRight />
            </div>
        </section>
    );
}
