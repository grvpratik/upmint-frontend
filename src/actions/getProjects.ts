import axios from "axios";
import qs from "query-string";

const getProjects = async (query: any) => {
	const URL = `${process.env.NEXT_PUBLIC_API_URL}/projects`;
	const queryParams = {
		network: query.network,
		featured: query.featured,
		search: query.search,
		sort: query.sort,
		order: query.order,
		page: query.page,
		size: query.size,
		date: query.date,
	};

	 const url = qs.stringifyUrl({
			url: URL,
			query: queryParams,
		});


	try {
		const res = await axios.get(url, {
			headers: {
				"Cache-Control": "no-store",
			},
		});
		
		// Check if the response status is in the 2xx range (indicating success)
		if (res.status < 200 || res.status >= 300) {
			throw new Error(`HTTP error! Status: ${res.status}`);
		}

		return res.data;
	} catch (error) {
		console.error("Axios error:", error);
		throw error; // Rethrow the error to let the caller handle it
	}
	
};

export default getProjects;
