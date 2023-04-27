import React, { useState } from "react";

function MoodChecker() {
	const [message, setMessage] = useState("Kaip jauciates?");

	const handleButtonClick = (newMessage) => {
		setMessage(newMessage);
	};

	return (
		<div>
			<h2>{message}</h2>
			<button onClick={() => handleButtonClick("Nieko tokio, viskas bus gerai")}>
				Jauciuosi prastai :(
			</button>
			<button onClick={() => handleButtonClick("Gerai, nujauciu, kad greitu metu jausites puikiai")}>
				Jauciuosi normaliai :|
			</button>
			<button onClick={() => handleButtonClick("Smagu girdeti, taip ir toliau")}>
				Jauciuosi puikiai :)
			</button>
		</div>
	);
}

export default MoodChecker;
