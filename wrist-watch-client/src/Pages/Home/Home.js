import { useEffect, useState } from "react";
import axios from "axios";
import { getExcercises } from "../../utils";
import ExcerciseTimer from "../../components/ExcerciseTimer/ExcerciseTimer";

function Home({ excercises }) {
	// console.log(excercises);

	return (
		<>
			<ExcerciseTimer excercises={excercises} />
		</>
	);
}

export default Home;
