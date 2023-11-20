import "./excerciseList.scss";

function excerciseList({ excercises }) {
	return (
		<>
			<section className="excerciselist">
				<p>excercises</p>
				{excercises.map((excercise) => (
					<div></div>
				))}
			</section>
		</>
	);
}

export default excerciseList;
