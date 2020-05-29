/** @format */

import React, { Fragment } from "react";
import MaturityTableHead from "./MaturityTableHead";
import MaturityTableContent from "./MaturityTableContent";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});
export default function MaturityTable(props) {
	const classes = useStyles();
	const { maturities } = props;

	console.log("maturity", maturities);
	const tableheader = [
		"Month Year",
		"Maturity Score",
		"Maturity Percentage",
		"CurrentMaturity Status",
		"CurrentMaturity Rating",
	];
	return (
		<Fragment>
			<TableContainer component={Paper}>
				<Table
					className={classes.table}
					size='small'
					aria-label='a dense table'>
					<MaturityTableHead header={tableheader} />
					<MaturityTableContent maturitydata={maturities} />
				</Table>
			</TableContainer>
		</Fragment>
	);
}
