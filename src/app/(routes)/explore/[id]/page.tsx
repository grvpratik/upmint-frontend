import React from "react";

import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "src/components/ui/tabs";

import getProjectbyTags from "src/actions/getProjectByTags";
import getTags from "src/actions/getTags";
import getProjects from "src/actions/getProjects";
import NftTags from "src/components/nft-section/tag-filter";
import { notFound } from "next/navigation";
import { isSupportedBlockchain } from "src/lib/utils";

const NetworkPage = async ({ params }: { params: { id: string } }) => {
	let network;
	if (isSupportedBlockchain(params.id)) {
		network = params.id;
	} else {
		return notFound();
	}

	const tags = await getTags();
	const ProjectArray = await getProjects({
		network: network,
	});
	console.log(ProjectArray, "projectarray");
	console.log(tags, "tags");
	const soonBadgeClass =
		"absolute bg-blue-500 text-blue-100 leading-none px-2 pb-0.5 text-xs font-semibold rounded-full -top-3 -right-5 ";

	return (
		<>
			<main className=" root-container flex flex-col">
				<h1 className="text-2xl  font-extrabold tracking-tight lg:text-5xl  my-2 ">
					Explore
				</h1>
				<Tabs defaultValue="Nfts">
					<TabsList className="flex gap-3 font-semibold my-4 ">
						<TabsTrigger className=" text-sm lg:text-base" value="Nfts">
							Nfts
						</TabsTrigger>
						<TabsTrigger
							className="relative text-sm lg:text-base"
							disabled
							value="Coins"
						>
							Coins
							<span className={soonBadgeClass}>soon</span>
						</TabsTrigger>
						<TabsTrigger
							className=" relative text-sm lg:text-base"
							disabled
							value="Giveaways"
						>
							Giveaways
							<span className={soonBadgeClass}>soon</span>
						</TabsTrigger>
					</TabsList>
					<TabsContent value="Nfts">
						<NftTags
							tagArray={tags}
							blockchain={network}
							projectArray={ProjectArray}
						/>{" "}
					</TabsContent>

					<TabsContent value="Coins">Change your Coins here.</TabsContent>
					<TabsContent value="Giveaway">Change your givaways here.</TabsContent>
				</Tabs>
			</main>
		</>
	);
};

export default NetworkPage;
