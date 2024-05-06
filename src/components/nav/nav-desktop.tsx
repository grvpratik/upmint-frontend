import Link from "next/link";
import React from "react";
import { Search } from "lucide-react";

import { ScrollArea } from "src/components/ui/scroll-area";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "src/components/ui/dialog";
import SearchResult from "../Search/search-result";
import NavLinks from "./nav-links";
import { Button } from "../ui/button";
const NavDesktop = () => {
	return (
		<nav className=" top-0 sticky w-full px-4 h-16 items-center hidden lg:block  lg:px-16 z-40  bg-background ">
			<div className="grid py-3  grid-cols-3 w-full  max-h-18  gap-2 lg:gap-0 font-medium">
				<div className="flex gap-8 items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-8 w-8"
						viewBox="0 0 20 20"
					>
						<g>
							<g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
								<g fill="#000" transform="translate(-60 -4559)">
									<g transform="translate(56 160)">
										<path d="M6.702 4412.072l5.397-7.986a.5.5 0 01.901.298v11.05a.5.5 0 01-.753.433l-5.397-3.065a.5.5 0 01-.148-.73zm14.447.73l-5.396 3.065a.5.5 0 01-.753-.432v-11.051a.5.5 0 01.901-.298l5.397 7.986a.5.5 0 01-.149.73zM15 4399.526a1.214 1.214 0 00-2 0l-8.76 12.504a1.214 1.214 0 00.36 1.772l8.4 4.824.423.228c.36.194.793.194 1.153 0l.424-.228 8.4-4.824a1.215 1.215 0 00.36-1.772L15 4399.526z"></path>
									</g>
								</g>
							</g>
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
									<Search className="h-4  w-4 text-foreground/70" />
									<div className=" text-muted-foreground font-semibold line-clamp-1  text-sm leading-relaxed ">
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
								<SearchResult />
							</div>
						</DialogContent>
					</Dialog>
				</div>
				<div className="lg:flex justify-end gap-8 items-center hidden">
					<Link href="/blogs">Resources</Link>
					<Link href="/blogs">Blogs</Link>

					<Button
						variant="default"
						className=' rounded-full text-base py-5 px-10"'
					>
						Sign up
					</Button>
				</div>
			</div>
		</nav>
	);
};

export default NavDesktop;
