import "./index";
import "./App.scss";

import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import ExcerciseList from "./Pages/ExcerciseList/ExcerciseList";
import { useEffect, useState } from "react";
import { getExcercises, getSingleExcercise } from "./utils";
import VideoChoiceWrist from "./Pages/VideoChoiceWrist/VideoChoiceWrist";
import VideoChoiceArm from "./Pages/VideoChoiceArm/VideoChoiceArm";
import VideoChoiceNeck from "./Pages/VideoChoiceNeck/VideoChoiceNeck";

export default function App() {
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

	const [totalTime, setTotalTime] = useState(0);
	const [remainingTime, setRemainingTime] = useState(0);
	const [timerRunning, setTimerRunning] = useState(false);

	console.log(totalTime);
	console.log(remainingTime);
	console.log(timerRunning);

	return (
		<>
			<BrowserRouter>
				<main>
					<Routes>
						<Route
							path="/"
							element={
								<>
									<div className="home__wrapper">
										<Header />
										<Home
											totalTime={totalTime}
											setTotalTime={setTotalTime}
											remainingTime={remainingTime}
											setRemainingTime={setRemainingTime}
											timerRunning={timerRunning}
											setTimerRunning={setTimerRunning}
											excercises={excercises}
										/>
									</div>
								</>
							}
						/>
						<Route
							path="/excercises"
							element={
								<>
									<div className="home__wrapper">
										<Header />
										<ExcerciseList
											totalTime={totalTime}
											setTotalTime={setTotalTime}
											remainingTime={remainingTime}
											setRemainingTime={setRemainingTime}
											timerRunning={timerRunning}
											setTimerRunning={setTimerRunning}
											excercises={excercises}
										/>
									</div>
								</>
							}
						/>
						<Route
							path="/excercises/video/:id"
							element={
								<>
									<div className="home__wrapper">
										<Header />
										<ExcerciseList
											totalTime={totalTime}
											setTotalTime={setTotalTime}
											remainingTime={remainingTime}
											setRemainingTime={setRemainingTime}
											timerRunning={timerRunning}
											setTimerRunning={setTimerRunning}
											vidId={vidId}
											excercises={excercises}
										/>
									</div>
								</>
							}
						/>
						<Route path="/video-wrist" element={<VideoChoiceWrist />} />
						<Route path="/video-arm" element={<VideoChoiceArm />} />
						<Route path="/video-neck" element={<VideoChoiceNeck />} />
						<Route
							path="/achievments"
							element={
								<>
									<Header />
									<h1>nice to have</h1>
								</>
							}
						/>
					</Routes>
				</main>
			</BrowserRouter>
		</>
	);
}
