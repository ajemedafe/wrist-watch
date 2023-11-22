import { useState, createContext, useContext } from "react";

const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
	const [timerState, setTimerState] = useState({
		timerRunning: false,
		remainingTime: 0,
		timerFinish: false,
		totalTime: 0,
	});

	return (
		<TimerContext.Provider value={{ timerState, setTimerState }}>
			{children}
		</TimerContext.Provider>
	);
};

export const useTimer = () => {
	return useContext(TimerContext);
};
