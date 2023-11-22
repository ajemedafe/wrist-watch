import "./ExcerciseTimer.scss";
import { useState, useEffect } from "react";
import { useTimer } from "./ExcerciseTimerContext";

function ExcerciseTimer({
	excercises,
	totalTime,
	setTotalTime,
	remainingTime,
	setRemainingTime,
	timerRunning,
	setTimerRunning,
}) {
	// const { timerState, setTimerState } = useTimer();
	// const { timerRunning, remainingTime, timerFinish, totalTime } = timerState;
	// console.log(excercises);

	const excerciseData = excercises;

	console.log(totalTime);

	// excercises prop contains data from the api

	const [fields, setFields] = useState({
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	// const [totalTime, setTotalTime] = useState(0);
	// const [remainingTime, setRemainingTime] = useState(0);
	// const [timerRunning, setTimerRunning] = useState(false);
	const [timerFinish, setTimerFinish] = useState(false);

	const [startTime, setStartTime] = useState(0);
	const [validationError, setValidationError] = useState(null);

	useEffect(() => {
		setTotalTime(
			fields.hours * 3600 * 1000 +
				fields.minutes * 60 * 1000 +
				fields.seconds * 1000
		);
	}, [fields]);

	useEffect(() => {
		setRemainingTime(totalTime);
	}, [totalTime]);

	useEffect(() => {
		let intervalId;

		if (timerRunning && remainingTime > 0) {
			intervalId = setInterval(() => {
				setRemainingTime((prevTime) => prevTime - 1000);
			}, 1000);
		}

		return () => clearInterval(intervalId);
	}, [timerRunning, remainingTime]);

	useEffect(() => {
		if (remainingTime === 0) {
			setTimerRunning(false);
			setTimerFinish(true);
			handleTimerComplete();
		}
	}, [remainingTime]);

	const handleTimerComplete = () => {
		console.log("timer has stopped running");
	};

	const handleChange = (event) => {
		// setFields({ ...fields, [event.target.name]: event.target.value });
		const { name, value } = event.target;
		setValidationError(null);
		if (name === "hours" && (value < 0 || value > 24)) {
			setValidationError("Hours must be between 0 and 24");
		} else {
			setFields({ ...fields, [name]: value });
			setTimerFinish(false);
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		if (fields.hours < 0 || fields.minutes < 0 || fields.seconds < 0) {
			setValidationError("Input values cannot be negative");
		} else {
			setTimerRunning(true);
		}
	};

	const handlePause = () => {
		setTimerRunning(false);
	};

	const handleReset = () => {
		setTimerRunning(false);
		setTimerFinish(false);
		setRemainingTime(totalTime);
		clearInterval();
	};

	// const apiCallInterval = () => {
	// 	let timeLeft = remainingTime;

	// 	const initalTime = totalTime;

	// 	let excercises = excerciseData;

	// 	let hours = fields.hours * 3600 * 1000;
	// 	let minutes = fields.minutes * 60 * 1000;
	// 	let seconds = fields.seconds * 1000;

	// 	let sum = hours + minutes + seconds;

	// 	// for (let i = 0; i < excercises?.length; i++) {
	// 	// 	console.log(excercises[i]);
	// 	// }

	// 	// excercises?.forEach((excercise) => {
	// 	// 	console.log(excercise);
	// 	// });

	// 	console.log(timeLeft);

	// 	console.log(hours);
	// 	console.log(minutes);
	// 	console.log(seconds);
	// 	console.log(totalTime);

	// 	if (sum === initalTime) {
	// 		return console.log("this sum is correct");
	// 	} else {
	// 		console.log("this is absolutely wrong mate");
	// 	}

	// 	// return console.log([timeLeft, initalTime]);
	// 	return;
	// };

	// apiCallInterval();

	// console.log(totalTime);

	return (
		<>
			<section>
				<form onSubmit={handleSubmit} action="">
					<label htmlFor="hours">
						hours:
						<input
							type="number"
							name="hours"
							onChange={handleChange}
							value={fields.hours}
						/>
					</label>
					<label htmlFor="minutes">
						minutes:
						<input
							type="number"
							name="minutes"
							onChange={handleChange}
							value={fields.minutes}
						/>
					</label>

					<label htmlFor="seconds">
						seconds:
						<input
							type="number"
							name="seconds"
							onChange={handleChange}
							value={fields.seconds}
						/>
					</label>
					<button type="submit">START</button>
					<button type="button" onClick={handlePause}>
						PAUSE
					</button>
					<button type="button" onClick={handleReset}>
						RESET
					</button>
				</form>
				{validationError && <div className="error">{validationError}</div>}
				<div>Time remaining: {remainingTime} </div>
				{timerFinish && <div>mission complete!</div>}
			</section>
		</>
	);
}

export default ExcerciseTimer;

//

// const handleSubmit = (event) => {
// 	event.preventDefault();
// 	console.log(fields.hours, fields.minutes, fields.seconds);

// 	const totalTime = [
// 		fields.hours * 3600 * 1000 +
// 			fields.minutes * 60 * 1000 +
// 			fields.seconds * 1000,
// 	];
// 	return console.log(totalTime);
// };

//initial api call function

// const apiCallInterval = () => {
// 	const timeLeft = remainingTime;

// 	const initalTime = totalTime;

// 	return console.log([timeLeft, initalTime]);
// };

// apiCallInterval();
