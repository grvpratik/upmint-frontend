"use client";

import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
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
import { MenuSVG } from "../svg/icon";
import { LogOut, MoonStar, Settings, User } from "lucide-react";
import { ModeToggle } from "../theme-toggle";
import { Skeleton } from "./skeleton";
const ProfileDropdown = () => {
	const { data: session, status } = useSession();
	return (
		<>
			{!session && status === "unauthenticated" && (
				<>
					<div className=" lg:hidden">
						<DropdownMenu>
							<DropdownMenuTrigger className="rounded-full p-0.5">
								<span className=" items-center-full p-1 flex lg:hidden">
									<MenuSVG className="h-5 w-5" />
								</span>
							</DropdownMenuTrigger>
							<DropdownMenuContent
								className=" p-2 font-semibold text-sm"
								side="bottom"
								align="end"
								sideOffset={10}
							>
								<DropdownMenuLabel className="px-0">
									<Button
										variant="default"
										className="w-full rounded-sm dark:text-white  py-3 px-4 flex"
										onClick={() => signIn("twitter")}
									>
										Sign up
									</Button>
								</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuItem className=" flex gap-2   text-muted-foreground hover:text-foreground  cursor-pointer  items-center mt-1.5">
									<span className=" flex items-center justify-center">
										<User className=" h-6 w-6 p-0.5" />
									</span>
									<span className=" "> Profile</span>
								</DropdownMenuItem>
								<DropdownMenuItem className=" flex gap-2   text-muted-foreground hover:text-foreground  cursor-pointer  items-center mt-1.5">
									<span className=" flex items-center justify-center">
										<Settings className=" h-6 w-6 p-0.5" />
									</span>
									<span className=" "> Setting</span>
								</DropdownMenuItem>

								<ModeToggle />

								<DropdownMenuItem
									onClick={() => signOut()}
									className="text-destructive flex gap-2   hover:bg-destructive  cursor-pointer  items-center mt-1.5"
								>
									<span className=" flex items-center justify-center">
										<LogOut className=" h-6 w-6 p-0.5  hover:text-white text-destructive" />
									</span>
									<span className=" text-destructive hover:text-white">
										Log Out
									</span>
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<div className="py-1 px-2 flex font-bold  text-xs justify-between  text-muted-foreground items-center">
									<span>Term</span>
									<span>About us</span>
								</div>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>

					<Button
						variant="default"
						className="rounded-full dark:text-white  py-4 px-6 hidden lg:flex"
						onClick={() => signIn("twitter")}
					>
						Sign up
					</Button>
				</>
			)}
			{status === "loading" && (
				<Skeleton className="h-10 w-10 rounded-full overflow-hidden" />
			)}

			{session?.user && status === "authenticated" && (
				<DropdownMenu>
					<DropdownMenuTrigger className="rounded-full p-0.5">
						<Avatar>
							<AvatarImage
								src={session?.user.image || ""}
								alt={session?.user.name || "user"}
							/>
							<AvatarFallback>U</AvatarFallback>
						</Avatar>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						className=" p-2 font-semibold text-sm"
						side="bottom"
						align="end"
						sideOffset={10}
					>
						<DropdownMenuLabel>
							<div className=" flex gap-2 items-center ">
								<Avatar className="lg:h-11 lg:w-11">
									<AvatarImage
										src={session?.user.image || ""}
										alt={session?.user.name || "user"}
									/>
									<AvatarFallback>U</AvatarFallback>
								</Avatar>
								<span className="flex flex-col gap-1">
									<span className="  text-base font-semibold leading-none line-clamp-1">
										{session?.user.name}
									</span>
									<span className="  text-muted-foreground  leading-none line-clamp-1">
										{session.user.email || "email@address"}
									</span>
								</span>
							</div>
						</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem className=" flex gap-2   text-muted-foreground hover:text-foreground  cursor-pointer  items-center mt-1.5">
							<span className=" flex items-center justify-center">
								<User className=" h-6 w-6 p-0.5" />
							</span>
							<span className=" "> Profile</span>
						</DropdownMenuItem>
						<DropdownMenuItem className=" flex gap-2   text-muted-foreground hover:text-foreground  cursor-pointer  items-center mt-1.5">
							<span className=" flex items-center justify-center">
								<Settings className=" h-6 w-6 p-0.5" />
							</span>
							<span className=" "> Setting</span>
						</DropdownMenuItem>

						<ModeToggle />

						<DropdownMenuItem
							onClick={() => signOut()}
							className="text-destructive flex gap-2   hover:bg-destructive  cursor-pointer  items-center mt-1.5"
						>
							<span className=" flex items-center justify-center">
								<LogOut className=" h-6 w-6 p-0.5  text-destructive" />
							</span>
							<span className=" text-destructive">Log Out</span>
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<div className="py-1 px-2 flex font-bold  text-xs justify-between  text-muted-foreground items-center">
							<span>Term</span>
							<span>About us</span>
						</div>
					</DropdownMenuContent>
				</DropdownMenu>
			)}
		</>
	);
};

export default ProfileDropdown;
