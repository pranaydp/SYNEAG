/** @format */

import React from "react";
import Box from "@material-ui/core/Box";

export default function JustifyContent(props) {
	return (
		<div style={{ width: "100%" }}>
			<Box
				display='flex'
				justifyContent='center'
				m={1}
				p={props.v}
				// bgcolor='background.paper'
			>
				<Box p={1} bgcolor='grey'>
					<h6>No Data Available</h6>
				</Box>
			</Box>
		</div>
	);
}
