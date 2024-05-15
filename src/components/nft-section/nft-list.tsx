import React from "react";
import NftCard from "./nft-card";
import { Project } from "../../../types/root";
import { Skeleton } from "../ui/skeleton";
import Link from "next/link";
interface NftListProps {
	cardLoading: boolean;
	projectsByTag: any;
}
export const NftCardLoading = () => {
	return (
		<>
			{Array.from({ length: 6 }).map((_, index) => (
				<div
					key={index}
					className="card  w-full cursor-poy group flex flex-col gap-1  rounded-2xl  p-0.5"
				>
					<div className="relative rounded-2xl min-w-min  overflow-hidden aspect-video w-full bg-cover bg-no-repeat   transition">
						<Skeleton className="absolute inset-0" />
					</div>
					<div className="flex gap-4 items-center p-1">
						<Skeleton className="rounded-sm h-8 w-8 aspect-square" />

						<span className=" flex flex-col">
							<Skeleton className="h-4 w-40" />
						</span>
					</div>
				</div>
			))}
		</>
	);
};

const NftsList = ({ projectsByTag, cardLoading }: NftListProps) => {
	return (
		<main className=" grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3  gap-6 ">
			{cardLoading && <NftCardLoading />}
			{!!projectsByTag.length &&
				!cardLoading &&
				projectsByTag.map((result: Project) => (
					<Link href={`/project/${result.nameSlug}`} key={result.id}>
						<NftCard
							name={result.name}
							imageUrl={result.imageUrl}
							bannerUrl={result.bannerUrl}
						/>
					</Link>
				))}
			{!!!projectsByTag.length && !cardLoading && <div>not found</div>}
		</main>
	);
};

export default NftsList;
 