/** @format */

import React, { Component, Fragment } from "react";
import spinner from "./Spinner.gif";
const Spinner = () => {
	return (
		<Fragment>
			<img
				src={spinner}
				alt='Loading....'
				style={{
					height: "100px",
					width: "100px",
					margin: "120px 0 0 220px",
				}}
			/>
		</Fragment>
	);
};

export default Spinner;
