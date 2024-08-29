import React, { useState } from "react"

//include images into your bundle

//create your first component
const Home = () => {
	
	const [redLight, setRedLight] = useState(false);
	const [yellowLight, setYellowLight] = useState(false);
	const [greenLight, setGreenLight] = useState(false);

	function turnRed () {
		setRedLight(true)
		setYellowLight(false)
		setGreenLight(false)
	}
	function turnYellow () {
		setRedLight(false)
		setYellowLight(true)
		setGreenLight(false)
	}
	function turnGreen () {
		setRedLight(false)
		setYellowLight(false)
		setGreenLight(true)
	}
		
	return (
		<>
		<div className="traffic">
			<button className={redLight ? "redLight on" : "redLight"} onClick={() => turnRed()}></button>
			<button className={yellowLight ? "yellowLight on" : "yellowLight"} onClick={() => turnYellow()}></button>
			<button className={greenLight ? "greenLight on" : "greenLight"} onClick={() => turnGreen()}></button>
		</div>
		
		</>
	);
};

export default Home;