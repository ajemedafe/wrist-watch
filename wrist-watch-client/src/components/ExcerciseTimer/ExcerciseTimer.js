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

		if (name === "minutes" && (value < 0 || value > 60)) {
			setValidationError("Hours must be between 0 and 60");
		} else {
			setFields({ ...fields, [name]: value });
			setTimerFinish(false);
		}

		if (name === "seconds" && (value < 0 || value > 60)) {
			setValidationError("Hours must be between 0 and 60");
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

	const apiCallInterval = () => {
		const timeLeft = remainingTime;

		const initalTime = totalTime;

		const excercises = excerciseData;

		const hours = fields.hours * 3600 * 1000;
		const minutes = fields.minutes * 60 * 1000;
		const seconds = fields.seconds * 1000;

		const sum = hours + minutes + seconds;
		const halfsum = sum / 2;

		// console.log(halfsum);

		// for (let i = 0; i < excercises?.length; i++) {
		// 	console.log(excercises[i]);
		// }

		// excercises?.forEach((excercise) => {
		// 	console.log(excercise);
		// });

		// console.log(timeLeft);

		// console.log(hours);
		// console.log(minutes);
		// console.log(seconds);
		// console.log(totalTime);

		// console.log("this sum is correct");

		if (timeLeft <= 1000 && timeLeft > 0) {
			const windowFeatures = "left=450,top=100,width=400,height=120";

			return window.open(
				"http://localhost:3000/video/",
				"videowindow",
				// "popup",
				windowFeatures
			);
		}

		// return console.log([timeLeft, initalTime]);
		return;
	};

	apiCallInterval();

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
