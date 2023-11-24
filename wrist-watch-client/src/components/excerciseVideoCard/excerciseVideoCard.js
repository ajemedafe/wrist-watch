import "./ExcerciseVideoCard.scss";

function excerciseVideoCard({ excercise }) {
	return (
		<>
			<p className="excerciselist__name">{excercise.excercise_name}</p>
			<img
				className="excerciselist__thumbnail"
				src={excercise.thumbnail}
				alt=""
			/>
		</>
	);
}

export default excerciseVideoCard;
