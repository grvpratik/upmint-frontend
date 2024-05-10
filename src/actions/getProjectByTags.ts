import axios from "axios";
import qs from "query-string";
const getProjectbyTags = async ({
	network,
	tag,
	query,
}: {
	network: string;
	tag: string;
	query: any;
}) => {
	const URL = `${process.env.NEXT_PUBLIC_API_URL}/projects/tags/${tag}`;
	const queryParams = {
		blockchain: query.network,
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
		console.log(res.data);
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

export default getProjectbyTags;
