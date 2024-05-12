"use client";

import React from "react";
import { Search } from "lucide-react";
import {
	Sheet,
	SheetContent,

	SheetTrigger,
} from "src/components/ui/sheet";

import SearchOutput from "src/components/Search/search-output";
import ProfileDropdown from "src/components/ui/profile-dropdown";


const NavMobile = () => {
	return (
		<>
			<div className="flex top-0  z-50  sticky  gap-3 items-center mt-2  root-container lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-7 w-7"
					fill="#000"
					version="1.1"
					viewBox="0 0 512 512"
					xmlSpace="preserve"
				>
					<g>
						<path
							fill="#FFB04C"
							d="M0 163.947L257.322 152.508 512 163.947 256 462.792z"
						></path>
						<path
							fill="#FFDB6C"
							d="M512 163.947L0 163.947 81.714 49.208 430.286 49.208z"
						></path>
						<path
							fill="#FFC866"
							d="M430.286 49.208L430.286 163.947 512 163.947z"
						></path>
						<path
							fill="#F7A05E"
							d="M429.83 164.73L256 462.792l253.767-296.238c.877-1.025.15-2.607-1.2-2.607h-77.374c-.561 0-1.081.298-1.363.783z"
						></path>
						<path
							fill="#FFDB6C"
							d="M81.714 49.208L430.286 49.208 256 462.792z"
						></path>
						<path
							fill="#FFF2BB"
							d="M381.935 163.947L430.286 49.208 81.714 49.208 130.065 163.947z"
						></path>
						<path
							fill="#FFEB8A"
							d="M130.065 163.947L256 49.208 381.935 163.947z"
						></path>
					</g>
				</svg>

				<Sheet>
					<SheetTrigger className=" flex-1">
						<div className=" rounded-full  flex justify-between  items-center bg-accentx bg-input/70  fshadow-inner transition-background  hover:bg-border cursor-poy ">
							<div className="flex w-full gap-1.5 py-2 pl-3 items-center  text-white  ">
								{" "}
								<Search className="h-4  w-4 text-foreground/70" />
								<div className="  text-muted-foreground font-semibold line-clamp-1  text-sm ">
									Search nfts , coins
								</div>
							</div>
						</div>
					</SheetTrigger>
					<SheetContent className="flex flex-col w-full ">
						<SearchOutput />
					</SheetContent>
				</Sheet>
				<ProfileDropdown />
			</div>
		</>
	);
};

export default NavMobile;
