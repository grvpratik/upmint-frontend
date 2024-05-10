"use client";

import React from "react";
import { Search } from "lucide-react";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "src/components/ui/sheet";

import { MenuSVG } from "../svg/icon";
import SearchResult from "../Search/search-result";
import ProfileDropdown from "../ui/profile-dropdown";

const NavMobile = () => {
	return (
		<>
			<div className="flex  gap-3 items-center mt-2  root-container lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-7 w-7"
					viewBox="0 0 20 20"
				>
					<g>
						<g fill="currentColor" fillRule="evenodd" stroke="currentColor" strokeWidth="1">
							<g fill="currentColor" transform="translate(-60 -4559)">
								<g transform="translate(56 160)">
									<path d="M6.702 4412.072l5.397-7.986a.5.5 0 01.901.298v11.05a.5.5 0 01-.753.433l-5.397-3.065a.5.5 0 01-.148-.73zm14.447.73l-5.396 3.065a.5.5 0 01-.753-.432v-11.051a.5.5 0 01.901-.298l5.397 7.986a.5.5 0 01-.149.73zM15 4399.526a1.214 1.214 0 00-2 0l-8.76 12.504a1.214 1.214 0 00.36 1.772l8.4 4.824.423.228c.36.194.793.194 1.153 0l.424-.228 8.4-4.824a1.215 1.215 0 00.36-1.772L15 4399.526z"></path>
								</g>
							</g>
						</g>
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
						<SearchResult />
					</SheetContent>
				</Sheet>
<ProfileDropdown/>
				
			</div>
		</>
	);
};

export default NavMobile;
