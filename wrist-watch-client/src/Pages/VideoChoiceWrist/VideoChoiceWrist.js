import "./VideoChoiceWrist.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getExcercises, getSingleExcercise } from "../../utils";

function VideoChoiceWrist() {
	const [excercises, setExcercises] = useState(null);
	const [singleExcercise, setSingleExcercise] = useState(null);

	const { vidId } = useParams();

	const fetchExcercise = async () => {
		try {
			const data = await getExcercises();
			setExcercises(data);
		} catch (error) {
			console.error(error);
		}
	};

	const fetchSingleExcercise = async () => {
		try {
			const data = await getSingleExcercise(vidId);
			setSingleExcercise(data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		fetchExcercise();
		fetchSingleExcercise();
	}, [vidId]);

	const [viewVideo, setViewVideo] = useState(false);
	const [viewButton, setViewButton] = useState(true);
	const [viewTitle, setViewTitle] = useState(true);

	const resizeWindow = () => {
		const currentWindow = window;
		const newWidth = 630;
		const newHeight = 470;

		currentWindow.resizeTo(newWidth, newHeight);
	};
	function filterArrayByKeyword(inputArray, keyword) {
		const newArray = inputArray?.filter((object) => {
			return (
				object.hasOwnProperty("excercise_name") &&
				object.excercise_name.includes(keyword)
			);
		});

		return newArray;
	}
	const inputArray = excercises;

	const keyword = "Wrist";
	const WristArray = filterArrayByKeyword(inputArray, keyword);

	function getRandomInt(max) {
		return Math.floor(Math.random() * max);
	}

	const randomInt = getRandomInt(4);
	console.log(randomInt);

	const openVideo = () => {
		const windowFeatures = "left=450,top=100,width=560,height=315";

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
						<h1 className="choice-title">Would you like to view excercise?</h1>
					</>
				)}

				{viewButton && (
					<>
						<div className="button__wrapper">
							<button className="button-yes" type="submit" onClick={openVideo}>
								Yes
							</button>
							<button className="button-no" type="submit" onClick={closeWindow}>
								No
							</button>
						</div>
					</>
				)}

				{viewVideo && (
					<>
						<div className="video__wrapper">
							<video width="560" height="315" controls>
								<source src={WristArray[randomInt].video} type="video/mp4" />
							</video>
						</div>
						<button
							className="video__button"
							type="button"
							onClick={closeVideo}>
							close
						</button>
					</>
				)}
			</article>
		</>
	);
}

export default VideoChoiceWrist;
