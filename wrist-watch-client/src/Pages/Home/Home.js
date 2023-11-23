import { useEffect, useState } from "react";
import axios from "axios";
import { getExcercises } from "../../utils";
import ExcerciseTimer from "../../components/ExcerciseTimer/ExcerciseTimer";
import ExcerciseTimer2 from "../../components/ExcerciseTimer 2/ExcerciseTimer2";
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
				<article>
					<p>original timer</p>
					<ExcerciseTimer
						totalTime={totalTime}
						setTotalTime={setTotalTime}
						remainingTime={remainingTime}
						setRemainingTime={setRemainingTime}
						timerRunning={timerRunning}
						setTimerRunning={setTimerRunning}
						excercises={excercises}
					/>
				</article>
				{/* 
				<article>
					<p>modified timer</p>
					<ExcerciseTimer2 excercises={excercises} />
				</article> */}
			</section>
		</>
	);
}

export default Home;
