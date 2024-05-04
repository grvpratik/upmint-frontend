import React from 'react'
import Link from 'next/link';
import { BitcoinSVG, EthereumSVG, SolanaSVG } from '../svg/icon';
const NavLinks = () => {
  return (
		<div className="lg:flex gap-2 text-sm font-semibold leading-none hidden *:flex *:items-center *:gap-1 *:px-1.5 *:py-1  *:rounded-full ">
			<Link href={"/explore/solana"} >
				<span>SOL</span>
				<span>
					<SolanaSVG className="h-3.5 w-3.5" />
				</span>
			</Link>
			<Link href={"/explore/ethereum"} className=" flex items-center gap-1">
				<span>ETH</span>
				<span>
					<EthereumSVG className="h-3.5 w-3.5" />
				</span>
			</Link>
			<Link href={"/explore/bitcoin"} >
				<span>BTC</span>
				<span>
					<BitcoinSVG className="h-3.5 w-3.5" />
				</span>
			</Link>
		</div>
	);
}

export default NavLinks