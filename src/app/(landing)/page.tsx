import React from "react";
import NavDesktop from "src/components/nav/nav-desktop";
import NavMobile from "src/components/nav/nav-mobile";
import NftTags from "src/components/nft-section/nft-tags-select";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "src/components/ui/tabs";
import ServerNftTags from "src/components/nft-section/server-nft-tags";

import { landingContent as content } from "src/lib/site.info";
import { Button } from "src/components/ui/button";
const LandingPage = () => {
	const soonBadgeClass =
		"absolute bg-blue-500 text-blue-100 leading-none px-2 pb-0.5 text-xs font-semibold rounded-full -top-3 -right-5 ";

	return (
		<>
			<NavMobile />
			<NavDesktop />

			<main className="flex flex-col py-32 p-4 rounded-lg root-container gap-4 relative ">
				<div className="font-extrabold uppercase text-3xl md:text-5xl lg:text-7xl font-secondary flex flex-col gap-2">
					{Object.entries(content.headings).map(([key, value]) => (
						<span key={key}>{value}</span>
					))}
				</div>
				<p className=" text-xs sm:text:sm lg:text-base text-muted-foreground text-balance max-w-screen-sm ">
					{content.description}
				</p>
				<span>
					<button
						className="select-none font-secondary font-bold rounded-lg bg-blue-500 py-3 px-6 text-center align-middle text-base text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
						type="button"
					>
						{content.ctaText}
					</button>
					{/* <Button
						variant="primary"
						size="lg"
						className=" font-secondary font-bold rounded-lg py-6 "
					>
						{content.ctaText}
					</Button> */}
					{/* <Button
						variant="primary"
						size="sm"
						className="  font-semibold  "
					>
						{content.ctaText}
					</Button> */}
				</span>
			</main>
			<main className=" root-container flex flex-col">
				<h1 className="text-2xl  font-extrabold tracking-tight lg:text-5xl  my-2 font-secondary">
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
						<ServerNftTags />
					</TabsContent>

					<TabsContent value="Coins">Change your Coins here.</TabsContent>
					<TabsContent value="Giveaway">Change your givaways here.</TabsContent>
				</Tabs>
			</main>
		</>
	);
};

export default LandingPage;
