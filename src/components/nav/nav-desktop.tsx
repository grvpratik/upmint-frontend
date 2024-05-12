import Link from "next/link";
import React from "react";
import { Search } from "lucide-react";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "src/components/ui/dialog";

import NavLinks from "./nav-links";

import ProfileDropdown from "../ui/profile-dropdown";
import SearchOutput from "src/components/Search/search-output";
const NavDesktop = () => {
	return (
		<nav className=" top-0 sticky w-full px-4 h-16 items-center hidden lg:block  lg:px-16 z-40  bg-background ">
			<div className="grid py-3  grid-cols-3 w-full  max-h-18  gap-2 lg:gap-0 font-medium">
				<div className="flex gap-8 items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-8 w-8"
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
					<NavLinks />
				</div>
				<div className=" hidden lg:flex w-full ">
					<Dialog>
						<DialogTrigger className=" w-full flex-1">
							<div className=" rounded-full group flex justify-between  items-center bg-accentx bg-input/70  fshadow-inner transition-background  hover:bg-border cursor-poy ">
								<div className="flex w-full gap-1.5 py-2.5 pl-3.5 items-center ">
									{" "}
									<Search className="h-4 ml-1  w-4 text-foreground/70" />
									<div className=" text-muted-foreground font-semibold line-clamp-1   text-sm leading-relaxed tracking-wide">
										Search nfts,coins etc..
									</div>
								</div>
								<kbd className="min-h-[20px] opacity-0 mr-4  group-hover:opacity-100 transition-opacity inline-flex justify-center items-center py-0.5 px-1 bg-background border border-gray-200 font-mono text-xs text-gray-800 rounded shadow-[0px_2px_0px_0px_rgba(0,0,0,0.08)]  dark:border-gray-700 dark:text-gray-200 dark:shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)]">
									tab
								</kbd>
							</div>
						</DialogTrigger>
						<DialogContent className=" h-screen  rounded-3xl  overflow-hidden p-0  ">
							<div className="w-full">
								<SearchOutput />
							</div>
						</DialogContent>
					</Dialog>
				</div>
				<div className="lg:flex justify-end gap-8 items-center hidden">
					<Link href="/blogs">Resources</Link>
					<Link href="/blogs">Blogs</Link>
					<ProfileDropdown />
				</div>
			</div>
		</nav>
	);
};

export default NavDesktop;
