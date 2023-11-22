import "./ExcerciseTimer2.scss";
import { useEffect, useState } from "react";
import { useTimer } from "./ExcerciseTimerContext2";

function ExcerciseTimer({ excercises }) {
	// console.log("timerState");
	// console.log(useTimer());
	const { timerState, setTimerState } = useTimer();

	const { timerRunning, remainingTime, timerFinish } = timerState;
	// console.log(timerRunning);

	const [fields, setFields] = useState({
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	const [validationError, setValidationError] = useState(null);

	useEffect(() => {
		setTimerState((prevState) => ({
			...prevState,
			totalTime:
				fields.hours * 3600 * 1000 +
				fields.minutes * 60 * 1000 +
				fields.seconds * 1000,
		}));
	}, [fields, setTimerState]);

	useEffect(() => {
		setFields((prevFields) => ({
			...prevFields,
			hours: Math.floor(remainingTime / (3600 * 1000)),
			minutes: Math.floor((remainingTime % (3600 * 1000)) / (60 * 1000)),
			seconds: Math.floor((remainingTime % (60 * 1000)) / 1000),
		}));
	}, [remainingTime]);

	useEffect(() => {
		let intervalId;

		if (timerRunning && remainingTime > 0) {
			intervalId = setInterval(() => {
				setTimerState((prevState) => ({
					...prevState,
					remainingTime: prevState.remainingTime - 1000,
				}));
			}, 1000);
		}

		return () => clearInterval(intervalId);
	}, [timerRunning, remainingTime, setTimerState]);

	useEffect(() => {
		if (remainingTime === 0) {
			setTimerState((prevState) => ({
				...prevState,
				timerRunning: false,
				timerFinish: true,
			}));
			handleTimerComplete();
		}
	}, [remainingTime, setTimerState]);

	const handleTimerComplete = () => {
		console.log("timer has stopped running");
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setValidationError(null);

		if (name === "hours" && (value < 0 || value > 24)) {
			setValidationError("Hours must be between 0 and 24");
		} else {
			setFields({ ...fields, [name]: value });
			// setTimerFinish(false);
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		if (fields.hours < 0 || fields.minutes < 0 || fields.seconds < 0) {
			setValidationError("Input values cannot be negative");
		} else {
			setTimerState((prevState) => ({
				...prevState,
				timerRunning: true,
			}));
		}
	};

	const handlePause = () => {
		setTimerState((prevState) => ({
			...prevState,
			timerRunning: false,
		}));
	};

	const handleReset = () => {
		setTimerState((prevState) => ({
			...prevState,
			timerRunning: false,
			timerFinish: false,
			remainingTime: prevState.totalTime,
		}));
	};

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
