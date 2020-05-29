/** @format */

import React, { Fragment } from "react";
import MaturityTableHead from "../MaturityDetails/MaturityTableHead";
import QualityTableContent from "./QualityTableContent";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});
export default function QualityTable(props) {
	const classes = useStyles();
	const { qualities } = props;

	console.log("maturity", qualities);
	const tableheader = [
		"Release Date",
		"Release Name",
		"Quality Score",
		"Quality Rating",
	];
	return (
		<Fragment>
			<TableContainer component={Paper}>
				<Table
					className={classes.table}
					size='small'
					aria-label='a dense table'>
					<MaturityTableHead header={tableheader} />
					<QualityTableContent qualitydata={qualities} />
				</Table>
			</TableContainer>
		</Fragment>
	);
}
