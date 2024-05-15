import axios from "axios";
import qs from "query-string";

const getProjectDetails = async (slug:string) => {
	const URL = `${process.env.NEXT_PUBLIC_API_URL}/projects/${slug}`;
	

	try {
		const res = await axios.get(URL);

		// Check if the response status is in the 2xx range (indicating success)
		if (res.status < 200 || res.status >= 300) {
			throw new Error(`HTTP error! Status: ${res.status}`);
		}

		return res.data;
	} catch (error) {
        console.error("Axios error:", error);
        return false;
		throw error; // Rethrow the error to let the caller handle it
	}


};

export default getProjectDetails;
