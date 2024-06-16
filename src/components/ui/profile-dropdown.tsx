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
					<div className="lg:hidden">
						<DropdownMenu>
							<DropdownMenuTrigger className="rounded-full p-1">
								<span className="flex items-center p-1">
									<MenuSVG className="h-5 w-5" />
								</span>
							</DropdownMenuTrigger>
							<DropdownMenuContent
								className="p-2 text-sm font-semibold"
								side="bottom"
								align="end"
								sideOffset={10}
							>
								<DropdownMenuLabel className="px-0">
									<Button
										variant="default"
										className="w-full py-3 px-4 rounded-sm dark:text-white"
										onClick={() => signIn("twitter")}
									>
										Sign up
									</Button>
								</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuItem className="flex items-center gap-2 mt-1.5 text-muted-foreground hover:text-foreground cursor-pointer">
									<User className="h-6 w-6 p-0.5" />
									<span>Profile</span>
								</DropdownMenuItem>
								<DropdownMenuItem className="flex items-center gap-2 mt-1.5 text-muted-foreground hover:text-foreground cursor-pointer">
									<Settings className="h-6 w-6 p-0.5" />
									<span>Setting</span>
								</DropdownMenuItem>
								<ModeToggle />
								<DropdownMenuItem
									onClick={() => signOut()}
									className="flex items-center gap-2 mt-1.5 text-destructive hover:bg-destructive cursor-pointer"
								>
									<LogOut className="h-6 w-6 p-0.5 text-destructive hover:text-white" />
									<span className="text-destructive hover:text-white">
										Log Out
									</span>
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<div className="flex justify-between items-center py-1 px-2 text-xs font-bold text-muted-foreground">
									<span>Terms</span>
									<span>About us</span>
								</div>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
					<Button
						variant="default"
						className="hidden lg:flex py-1.5 px-4  dark:text-white"
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
						className="p-2 text-sm font-semibold"
						side="bottom"
						align="end"
						sideOffset={10}
					>
						<DropdownMenuLabel>
							<div className="flex items-center gap-2">
								<Avatar className="lg:h-11 lg:w-11">
									<AvatarImage
										src={session?.user.image || ""}
										alt={session?.user.name || "user"}
									/>
									<AvatarFallback>U</AvatarFallback>
								</Avatar>
								<span className="flex flex-col gap-1">
									<span className="text-base font-semibold leading-none line-clamp-1">
										{session?.user.name}
									</span>
									<span className="text-muted-foreground leading-none line-clamp-1">
										{session.user.email || "email@address"}
									</span>
								</span>
							</div>
						</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem className="flex items-center gap-2 mt-1.5 text-muted-foreground hover:text-foreground cursor-pointer">
							<User className="h-6 w-6 p-0.5" />
							<span>Profile</span>
						</DropdownMenuItem>
						<DropdownMenuItem className="flex items-center gap-2 mt-1.5 text-muted-foreground hover:text-foreground cursor-pointer">
							<Settings className="h-6 w-6 p-0.5" />
							<span>Setting</span>
						</DropdownMenuItem>
						<ModeToggle />
						<DropdownMenuItem
							onClick={() => signOut()}
							className="flex items-center gap-2 mt-1.5 text-destructive hover:bg-destructive cursor-pointer"
						>
							<LogOut className="h-6 w-6 p-0.5 text-destructive" />
							<span className="text-destructive">Log Out</span>
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<div className="flex justify-between items-center py-1 px-2 text-xs font-bold text-muted-foreground">
							<span>Terms</span>
							<span>About us</span>
						</div>
					</DropdownMenuContent>
				</DropdownMenu>
			)}
		</>
	);
};

export default ProfileDropdown;
