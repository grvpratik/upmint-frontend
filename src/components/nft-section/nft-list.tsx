import React from "react";
import NftCard from "./nft-card";
import { Divide } from "lucide-react";

const NftsList = ({ tagResult, cardLoading }) => {
	return (
    <main className=" grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3  gap-6 ">
      
      {cardLoading && <div>loading...</div>}
      {tagResult && !cardLoading && tagResult.map((result) =>
        < NftCard
          key={result.id}
          name={result.name}
          imageUrl={result.imageUrl}
          bannerUrl={result.bannerUrl} />
  
      )}
		</main>
	);
};

export default NftsList;
