import { useState } from "react";
import "./ExcerciseList.scss";
import ExcerciseVideoCard from "../../components/ExcerciseVideoCard/ExcerciseVideoCard";
import VideoModal from "../../components/VideoModal/VideoModal";
import { Link } from "react-router-dom";

function ExcerciseList({ excercises, vidId }) {
	const [viewVideo, setViewVideo] = useState(null);

	console.log(excercises);
	// console.log("hello");

	const hellofunction = () => {
		console.log("hello");
		console.log(vidId);
	};

	const openVideo = (excercises) => {
		setViewVideo(excercises.video);
	};

	const closeVideo = () => {
		setViewVideo(null);
	};

	return (
		<>
			<section className="excerciselist">
				<p>excercises</p>
				{excercises?.map((excercise) => (
					<>
						<Link
							key={excercise.id}
							// id={excercise.id}
							onClick={() => openVideo(excercise)}
							to={`/excercises/video/:${excercise.id}`}>
							{/* onClick={hellofunction}> */}
							<ExcerciseVideoCard excercise={excercise} />
						</Link>
					</>
				))}
			</section>

			{viewVideo && <VideoModal video={viewVideo} videoClose={closeVideo} />}
		</>
	);
}

//to={`/excercises/video/:${excercise.id}`}>

export default ExcerciseList;
