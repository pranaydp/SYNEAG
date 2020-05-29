/** @format */

import React, { Fragment } from "react";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const MaturityTableContent = (props) => {
	debugger;
	return (
		<Fragment>
			<TableBody>
				{props.maturitydata &&
					props.maturitydata.map((row, index) => (
						<TableRow key={row.id}>
							<TableCell component='th' scope='row'>
								{row.monthYear}
							</TableCell>
							<TableCell align='right'>{row.maturityScore}</TableCell>
							<TableCell align='right'>{row.maturityPercentage}</TableCell>
							<TableCell align='right'>{row.currentMaturityStatus}</TableCell>
							<TableCell align='right'>{row.currentMaturityRating}</TableCell>
						</TableRow>
					))}
			</TableBody>
		</Fragment>
	);
};

export default MaturityTableContent;
