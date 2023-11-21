import "./ExcerciseTimer.scss";
import { useState } from "react";

function ExcerciseTimer({ excercises }) {
	// console.log(excercises);

	// excercises prop contains data from the api

	const [fields, setFields] = useState({
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	const handleChange = (event) => {
		setFields({ ...fields, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(fields.hours, fields.minutes, fields.seconds);

		const totalTime = [
			fields.hours * 3600 * 1000 +
				fields.minutes * 60 * 1000 +
				fields.seconds * 1000,
		];
		return console.log(totalTime);
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
					<button onSubmit={handleSubmit}>START</button>
				</form>
			</section>
		</>
	);
}

export default ExcerciseTimer;
