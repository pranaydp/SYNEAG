/** @format */

import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		"& > * + *": {
			marginTop: theme.spacing(2),
		},
	},
}));

export default function ErrorContent(props) {
	const classes = useStyles();
	return (
		<div style={{ width: "100%" }}>
			<Box
				display='flex'
				justifyContent='center'
				m={1}
				p={12}
				// bgcolor='background.paper'
			>
				<Alert severity='error'>
					<AlertTitle>Error</AlertTitle>
					<strong>{props.err}</strong>
				</Alert>
			</Box>
		</div>
	);
}
