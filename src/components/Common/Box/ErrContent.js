/** @format */

import React from "react";
import Box from "@material-ui/core/Box";

export default function ErrorContent(props) {
	return (
		<div style={{ width: "100%" }}>
			<Box
				display='flex'
				justifyContent='center'
				m={1}
				p={12}
				// bgcolor='background.paper'
			>
				<Box p={1} bgcolor='grey'>
					<h6>{props.err}</h6>
				</Box>
			</Box>
		</div>
	);
}
