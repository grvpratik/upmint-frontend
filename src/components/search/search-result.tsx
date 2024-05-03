"use client";
import React, { useState } from "react";

import SearchInput from "./search-input";

import { useQuery } from "@tanstack/react-query";
import getProjects from "src/actions/getCollection";

import SearchCardNft from "./search-card-nft";
import { ScrollArea } from "../ui/scroll-area";

const SearchResult = () => {
	const [SearchResult, setSearchResult] = useState([]);
	const [searchValue, setSearchValue] = useState<string>("");

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
			<SearchInput setSearch={setSearchValue} />
			{isLoading && !error && (
				<div className="h-40 flex items-center justify-center">
					<div aria-label="Loading..." role="status">
						<svg
							className="animate-spin w-6 h-6 fill-slate-800"
							viewBox="3 3 18 18"
						>
							<path
								className="opacity-20"
								d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
							></path>
							<path d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"></path>
						</svg>
					</div>
				</div>
			)}
			{error && <div>Error fetching data: {error.message}</div>}
			{searchValue.length > 0 &&
				SearchResult.length === 0 &&
				!isLoading &&
				!error && <div>No results found</div>}
			{!isLoading && SearchResult.length > 0 && searchValue && (
				<ScrollArea className="flex flex-col gap-1 h-full  bg-background max-h-80 overflow-y-auto z-50 p-0 rounded overflow-hidden">
					{SearchResult.map((result: any, index) => (
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

export default SearchResult;
