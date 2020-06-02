/** @format */

import React, { Fragment } from "react";
import MaturityTableHead from "../MaturityDetails/MaturityTableHead";
import QualityTableContent from "./QualityTableContent";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import JustifyContent from "../../Common/Box/ErrBox";

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
			<div data-test='quality-input'>
				{qualities.length > 0 ? (
					<TableContainer data-test='table-input' component={Paper}>
						<Table
							className={classes.table}
							size='small'
							aria-label='a dense table'>
							<MaturityTableHead header={tableheader} />
							<QualityTableContent qualitydata={qualities} />
						</Table>
					</TableContainer>
				) : (
					<div data-test='no-data'>
						<JustifyContent v={9} />
					</div>
				)}
			</div>
		</Fragment>
	);
}
