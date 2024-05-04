import type { Metadata } from "next";

import "src/styles/globals.css";

import { boldSans, fontSans, primarySans } from "src/lib/font";
import { cn } from "src/lib/utils";
import QueryProvider from "src/provider/query-provider";


export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	
	return (
		<html lang="en">
			<body className={cn("font-sans", fontSans.variable,boldSans.variable,primarySans.variable)}>
				<QueryProvider >
					{children}
				</QueryProvider>
			</body>
		</html>
	);
}
