import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL || "http://localhost:1020";

const getExcercises = async () => {
	const { data } = await axios.get(`${baseUrl}/excercises`);
	return { data };
};

export { getExcercises };
