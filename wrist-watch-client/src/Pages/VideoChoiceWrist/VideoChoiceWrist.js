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

	// console.log(excercises);
	const [viewVideo, setViewVideo] = useState(false);
	const [viewButton, setViewButton] = useState(true);
	const [viewTitle, setViewTitle] = useState(true);

	const resizeWindow = () => {
		const currentWindow = window;
		const newWidth = 650;
		const newHeight = 470;

		currentWindow.resizeTo(newWidth, newHeight);
	};

	// const WristArray = excercises.filter((excercise) => {
	// 	return (
	// 		excercise.hasOwnProperty("excercise_name") &&
	// 		excercise.exercise_name.includes("wrist")
	// 	);
	// });

	// console.log(WristArray);
	function filterArrayByKeyword(inputArray, keyword) {
		const newArray = inputArray?.filter((object) => {
			return (
				object.hasOwnProperty("excercise_name") &&
				object.excercise_name.includes(keyword)
			);
		});

		return newArray;
	}

	// Test:
	// const inputArray = [
	// 	{ exercise_name: "Wrist1", otherProperty: "value1" },
	// 	{ exercise_name: "Wrist2", otherProperty: "value1" },
	// 	{ exercise_name: "Leg1", otherProperty: "value2" },
	// 	{ otherProperty: "value3" },
	// ];
	const inputArray = excercises;

	const keyword = "Wrist";
	const WristArray = filterArrayByKeyword(inputArray, keyword);

	function getRandomInt(max) {
		return Math.floor(Math.random() * max);
	}

	const randomInt = getRandomInt(4);
	console.log(randomInt);

	// console.log(filteredArray);
	// console.log(excercises);

	// const RandomWristExcercise = () => {
	// 	let excerciseList = excercises;
	// 	console.log(excerciseList);
	// 	let wristExcercises = [];
	// 	console.log(wristExcercises);
	// 	for (let i = 0; i < excerciseList?.length; i++) {
	// 		// console.log(excerciseList[i]);
	// 		if (excerciseList[i] === "Wrist") {
	// 			console.log("wrist");
	// 		}
	// 		// excerciseList[i].includes({excercise_name: "Wrist"})
	// 		// console.log("hello");
	// 	}
	// 	return console.log("finish");
	// };

	// RandomWristExcercise();

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
								<source src={WristArray[randomInt].video} type="video/mp4" />
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

export default VideoChoiceWrist;
