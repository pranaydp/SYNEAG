/** @format */

import React from "react";
import TableHeader from "../Common/TableHeader/TableHeader";
import TableContent from "../Common/TableContent/TableContent";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
	title: {
		fontSize: 15,
		padding: "0 18px 0px",
	},
});
const ProjectDetails = (props) => {
	debugger;
	const classes = useStyles();
	return (
		<TableContainer>
			<Typography
				className={classes.title}
				color='primary'
				component='h2'
				gutterBottom>
				My Projects
			</Typography>
			<Table className={classes.table} size='small' aria-label='a dense table'>
				<TableHeader heading={props.heading} />
				<TableContent content={props.projectlist} />
			</Table>
		</TableContainer>
	);
};

export default ProjectDetails;
