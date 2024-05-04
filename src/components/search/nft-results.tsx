"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import { useQuery } from "@tanstack/react-query";
import getProjects from "src/actions/getCollection";

import { Card, CardContent } from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";
import { Skeleton } from "../ui/skeleton";

interface SearchCardNftProps {
	name: string;
	imageUrl: string;
	blockchain: string;
	slug: string;
}

const SearchCardNft = ({
	name,
	imageUrl,
	blockchain,
	slug,
}: SearchCardNftProps) => {
	return (
		<Link href={`/mints/${slug}`}>
			<Card>
				<CardContent className="flex items-center gap-2 py-2 px-1 hover:bg-accent rounded-lg overflow-hidden">
					<div className="relative h-10 w-10  flex-shrink-0 rounded-2xl overflow-hidden">
						<Image
							className=" object-cover  aspect-square "
							src={imageUrl}
							alt={name}
							fill
						/>
					</div>
					<div className="flex flex-col gap-1">
						<div className="font-semibold text-sm">{name}</div>{" "}
						<p className="text-xs text-muted-foreground line-clamp-1 leading-none">
							{blockchain}
						</p>
					</div>
				</CardContent>
			</Card>
		</Link>
	);
};

const NftResults = ({ searchValue }: { searchValue: string }) => {
	const [SearchResult, setSearchResult] = React.useState([]);
	const { isLoading, error } = useQuery({
		queryKey: ["search", searchValue],
		queryFn: async () => {
			if (!searchValue) return []; // Return an empty array if searchValue is empty

			try {
				const result = await getProjects({
					search: searchValue,
					items: 10,
				});

				setSearchResult(result.result || []); // Set search result, ensure result is an array
				return result;
			} catch (error) {
				console.error("Error fetching data:", error);
				return []; // Throw the error so that it's caught by the error handler
			}
		},
	});
	return (
		<>
			{error && <div>Error fetching data: {error.message}</div>}
			{searchValue.length > 0 &&
				SearchResult.length === 0 &&
				!isLoading &&
				!error && <div>No results found</div>}
			{isLoading && !error && (
				<div className="gap-2 flex  flex-col">
					{Array.from({ length: 5 }).map((_, index) => (
						<div key={index} className="flex items-center space-x-4">
							<Skeleton className="h-12 w-12 rounded-2xl" />
							<div className="space-y-2">
								<Skeleton className="h-4 w-[450px]" />
								<Skeleton className="h-4 w-[400px]" />
							</div>
						</div>
					))}
				</div>
			)}
			{!isLoading && SearchResult.length > 0 && searchValue && (
				<ScrollArea className="flex flex-col gap-1 h-full  bg-background  overflow-y-auto z-50 p-0 rounded overflow-hidden">
					{SearchResult.map((result: any) => (
						<div className="w-full" key={result.id}>
							<SearchCardNft
								name={result.name}
								imageUrl={result.bannerUrl}
								blockchain={result.blockchain}
								slug={result.slugId}
							/>
						</div>
					))}
				</ScrollArea>
			)}
		</>
	);
};

export default NftResults;
