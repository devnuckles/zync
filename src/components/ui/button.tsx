import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium",
    {
        variants: {
            variant: {
                primary:
                    "bg-gradient-to-br from-brand-primary to-brand-secondary text-black shadow-xs transform transition duration-200 hover:scale-105",
                secondary:
                    "bg-transparent text-black border-2 border-brand-primary shadow-xs transform transition duration-200 hover:scale-105",
                outline:
                    "border bg-transparent shadow-xs hover:shadow-sm dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            },
            size: {
                default: "px-4 py-2",
                sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
                lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
                icon: "size-9",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "default",
        },
    }
);

function Button({
    className,
    variant,
    size,
    asChild = false,
    ...props
}: React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean;
    }) {
    const Comp = asChild ? Slot : "button";

    return (
        <Comp
            data-slot="button"
            className={cn(buttonVariants({ variant, size, className }))}
            {...props}
        />
    );
}

export { Button, buttonVariants };
