"use client";
import React, { useState } from "react";

import SearchInput from "./search-input";

import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "src/components/ui/tabs";
import NftResults from "./nft-results";
import PostResults from "./post-results";
import SearchFeatured from "./search-featured";

const SearchResult = () => {
	const [searchValue, setSearchValue] = useState<string>("");

	return (
		<>
			<SearchInput setSearch={setSearchValue} />

			{searchValue ? (
				<div className="py-2">
					<p className="text-sm  leading-6 font-semibold my-1">
						What are you looking for?
					</p>
					<Tabs
						onValueChange={(value) => console.log(value, "VALUE")}
						defaultValue="nfts"
					>
						<TabsList>
							<TabsTrigger value="nfts">Nfts</TabsTrigger>
							<TabsTrigger value="posts">Posts</TabsTrigger>
						</TabsList>
						<TabsContent value="nfts">
							<NftResults searchValue={searchValue} />
						</TabsContent>
						<TabsContent value="posts">
							<PostResults searchValue={searchValue} />
						</TabsContent>
					</Tabs>
				</div>
			) : (
				<SearchFeatured />
			)}
		</>
	);
};

export default SearchResult;
