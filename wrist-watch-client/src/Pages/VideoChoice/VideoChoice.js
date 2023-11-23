import "./VideoChoice.scss";
import { useState } from "react";

function VideoChoice({ excercises }) {
	console.log(excercises);
	const [viewVideo, setViewVideo] = useState(false);
	const [viewButton, setViewButton] = useState(true);
	const [viewTitle, setViewTitle] = useState(true);

	const resizeWindow = () => {
		const currentWindow = window;
		const newWidth = 650;
		const newHeight = 460;

		currentWindow.resizeTo(newWidth, newHeight);
	};

	const openVideo = () => {
		const windowFeatures = "left=450,top=100,width=560,height=315";
		// window.close();
		// return window.open(
		// 	"https://www.youtube.com/watch?v=xMVaEnw5kpk",
		// 	"examplevideo",
		// 	windowFeatures
		// );

		resizeWindow();
		setViewButton(false);
		setViewTitle(false);

		return setViewVideo(true);
	};

	const closeWindow = () => {
		setViewVideo(null);

		return window.close();
	};

	const closeVideo = () => {
		return window.close();
	};

	return (
		<>
			<article className="choice-window">
				{viewTitle && (
					<>
						<h1>Would you like to view excercise?</h1>
					</>
				)}

				{viewButton && (
					<>
						<div>
							<button type="submit" onClick={openVideo}>
								Yes
							</button>
							<button type="submit" onClick={closeWindow}>
								No
							</button>
						</div>
					</>
				)}

				{viewVideo && (
					<>
						<div>
							{/* <iframe
								title="Video"
								width="560"
								height="315"
								src={excercises[0].video}
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen></iframe> */}
							<video width="560" height="315" controls>
								<source src={excercises[0].video} type="video/mp4" />
							</video>
						</div>
						<button type="button" onClick={closeVideo}>
							close
						</button>
					</>
				)}
			</article>
		</>
	);
}

export default VideoChoice;
