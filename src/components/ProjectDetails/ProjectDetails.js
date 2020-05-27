/** @format */

import React from "react";
import TableHeader from "../Common/TableHeader/TableHeader";
import TableContent from "../Common/TableContent/TableContent";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
const useStyles = makeStyles({
	table: {
		minWidth: 650,
		marginTop:10
	},
});
const ProjectDetails = (props) => {
	const classes = useStyles();
	return (
		<TableContainer>
		<h5 style={{paddingLeft:"10px"}}>My Projects</h5>
			<Table className={classes.table} aria-label='simple table'>
				<TableHeader />
				<TableContent content={props.projectlist} />
			</Table>
		</TableContainer>
	);
};

export default ProjectDetails;
