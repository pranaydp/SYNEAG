/** @format */

import React, { Fragment } from "react";
import "./BadgeButton.css";

let btnclass = "";
const BadgeButton = (props) => {
	const { btnvalue } = props;

	if (btnvalue === "RED") btnclass = "danger";
	else btnclass = "success";
	return (
		<Fragment>
			<span className={`badge badge-pill badge-${btnclass}`}>{btnvalue}</span>
		</Fragment>
	);
};

export default BadgeButton;
