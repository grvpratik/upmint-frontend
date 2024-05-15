import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "src/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center duration-200 justify-center whitespace-nowrap  transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none  rounded-lg   shadow-[0px_2px_0px_0px_#FFFFFF40_inset]  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none font-medium ring-offset-background  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ",
	{
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground hover:bg-primary/90",
				primary: " bg-blue-500  text-white hover:bg-blue-500/90",
				destructive:
					"bg-destructive text-destructive-foreground hover:bg-destructive/90",
				outline:
					"border border-input bg-background hover:bg-accent hover:text-accent-foreground",
				secondary:
					"bg-secondary text-secondary-foreground hover:bg-secondary/80",
				ghost: "hover:bg-accent hover:text-accent-foreground",
				link: "text-primary underline-offset-4 hover:underline",
			},
			size: {
				default: "h-9 px-4 py-2 ",
				sm: "h-9 rounded-md px-3",
				lg: "h-11 rounded-md px-6 ",
				icon: "h-10 w-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);
Button.displayName = "Button";

export { Button, buttonVariants };
// depth effect button
// "inline-flex items-center duration-200 justify-center whitespace-nowrap  transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none  rounded-lg   shadow-[0px_2px_0px_0px_#FFFFFF40_inset]  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none font-medium ring-offset-background  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ",

//base
//inline-flex items-center justify-center whitespace-nowrap  transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none  rounded-lg   shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none font-medium ring-offset-background  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 