import { useEffect, useState } from "react";
import "./ExcerciseList.scss";
import ExcerciseVideoCard from "../../components/ExcerciseVideoCard/ExcerciseVideoCard";
import VideoModal from "../../components/VideoModal/VideoModal";
import { Link } from "react-router-dom";

function ExcerciseList({
	excercises,
	vidId,
	totalTime,
	setTotalTime,
	remainingTime,
	setRemainingTime,
	timerRunning,
	setTimerRunning,
	fields,
	setFields,
}) {
	const [viewVideo, setViewVideo] = useState(null);

	const openVideo = (excercises) => {
		setViewVideo(excercises.video);
	};

	const closeVideo = () => {
		setViewVideo(null);
	};

	return (
		<>
			<section className="excerciselist">
				{excercises?.map((excercise) => (
					<>
						<Link
							key={excercise.id}
							onClick={() => openVideo(excercise)}
							to={`/excercises/video/:${excercise.id}`}>
							<ExcerciseVideoCard excercise={excercise} />
						</Link>
					</>
				))}
				{viewVideo && <VideoModal video={viewVideo} videoClose={closeVideo} />}
			</section>
		</>
	);
}

export default ExcerciseList;
