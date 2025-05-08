import DynamicButton from "@/components/common/dynamic.button.component";

const HeroLeft = () => {
    return (
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 relative z-10">
            <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight text-black">
                Experience{" "}
                <span className="text-brand-primary inline-block">
                    Next-Gen
                </span>{" "}
                Streaming
            </h1>
            <p className="max-w-md mx-auto lg:mx-0 text-lg text-gray-800">
                Instantly connect with zero latency. Seamless peer-to-peer video
                chat for creators, teams, and friends.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <DynamicButton
                    btnText="Learn More"
                    btnType="outline"
                    btnUrl="/about"
                />
                <DynamicButton
                    btnText="Get Started"
                    btnType="primary"
                    btnUrl="/sign-in"
                />
            </div>
        </div>
    );
};

export default HeroLeft;
