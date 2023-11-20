import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
	const [image, setimage] = useState();

	useEffect(() => {
		const getImages = async () => {
			try {
				const { data } = await axios.get("http://localhost:1020/excercises");
				// setimage(data);
				setimage(data[0].thumbnail);

				return console.log(data[0].thumbnail);
			} catch (error) {}
		};
		getImages();
	}, []);

	return (
		<>
			<div> test</div>
			<img src={image} alt="" srcset="" />
		</>
	);
}

export default Home;
