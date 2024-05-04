import Link from 'next/link';
import React from 'react'
import { Search } from 'lucide-react';

import { ScrollArea } from "src/components/ui/scroll-area";



import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "src/components/ui/dialog";
import SearchResult from '../search/search-result';
import NavLinks from './nav-links';
import { Button } from '../ui/button';
const NavDesktop = () => {
  return (
		<nav className=" top-0 sticky w-full px-4  lg:px-16 z-40  bg-background ">
			<div className="hidden lg:grid py-3  grid-cols-3 w-full  max-h-18  gap-2 lg:gap-0 font-medium">
				<div className="flex gap-8 items-center">
					<svg
						fill="#000000"
						height="42px"
						width="42px"
						viewBox="0 0 512 512"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						stroke="#000000"
					>
						<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
						<g
							id="SVGRepo_tracerCarrier"
							stroke-linecap="round"
							stroke-linejoin="round"
						></g>
						<g id="SVGRepo_iconCarrier">
							{" "}
							<g id="heart_wings-angel-heart-love-valentine">
								{" "}
								<path d="M230.321,153.667c-7.017-7.196-8.387-18.749-2.105-26.594c7.145-8.922,20.021-9.403,27.784-1.442 c7.763-7.96,20.64-7.479,27.784,1.442c6.283,7.845,4.913,19.398-2.104,26.594l-19.952,20.46c-3.14,3.22-8.315,3.22-11.455,0 L230.321,153.667z M472,162.56v13.36c0,14.24-9.44,26.8-23.2,30.72c-11.308,3.29-3.213,0.954-40.8,11.76l32,3.84v10.8 c0,14.32-9.44,26.88-23.12,30.8c-11.451,3.301-3.294,0.954-40.88,11.76l32,3.84v10.8c0,14.32-9.44,26.88-23.2,30.8l-65.516,18.811 l-34.976,35.079c-7.504,7.496-17.816,11.789-28.309,11.789s-20.805-4.293-28.297-11.777l-34.987-35.091L127.2,321.04 c-13.76-3.92-23.2-16.48-23.2-30.8v-10.8l32-3.84c-37.585-10.806-29.429-8.459-40.88-11.76C81.44,259.92,72,247.36,72,233.04v-10.8 l32-3.84c-37.586-10.806-29.492-8.47-40.8-11.76C49.44,202.72,40,190.16,40,175.92v-13.36c0-5.28,5.12-9.12,10.16-7.68L208.72,200 c5.429,1.558,10.09,4.568,13.876,8.405c2.752,0.284,5.511,0.68,8.267,1.325c9.129,2.059,17.711,6.188,25.137,12.059 c7.43-5.871,16.02-10.004,25.199-12.074c2.735-0.64,5.475-1.031,8.208-1.313c3.785-3.836,8.446-6.844,13.873-8.401l158.56-45.12 C466.88,153.44,472,157.28,472,162.56z M328.496,307.953c17.906-17.98,20.305-45.945,5.578-65.055 c-11.855-15.199-30.734-21.965-49.289-17.59c-8.723,1.969-16.699,6.398-23.129,12.828c-3.125,3.125-8.188,3.125-11.313,0 c-6.43-6.43-14.406-10.859-23.066-12.813c-3.746-0.879-7.504-1.309-11.215-1.309c-14.727,0-28.684,6.75-38.148,18.902 c-14.715,19.078-12.32,47.051,5.594,65.039l55.52,55.676c9,9,24.934,9.012,33.957-0.012L328.496,307.953z M295.766,240 c-4.418,0-8,3.582-8,8s3.582,8,8,8c4.316,0,8.379,1.691,11.441,4.762c6.395,6.41,6.395,16.84,0,23.25 c-3.121,3.125-3.113,8.191,0.016,11.313c3.101,3.101,8.177,3.128,11.313-0.016c12.609-12.637,12.609-33.207,0-45.844 C312.449,243.359,304.363,240,295.766,240z"></path>{" "}
							</g>{" "}
							<g id="Layer_1"></g>{" "}
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
}

export default NavDesktop