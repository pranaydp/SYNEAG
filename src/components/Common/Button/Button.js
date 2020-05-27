/** @format */

import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
	margin: {
		margin: theme.spacing(1),
	},
	extendedIcon: {
		marginRight: theme.spacing(1),
	},
}));

export default function ButtonSizes(props) {
	const classes = useStyles();

	return (
		<Fragment>
			<Button
				variant='contained'
				size='small'
				color='primary'
				className={classes.margin}>
				{props.name}
			</Button>
		</Fragment>
	);
}
