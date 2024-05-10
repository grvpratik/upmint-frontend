"use client";

import React from "react";
import { signIn, useSession } from "next-auth/react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "src/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "src/components/ui/avatar";
import { Button } from "./button";
import { MenuSVG, ProfileSVG } from "../svg/icon";
import { MoonStar, Settings, User } from "lucide-react";
import { ModeToggle } from "../theme-toggle";
const ProfileDropdown = () => {
	const { data: session, status } = useSession();
	return (
		<>
			{!session && status === "unauthenticated" && (
				<>
					<span className=" items-center rounded-full p-1 flex lg:hidden">
						<MenuSVG className="h-5 w-5" />
					</span>
					<Button
						variant="default"
						className=" rounded-full  py-5 px-8 hidden lg:flex"
						onClick={() => signIn("twitter")}
					>
						Sign up
					</Button>
				</>
			)}

			{session?.user && status === "authenticated" && (
				<DropdownMenu>
					<DropdownMenuTrigger className="rounded-full p-0.5">
						<Avatar className=" ">
							<AvatarImage
								src={session?.user.image || ""}
								alt={session?.user.name || "user"}
							/>
							<AvatarFallback>U</AvatarFallback>
						</Avatar>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						className=" p-2"
						side="bottom"
						align="end"
						sideOffset={10}
					>
						<DropdownMenuLabel className="">
							<div className=" flex gap-2 items-center ">
								<Avatar className="lg:h-11 lg:w-11">
									<AvatarImage
										src={session?.user.image || ""}
										alt={session?.user.name || "user"}
									/>
									<AvatarFallback>U</AvatarFallback>
								</Avatar>
								<span className="flex flex-col gap-1">
									<span className="  text-lg font-semibold leading-none">
										{session?.user.name}
									</span>
									<span className=" text-bace text-muted-foreground  leading-none">
										{session.user.email || "userr@email.com"}
									</span>
								</span>
							</div>
						</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem className=" rounded flex gap-2   text-muted-foreground hover:text-foreground p-1.5  items-center mt-1.5">
							<span className=" flex items-center justify-center">
								<User className=" h-6 w-6 p-0.5" />
							</span>
							<span className="  "> Profile</span>
						</DropdownMenuItem>
						<DropdownMenuItem className=" rounded flex gap-2   text-muted-foreground hover:text-foreground p-1.5  items-center mt-1.5">
							<span className=" flex items-center justify-center">
								<Settings className=" h-6 w-6 p-0.5" />
							</span>
							<span className="  "> Setting</span>
						</DropdownMenuItem>
						<DropdownMenuItem className=" rounded flex gap-2   text-muted-foreground hover:text-foreground p-1.5  items-center mt-1.5">
							<span className=" flex items-center justify-center">
								<MoonStar className=" h-6 w-6 p-0.5" />
							</span>
							<span className="  ">Dark Mode</span>
							<ModeToggle />
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			)}
		</>
	);
};

export default ProfileDropdown;
