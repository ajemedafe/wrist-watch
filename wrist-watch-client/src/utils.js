import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL || "http://localhost:1020";

const getExcercises = async () => {
	try {
		const { data } = await axios.get(`${baseUrl}/excercises`);
		return data;
	} catch (error) {
		console.error(error);
	}
};

const getSingleExcercise = async (vidId) => {
	try {
		const { data } = await axios.get(`${baseUrl}/excercises/${vidId}`);
		return data;
	} catch (error) {
		console.error(error);
	}
};

export { getExcercises, getSingleExcercise };
