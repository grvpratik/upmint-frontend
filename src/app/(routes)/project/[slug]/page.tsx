import { CalendarDays, Coins, Container, Link } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import getProjectDetails from "src/actions/getProjectDetails";

const ProjectDetailsPage = async ({ params }: { params: { slug: string } }) => {
	const data = await getProjectDetails(params.slug);
	if (!data) return notFound();
	return (
		<div className=" flex flex-col my-2 lg:my-0  root-container  gap-2">
			<div className=" relative w-full md:h-48 rounded-xl overflow-hidden  h-24 aspect-video">
				<Image src={data.bannerUrl} alt="" fill className=" object-cover" />
			</div>
			<main className=" grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				<div className="flex flex-col gap-4 p-2">
					<div className="flex gap-2 md:gap-4 items-center">
						<div className="relative flex-shrink-0 aspect-square h-12 w-12 md:h-16 md:w-16    bg-cover rounded-2xl overflow-hidden">
							<Image
								src={data.imageUrl}
								alt=""
								fill
								className=" object-cover"
							/>
						</div>
						<div className=" flex flex-col gap-1">
							<div className=" text-lg font-semibold md:text-xl md:font-bold tracking-wider leading-none">
								{data.name}
							</div>
							<div className="  leading-none">{data.nameSlug}</div>
						</div>
						<div className="ml-auto flex gap-3 p-2  items-center rounded-md bg-accent  backdrop-blur-md">
							{" "}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								className="h-6 w-6 p-0.5 "
								viewBox="0 0 20 16"
							>
								<path
									fill="currentColor"
									d="M16.93 1.38A16.491 16.491 0 0012.86.119a.062.062 0 00-.066.031c-.175.313-.37.72-.506 1.041a15.226 15.226 0 00-4.573 0A10.538 10.538 0 007.2.15a.064.064 0 00-.065-.032 16.447 16.447 0 00-4.07 1.263.058.058 0 00-.028.023C.444 5.278-.266 9.056.083 12.788a.069.069 0 00.026.046 16.584 16.584 0 004.994 2.525.065.065 0 00.07-.023c.385-.526.728-1.08 1.022-1.662a.063.063 0 00-.035-.088 10.927 10.927 0 01-1.56-.744.064.064 0 01-.007-.106c.105-.079.21-.16.31-.243a.062.062 0 01.065-.009c3.273 1.495 6.817 1.495 10.051 0a.062.062 0 01.066.008c.1.083.205.165.31.244a.064.064 0 01-.005.106c-.499.291-1.017.537-1.561.743a.064.064 0 00-.034.089c.3.582.643 1.136 1.02 1.661a.063.063 0 00.07.024 16.53 16.53 0 005.003-2.525.064.064 0 00.026-.046c.417-4.314-.699-8.061-2.957-11.383a.05.05 0 00-.026-.024zM6.684 10.516c-.985 0-1.797-.904-1.797-2.015 0-1.111.796-2.016 1.797-2.016 1.01 0 1.814.912 1.798 2.016 0 1.11-.796 2.015-1.798 2.015zm6.646 0c-.986 0-1.797-.904-1.797-2.015 0-1.111.796-2.016 1.797-2.016 1.009 0 1.813.912 1.797 2.016 0 1.11-.788 2.015-1.797 2.015z"
								></path>
							</svg>{" "}
							<svg fill="none" className="h-6 w-6 p-0.5" viewBox="0 0 24 24">
								<path
									fill="currentColor"
									d="M17.751 4h3.067l-6.7 7.201L22 21h-6.172l-4.833-5.943L5.464 21h-3.07l7.167-7.702L2 4h6.328l4.37 5.432L17.75 4zm-1.076 15.274h1.7L7.404 5.635H5.58l11.094 13.639z"
								></path>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className=" h-6 w-6 p-0.5"
								fill="none"
								viewBox="0 0 24 24"
							>
								<g stroke="currentColor" strokeWidth="2">
									<path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
									<path
										strokeLinecap="round"
										d="M12 3.056A11.97 11.97 0 0116 12a11.97 11.97 0 01-4 8.944"
									></path>
									<path
										strokeLinecap="round"
										d="M12.063 21A11.971 11.971 0 018 12c0-3.584 1.571-6.801 4.063-9"
									></path>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M3 12h18"
									></path>
								</g>
							</svg>
						</div>
					</div>
					<div>
						<div className=" font-semibold">DESCRIPTION</div>
						<div className="   text-muted-foreground  line-clamp-4">
							{data.description}
						</div>
					</div>
					<div>
						<div className="  uppercase text-lg p-2 font-semibold">
							MINT INFO
						</div>
						<div>
							<div className="flex gap-2 items-center p-1 rounded-xl">
								<span className="p-1 font-semibold flex text-sm uppercase gap-1 items-center">
									<Link className="h-4 w-4" />
									<span>blockhain:</span>
								</span>
								<span>Solana</span>
							</div>
							<div className="flex gap-2 items-center p-1 rounded-xl">
								<span className="p-1 font-semibold flex text-sm uppercase gap-1 items-center">
									<Container className="h-4 w-4" />
									<span>supply:</span>
								</span>
								<span>6000</span>
							</div>
							<div className="flex gap-2 items-center p-1 rounded-xl">
								<span className="p-1 font-semibold flex text-sm uppercase gap-1 items-center">
									<CalendarDays className="h-4 w-4" />
									<span>Mint date:</span>
								</span>
								<span>16 may 2024</span>
							</div>
							<div className="flex gap-2 items-center p-1 rounded-xl">
								<span className="p-1 font-semibold flex text-sm uppercase gap-1 items-center">
									<Coins className="h-4 w-4" />
									<span>Mint Price:</span>
								</span>
								<span>2 sol</span>
							</div>
						</div>
					</div>
				</div>
				<div className=" flex gap-2 items-center">
					<div className="flex flex-col gap-2 items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className=" h-48  w-48"
							transform="rotate(-90)"
							viewBox="-25 -25 250 250"
						>
							<circle
								cx="100"
								cy="100"
								r="90"
								fill="transparent"
								stroke="#e0e0e0"
								strokeDasharray="565.48"
								strokeWidth="16"
							></circle>
							<circle
								cx="100"
								cy="100"
								r="90"
								fill="transparent"
								stroke="#76e5b1"
								strokeDasharray="565.48"
								strokeDashoffset="118.692"
								strokeLinecap="round"
								strokeWidth="16"
							></circle>
							<text
								x="71"
								y="115"
								fill="#6bdba7"
								fontSize="52"
								fontWeight="bold"
								transform="rotate(90 98 98)"
							>
								79
							</text>
						</svg>
						<span className=" text-lg font-bold md:text-xl">Overall Score</span>
					</div>

					<div className="flex flex-col gap-4 font-bold text-base">
						<span className=" p-2">
							UTILITY : <span className=" text-yellow-500">57</span>
						</span>
						<span className=" p-2">
							{" "}
							CREDIABILITY : <span className=" text-red-500">22</span>
						</span>
						<span className=" p-2">
							POPULARILITY: <span className=" text-green-500">88</span>
						</span>
					</div>
				</div>
			</main>
		</div>
	);
};

export default ProjectDetailsPage;
