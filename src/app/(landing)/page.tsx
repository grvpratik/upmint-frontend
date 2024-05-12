import React from "react";
import NavDesktop from "src/components/nav/nav-desktop";
import NavMobile from "src/components/nav/nav-mobile";
import NftTags from "src/components/nft-section/tag-filter";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "src/components/ui/tabs";

import { landingContent as content } from "src/lib/site.info";
import { Button } from "src/components/ui/button";
import getTags from "src/actions/getTags";
import getProjects, { data } from "src/actions/getProjects";

import Link from "next/link";
const LandingPage = async () => {
	const tags =  getTags();
	const projectArray =  getProjects({});
	const soonBadgeClass =
		"absolute bg-blue-500 text-blue-100 leading-none px-2 pb-0.5 text-xs font-semibold rounded-full -top-3 -right-5 ";

	return (
		<>
			<NavMobile />
			<NavDesktop />

			<main className="flex flex-col py-32 p-4 rounded-lg root-container gap-4 relative ">
				<span>
					<Link
						href="#"
						className="inline-flex justify-between items-center py-1 px-1 pr-4  text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
						role="alert"
					>
						<span className="text-xs bg-orange-600 rounded-full  text-white px-2 aspect-square py-1 mr-3 font-semibold">
							P
						</span>{" "}
						<span className="text-sm font-medium">Vote us on Producthunt</span>
						<svg
							className="ml-2 w-4 h-4"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
								clipRule="evenodd"
							/>
						</svg>
					</Link>
				</span>
				<div className="font-extrabold uppercase text-3xl md:text-5xl lg:text-7xl font-sans flex flex-col gap-2">
					{Object.entries(content.headings).map(([key, value]) => (
						<span key={key}>{value}</span>
					))}
				</div>
				<p className=" lg:font-semibold text-sm lg:text-base text-muted-foreground text-balance max-w-screen-sm ">
					{content.description}
				</p>
				<span className=" flex lg:flex-row flex-col gap-4">
					<Button
						className=" lg:text-lg font-semibold"
						size="lg"
						variant="primary"
					>
						Create account
					</Button>
					<Button
						className=" lg:text-lg font-semibold"
						size="lg"
						variant="outline"
					>
						view plans
					</Button>
				</span>

				{/* <ModeToggle /> */}
			</main>
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
						<NftTags tagArray={tags} projectArray={data} />
					</TabsContent>

					<TabsContent value="Coins">Change your Coins here.</TabsContent>
					<TabsContent value="Giveaway">Change your givaways here.</TabsContent>
				</Tabs>
			</main>
		</>
	);
};

export default LandingPage;
