"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "lucide-react";

import { useTheme } from "next-themes";

import { Button } from "src/components/ui/button";

import { Switch } from "./ui/switch";

export function ModeToggle() {
	const { setTheme, theme } = useTheme();
	function modeChange() {
		if (theme === "dark") {
			setTheme("light");
		} else {
			setTheme("dark");
		}
	}
	return (
		<Switch
			className=" ml-auto"
			checked={theme === "dark"}
			onCheckedChange={modeChange}
			
		/>
	);
}
