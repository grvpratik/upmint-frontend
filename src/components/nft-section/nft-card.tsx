import React from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface NftCardProps {
	name: string;
	imageUrl: string;
	bannerUrl: string;
}

const NftCard = ({ name, bannerUrl, imageUrl }: NftCardProps) => {
	return (
		<div className="card  w-full cursor-poy group flex flex-col gap-1  rounded-2xl  p-0.5">
			<div className="relative rounded-2xl min-w-min  overflow-hidden aspect-video w-full bg-cover bg-no-repeat   transition">
				<div className="rounded-2xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-poy absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
					<div>
						<div className=" p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
							{/* <div className="font-bold">Jessie Watsica</div> */}

							<div className="opacity-60 text-sm leading-5 ">view details</div>
						</div>
					</div>
				</div>
				<Image fill alt={name} src={bannerUrl} className=" " />{" "}
			
			</div>
			<div className="flex gap-4 items-center p-1">
				<Avatar className="rounded-sm">
					<AvatarImage src={imageUrl} />
					<AvatarFallback>{name}</AvatarFallback>
				</Avatar>
				<div className=" flex flex-col">
					<span className=" font-semibold leading-6   group-hover:underline">
						{name}
					</span>
					{/* <span className="text-sm text-muted-foreground line-clamp-1">
						{item.description}
					</span> */}
				</div>
			</div>
		</div>
	);
};

export default NftCard;
