"use client";
import React from "react";
import { Tabs, TabsList, TabsTrigger } from "src/components/ui/tabs";
import { FireSVG, StarsSVG } from "../svg/icon";
import { Separator } from "../ui/separator";
import { toPascalCase } from "src/lib/utils";
import { useQuery } from "@tanstack/react-query";
import getProjects from "src/actions/getCollection";
import NftsList from "./nft-list";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

interface TagsProps {
	id: string;
	name: string;
}
const tabTriggerClass =
	"font-semibold  mx-0 flex items-center gap-1 hover:bg-accent px-4 py-2 rounded-full   data-[state=inactive]:border  data-[state=inactive]:border-solid data-[state=inactive]:border-primary/20  data-[state=active]:font-bold data-[state=active]:text-white data-[state=active]:bg-primary";
const NftTags = ({ tagArray }: any) => {
	const [tabValue, setTabValue] = React.useState<string>("");

	const [tagResult, setTagResult] = React.useState([]);

	const { isLoading, error } = useQuery({
		queryKey: ["tags", tabValue],
		queryFn: async () => {
			// Return an empty array if searchValue is empty

			try {
				const result = await getProjects({
					tags: tabValue,
					items: 10,
				});

				setTagResult(result.result || []); // Set search result, ensure result is an array
				return result;
			} catch (error) {
				console.error("Error fetching data:", error);
				return []; // Throw the error so that it's caught by the error handler
			}
		},
	});

	return (
		<>
			<Tabs onValueChange={(value) => setTabValue(value)}>
				<ScrollArea >
					<TabsList className="flex items-center gap-2 pb-4 ">
						<TabsTrigger className={tabTriggerClass} value="new">
							<StarsSVG className="h-4 w-4 " /> <span>New</span>
						</TabsTrigger>
						<TabsTrigger className={tabTriggerClass} value="trending">
							<FireSVG className="h-4 w-4" />
							<span>Trending</span>
						</TabsTrigger>
						<Separator orientation="vertical" className="h-6 " />
						{tagArray &&
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
					<ScrollBar orientation="horizontal"  className="lg:hidden"/>
				</ScrollArea>
			</Tabs>
			<NftsList tagResult={tagResult} cardLoading={isLoading} />
		</>
	);
};

export default NftTags;
