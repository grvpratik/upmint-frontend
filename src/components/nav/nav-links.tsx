"use client";
import React from "react";
import Link from "next/link";
import { BitcoinSVG, EthereumSVG, SolanaSVG } from "../svg/icon";
import { usePathname } from "next/navigation";
const NavLinks = () => {
	const pathname = usePathname();
	
	return (
		<div className="lg:grid gap-2 text-sm font-bold   leading-none  grid-flow-col text-center  bg-accent  rounded-lg p-1 hidden *:flex *:items-center *:gap-1 *:px-2 *:py-1.5    *:rounded-full ">
			<Link
				href={"/explore/solana"}
				className=" flex items-center gap-1 hover:bg-background hover:shadow-sm transition"
			>
				<span>SOL</span>
				<span>
					<SolanaSVG className="h-3.5 w-3.5" />
				</span>
			</Link>
			<Link
				href={"/explore/ethereum"}
				className=" flex items-center gap-1 hover:bg-background hover:shadow-sm transition"
			>
				<span>ETH</span>
				<span>
					<EthereumSVG className="h-3.5 w-3.5" />
				</span>
			</Link>
			<Link
				href={"/explore/bitcoin"}
				className=" flex items-center gap-1 hover:bg-background hover:shadow-sm transition ease-in duration-150"
			>
				<span>BTC</span>
				<span>
					<BitcoinSVG className="h-3.5 w-3.5" />
				</span>
			</Link>
		</div>
	);
};

export default NavLinks;
  