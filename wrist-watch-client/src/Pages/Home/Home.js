import { useEffect, useState } from "react";
import axios from "axios";
import { getExcercises } from "../../utils";
import ExcerciseTimer from "../../components/ExcerciseTimer/ExcerciseTimer";
import "./Home.scss";

function Home({
	excercises,
	totalTime,
	setTotalTime,
	remainingTime,
	setRemainingTime,
	timerRunning,
	setTimerRunning,
}) {
	// console.log(excercises);

	return (
		<>
			<section className="section">
				<ExcerciseTimer
					totalTime={totalTime}
					setTotalTime={setTotalTime}
					remainingTime={remainingTime}
					setRemainingTime={setRemainingTime}
					timerRunning={timerRunning}
					setTimerRunning={setTimerRunning}
					excercises={excercises}
				/>
			</section>
		</>
	);
}

export default Home;
