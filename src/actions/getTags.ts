import axios from "axios";

const getTags = async () => {
	const URL = `${process.env.NEXT_PUBLIC_API_URL}/projects/tags`;

	try {
		const res = await axios.get(URL);
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

export default getTags;
