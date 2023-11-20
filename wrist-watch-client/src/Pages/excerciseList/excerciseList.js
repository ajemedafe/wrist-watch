import { useState } from "react";
import "./ExcerciseList.scss";
import ExcerciseVideoCard from "../../components/ExcerciseVideoCard/ExcerciseVideoCard";
import { Link } from "react-router-dom";

function ExcerciseList({ excercises, vidId }) {
	console.log(excercises);
	// console.log("hello");

	const hellofunction = () => {
		console.log("hello");
		console.log(vidId);
	};

	const [viewVideo, setViewVideo] = useState(null);

	return (
		<>
			<section className="excerciselist">
				<p>excercises</p>
				{excercises?.map((excercise) => (
					<>
						<Link
							key={excercise.id}
							// id={excercise.id}
							to={`/excercises/video/:${excercise.id}`}>
							{/* onClick={hellofunction}> */}
							<ExcerciseVideoCard excercise={excercise} />
						</Link>
					</>
				))}
			</section>
		</>
	);
}

//to={`/excercises/video/:${excercise.id}`}>

export default ExcerciseList;
