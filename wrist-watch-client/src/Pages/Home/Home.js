import { useEffect, useState } from "react";
import axios from "axios";
import { getExcercises } from "../../utils";

function Home() {
	const [image, setimage] = useState();

	useEffect(() => {
		const { data } = getExcercises();
		console.log(data);
	}, []);

	return (
		<>
			{/* <div> test</div>
			<img src={image} alt="" srcset="" /> */}
			<form className="wrist-form">
				<label htmlFor=""></label>
				<input type="number" name="" />
				<label htmlFor=""></label>
				<input type="number" name="" />
			</form>
		</>
	);
}

export default Home;
