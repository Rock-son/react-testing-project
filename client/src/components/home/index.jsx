import React, { useState } from "react";
// import "./styles/main.scss";

export default function Timer() {
	const newDate = new Date();

	const [date, setDate] = useState({
		hours: newDate.getHours(),
		minutes: newDate.getMinutes(),
		seconds: newDate.getSeconds()
	});

	setTimeout(() => {
		setDate({
			hours: newDate.getHours(),
			minutes: newDate.getMinutes(),
			seconds: newDate.getSeconds()
		});
	}, 1000);

	return (
		<div>
			<h1>Timer</h1>
			<span className="timer">
				{date.hours < 10 ? `0${date.hours}` : date.hours}:
				{date.minutes < 10 ? `0${date.minutes}` : date.minutes}:
				{date.seconds < 10 ? `0${date.seconds}` : date.seconds}
			</span>
		</div>
	);
}
