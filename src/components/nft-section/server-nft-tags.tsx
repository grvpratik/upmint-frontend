import React from "react";
import getTags from "src/actions/getTags";
import NftTags from "./nft-tags-select";

const ServerNftTags = async () => {
	const tags = await getTags();

	return <NftTags tagArray={tags} />;
};

export default ServerNftTags;
