import localFont from "next/font/local";

export const fontSans = localFont({
	src: [
		{
			path: "/../../public/fonts/Satoshi-Variable.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "/../../public/fonts/Satoshi-Variable.ttf",
			weight: "500",
			style: "normal",
		},
		{
			path: "/../../public/fonts/Satoshi-Variable.ttf",
			weight: "600",
			style: "normal",
		},
		{
			path: "/../../public/fonts/Satoshi-Variable.ttf",
			weight: "700",
			style: "normal",
		},
		{
			path: "/../../public/fonts/Satoshi-Variable.ttf",
			weight: "900",
			style: "normal",
		},
	],
	variable: "--font-sans",
	weight: "400",
});
export const boldSans = localFont({
	src: "/../../public/fonts/MonaSansExpanded-ExtraBold.woff2",
	variable: "--font-bold",
	weight: "800",
});
export const primarySans = localFont({
	src: "/../../public/fonts/MonaSans-Regular.woff2",
	variable: "--font-primary",
	weight: "400",
});

