"use client";
// Importing necessary modules and components from React and custom sources
import React from "react";
import { useQuery } from "@tanstack/react-query";
import getProjects from "src/actions/getProjects";

import { Tabs, TabsList, TabsTrigger } from "src/components/ui/tabs";
import { FireSVG, StarsSVG } from "../svg/icon";
import { Separator } from "../ui/separator";
import { toPascalCase } from "src/lib/utils";
import NftsList from "./nft-list";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { Project } from "../../../types/root";
import { Button } from "../ui/button";

interface NftTagsProps {
	blockchain?: string;
	tagArray: any;
	projectArray: Project[];
	
}
// Defining the type for tags
interface TagsProps {
	id: string;
	name: string;
}

// Defining the CSS class for tab triggers
const tabTriggerClass =
	"font-semibold  mx-0 flex items-center gap-1 hover:bg-accent px-4 py-2 rounded-full   data-[state=inactive]:border  data-[state=inactive]:border-solid data-[state=inactive]:border-primary/20  data-[state=active]:font-bold data-[state=active]:text-white data-[state=active]:bg-primary";

// Functional component to display NFT tags and related projects
const NftTags = ({
	tagArray,
	blockchain = "all",
	projectArray,
}: NftTagsProps) => {
	// State variables for managing tab value and projects by tag
	const [tabValue, setTabValue] = React.useState<string>("");
	const [projectsByTag, setProjectsByTag] = React.useState(projectArray || []);

 
	const { isLoading, error } = useQuery({
		queryKey: ["tags", tabValue],
		queryFn: async () => {
			// Fetch projects based on tag value and blockchain
			const network = blockchain;
			const query = { network };
			try {
				let result;
				// Fetch projects based on blockchain type
				if (blockchain === "all") {
					result = await getProjects({});
				} else {
					result = await getProjects(query);
				}
				// Update projects by tag
				setProjectsByTag(result.result || []);
			} catch (error) {
				console.error("Error fetching data:", error);
				return []; // Return empty array in case of error
			}
		},
	});
console.log(error)
	return (
		<>
			{" "}
			{/* <div className="relative max-h-screen">
				<div className="absolute inset-0  from-background to-transparent bg-gradient-to-t z-30 flex items-center justify-center h-full">
					<Button variant='primary'>Sign up</Button>
				</div> */}
				{/* Tabs component for displaying different categories */}
				<Tabs onValueChange={(value) => setTabValue(value)}>
					<ScrollArea>
						{/* Tabs list for different categories */}
						<TabsList className="flex items-center gap-2 pb-4 ">
							{/* Default tabs for 'New' and 'Trending' */}
							<TabsTrigger className={tabTriggerClass} value="new">
								<StarsSVG className="h-4 w-4 " /> <span>New</span>
							</TabsTrigger>
							<TabsTrigger className={tabTriggerClass} value="trending">
								<FireSVG className="h-4 w-4" />
								<span>Trending</span>
							</TabsTrigger>
							{/* Separator between default tabs and tag tabs */}
							<Separator orientation="vertical" className="h-6 " />
							{/* Mapping through tagArray to display custom tags */}
							{tagArray.length &&
								tagArray.map((tag: TagsProps) => (
									<TabsTrigger
										key={tag.id}
										className={tabTriggerClass}
										value={tag.name}
									>
										<span>{toPascalCase(tag.name)}</span>
									</TabsTrigger>
								))}{" "}
						</TabsList>
						{/* Horizontal scrollbar */}
						<ScrollBar orientation="horizontal" />
					</ScrollArea>
				</Tabs>
				{/* Component to display NFT list based on selected tag */}

				<NftsList projectsByTag={projectsByTag} cardLoading={isLoading} />
			{/* </div> */}
		</>
	);
};

export default NftTags;
