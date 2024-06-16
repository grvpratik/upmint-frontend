"use client";
import { Search } from "lucide-react";
import React from "react";
import useDebounce from "src/lib/useDebounce";

const SearchInput = ({ setSearch }: { setSearch: (value: string) => void }) => {
	const [searchInput, setSearchInput] = React.useState<string>("");
	const debouncedSearch = useDebounce(searchInput, 500);

	React.useEffect(() => {
		if (debouncedSearch !== null) {
			const finalSearch = encodeURIComponent(debouncedSearch);
			setSearch(finalSearch);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [debouncedSearch]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchInput(e.target.value);
	};
	return (
		<div className=" rounded-full w-full  flex justify-between  items-center  bg-input/70  fshadow-inner transition-background  hover:bg-border cursor-pointer mr-14 lg:mr-0 ">
			<div className="flex w-full gap-1.5 py-2.5 pl-3 items-center   ">
				{" "}
				<Search className="h-4  w-4 text-foreground/70" />
				<input
					onChange={handleChange}
					type="text"
					placeholder="Search nfts,coins etc.."
					className=" text-foreground placeholder:text-muted-foreground  outline-none border-none w-full bg-transparent  text-sm font-semibold line-clamp-1 "
				/>
			</div>
		</div>
	);
};
 
export default SearchInput;
