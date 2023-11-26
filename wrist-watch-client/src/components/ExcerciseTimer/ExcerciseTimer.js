import "./ExcerciseTimer.scss";
import { useState, useEffect } from "react";

function ExcerciseTimer({
	excercises,
	totalTime,
	setTotalTime,
	remainingTime,
	setRemainingTime,
	timerRunning,
	setTimerRunning,
}) {
	const excerciseData = excercises;

	console.log(totalTime);

	const [fields, setFields] = useState({
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

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

		const convertedHour = fields.hours;
		const convertedMinutes = fields.minutes;
		const convertedSeconds = fields.seconds;

		console.log(convertedHour);
		console.log(convertedMinutes);
		console.log(convertedSeconds);

		const sum = hours + minutes + seconds;
		const halfsum = sum / 2;

		if (timeLeft === 55000 && timeLeft > 0) {
			const windowFeatures = "left=450,top=100,width=400,height=120";

			return window.open(
				"http://localhost:3000/video-wrist/",
				"videoWristwindow",
				windowFeatures
			);
		}

		if (timeLeft === 40000 && timeLeft > 0) {
			const windowFeatures = "left=450,top=100,width=400,height=120";

			return window.open(
				"http://localhost:3000/video-arm/",
				"videoArmwindow",
				windowFeatures
			);
		}

		if (timeLeft === 20000 && timeLeft > 0) {
			const windowFeatures = "left=450,top=100,width=400,height=120";

			return window.open(
				"http://localhost:3000/video-neck/",
				"videoNeckwindow",
				windowFeatures
			);
		}

		return;
	};

	apiCallInterval();

	return (
		<>
			<section className="timer-section">
				<h1 className="timer-section-logo">WRIST WATCH </h1>

				<div className="timer-section-remaining">
					Time remaining: {remainingTime}{" "}
				</div>
				{timerFinish && <div>Time has ended</div>}
				<form className="timer-section-form" onSubmit={handleSubmit} action="">
					<div className="timer-section-group__wrapper">
						<div className="timer-section__wrapper">
							<label className="timer-section-hours" htmlFor="hours">
								hours:
							</label>
							<input
								type="number"
								name="hours"
								className="timer-section-input"
								onChange={handleChange}
								value={fields.hours}
							/>
						</div>

						<div className="timer-section__wrapper">
							<label className="timer-section-minutes" htmlFor="minutes">
								minutes:
							</label>
							<input
								type="number"
								name="minutes"
								className="timer-section-input"
								onChange={handleChange}
								value={fields.minutes}
							/>
						</div>

						<div className="timer-section__wrapper">
							<label className="timer-section-seconds" htmlFor="seconds">
								seconds:
							</label>
							<input
								type="number"
								name="seconds"
								className="timer-section-input"
								onChange={handleChange}
								value={fields.seconds}
							/>
						</div>
					</div>
					<div className="timer-section-timer__wrapper">
						<button type="submit">START</button>
						<button type="button" onClick={handlePause}>
							PAUSE
						</button>
						<button type="button" onClick={handleReset}>
							RESET
						</button>
					</div>
				</form>
				{validationError && <div className="error">{validationError}</div>}
			</section>
		</>
	);
}

export default ExcerciseTimer;
