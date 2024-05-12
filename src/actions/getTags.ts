import axios from "axios";
const tags = [
	{
		id: "clvmhxll40003qwlbp30ev7l5",
		name: "utility",
	},
	{
		id: "clvv20nf70000zzby1pklgo69",
		name: "gaming",
	},
	{
		id: "clvv20nf70001zzbyajfyigyt",
		name: "tools",
	},
	{
		id: "clvv20nf70002zzbyvgr3wbj2",
		name: "art",
	},
	{
		id: "clvv20nf70003zzbyxehk7jwm",
		name: "collectibles",
	},
	{
		id: "clvv20nf70004zzby815ktun3",
		name: "pfps",
	},
	{
		id: "clvv20ng50005zzbyytyiscib",
		name: "daos",
	},
];
const getTags =  () => {
	// const URL = `${process.env.NEXT_PUBLIC_API_URL}/projects/tags`;

	// try {
	// 	const res = await axios.get(URL);
		
	// 	// Check if the response status is in the 2xx range (indicating success)
	// 	if (res.status < 200 || res.status >= 300) {
	// 		throw new Error(`HTTP error! Status: ${res.status}`);
	// 	}

	// 	return res.data;
	// } catch (error) {
	// 	console.error("Axios error:", error);
	// 	throw error; // Rethrow the error to let the caller handle it
	// }
	return tags
};

export default getTags;
