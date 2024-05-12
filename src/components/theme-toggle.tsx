"use client";

import * as React from "react";
import { MoonIcon, MoonStar, SunIcon } from "lucide-react";

import { useTheme } from "next-themes";

import { Button } from "src/components/ui/button";

import { Switch } from "./ui/switch";

export function ModeToggle() {
	const { setTheme, theme } = useTheme();
	const modeChange = () => {
		if (theme === "dark") {
			setTheme("light");
		} else {
			setTheme("dark");
		}
	};
	return (
		<>
			<div
				onClick={modeChange}
				className="relative flex cursor-default select-none items-center  hover:bg-accent rounded-md px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 gap-2   text-muted-foreground hover:text-foreground   mt-1.5"
			>
				<span className=" flex items-center justify-center">
					<MoonStar className=" h-6 w-6 p-0.5" />
				</span>
				<span className="">Dark Mode</span>
				<Switch className=" scale-75 ml-auto" checked={theme === "dark"} />
			</div>
		</>
	);
}
