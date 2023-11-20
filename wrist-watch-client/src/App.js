import "./index";
import "./App.scss";

import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import ExcerciseList from "./Pages/excerciseList/ExcerciseList";
import { useEffect, useState } from "react";
import { getExcercises, getSingleExcercise } from "./utils";

export default function App() {
	const [excercises, setExcercises] = useState(null);
	const [singleExcercise, setSingleExcercise] = useState(null);
	console.log(excercises);
	console.log(singleExcercise);

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

	return (
		<>
			<BrowserRouter>
				<Header />
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route
							path="/excercises"
							element={<ExcerciseList excercises={excercises} />}
						/>
						<Route
							path="/excercises/video/:id"
							element={<ExcerciseList vidId={vidId} excercises={excercises} />}
						/>
						<Route path="/achievments" element={<h1>nice to have</h1>} />
					</Routes>
				</main>
			</BrowserRouter>
		</>
	);
}
