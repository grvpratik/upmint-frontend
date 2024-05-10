import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function toPascalCase(string: string) {
	return `${string}`
		.toLowerCase()
		.replace(new RegExp(/[-_]+/, "g"), " ")
		.replace(new RegExp(/[^\w\s]/, "g"), "")
		.replace(
			new RegExp(/\s+(.)(\w*)/, "g"),
			($1, $2, $3) => `${$2.toUpperCase() + $3}`
		)
		.replace(new RegExp(/\w/), (s) => s.toUpperCase());
}

// Function to check if the given ID is "bitcoin", "ethereum", or "solana"
export const isSupportedBlockchain = (id: string): boolean => {
	// List of supported blockchain IDs
	const supportedBlockchains: string[] = ["bitcoin", "ethereum", "solana"];

	// Check if the provided ID is in the list of supported blockchains
	return supportedBlockchains.includes(id);
};
