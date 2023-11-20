import { useState } from "react";
import "./excerciseList.scss";
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
							<p key={excercise.id} className="excerciselist__name">
								{excercise.excercise_name}
							</p>
							<img
								className="excercistlist__thumbnail"
								src={excercise.thumbnail}
								alt=""
							/>
						</Link>
					</>
				))}
			</section>
		</>
	);
}

//to={`/excercises/video/:${excercise.id}`}>

export default ExcerciseList;
