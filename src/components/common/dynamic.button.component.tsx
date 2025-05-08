// src/components/DynamicButton.tsx

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DynamicButtonProps } from "@/types/components/dynamic.component.interface";

const DynamicButton: React.FC<DynamicButtonProps> = ({
    btnText,
    btnUrl,
    btnAction,
    btnType = "primary",
}) => {
    return (
        <>
            {btnUrl ? (
                <Button asChild variant={btnType}>
                    <Link href={btnUrl}>{btnText}</Link>
                </Button>
            ) : (
                <Button variant={btnType} onClick={btnAction}>
                    {btnText}
                </Button>
            )}
        </>
    );
};

export default DynamicButton;
