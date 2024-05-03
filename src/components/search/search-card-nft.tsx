import Link from 'next/link';
import Image from 'next/image';
import React from 'react'
import { Card, CardContent } from '../ui/card';

interface SearchCardNftProps {
	name: string;
	imageUrl: string;
    blockchain: string;
    slug:string
}



const SearchCardNft = ({name,imageUrl,blockchain,slug}:SearchCardNftProps) => {
  return (
		<Link href={`/mints/${slug}`}>
			<Card>
				<CardContent className="flex items-center gap-2 py-2 px-1">
					<div className="relative h-11 w-11  flex-shrink-0 rounded-2xl overflow-hidden">
						<Image
							className=" object-cover  aspect-square "
							src={imageUrl}
							alt={name}
							fill
						/>
					</div>
					<div className="flex flex-col">
						<div className="font-semibold text-base">{name}</div>{" "}
						<p className="text-sm text-muted-foreground line-clamp-1">
							{blockchain}
						</p>
					</div>
				</CardContent>
			</Card>
		</Link>
	);
}

export default SearchCardNft