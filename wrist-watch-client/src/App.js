import "./index";
import "./App.scss";

import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import ExcerciseList from "./Pages/ExcerciseList/ExcerciseList";
import { useEffect, useState } from "react";
import { getExcercises, getSingleExcercise } from "./utils";
import VideoChoice from "./Pages/VideoChoice/VideoChoice";

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

	const [fields, setFields] = useState({
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	console.log(totalTime);
	console.log(remainingTime);
	console.log(timerRunning);

	return (
		<>
			<BrowserRouter>
				<main>
					{/* <TimerProvider> */}

					<Routes>
						<Route
							path="/"
							element={
								<>
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
								</>
							}
						/>
						<Route
							path="/excercises"
							element={
								<>
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
								</>
							}
						/>
						<Route
							path="/excercises/video/:id"
							element={
								<>
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
								</>
							}
						/>
						<Route
							path="/video"
							element={<VideoChoice excercises={excercises} />}
						/>
						{/* <Route
							path="/video"
							render={(props) =>
								props.location.pathname !== "/video" && <Header />
							}
						/> */}
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
					{/* </TimerProvider> */}
				</main>
			</BrowserRouter>
		</>
	);
}
