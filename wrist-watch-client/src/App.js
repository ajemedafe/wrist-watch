import "./index";
import "./App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import excerciseList from "./Pages/excerciseList/excerciseList";

export default function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/excercises" element={<excerciseList />} />
						<Route path="/excercises/video" element={<h1>videos</h1>} />
						<Route path="/excercises/video/:id" element={<h1>videos/id</h1>} />
						<Route path="/achievments" element={<h1>nice to have</h1>} />
					</Routes>
				</main>
			</BrowserRouter>
		</>
	);
}
