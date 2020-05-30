/** @format */

import React, { Fragment } from "react";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import BadgeButton from "../../Common/BadgeButton/BadgeButton";

const MaturityTableContent = (props) => {
	debugger;
	return (
		<Fragment>
			<TableBody>
				{props.maturitydata &&
					props.maturitydata.map((row, index) => (
						<TableRow hover key={row.id}>
							<TableCell align='center' component='th' scope='row'>
								{row.monthYear}
							</TableCell>
							<TableCell align='center'>{row.maturityScore}</TableCell>
							<TableCell align='center'>{row.maturityPercentage}</TableCell>
							<TableCell align='center'>
								<BadgeButton btnvalue={row.currentMaturityStatus} />
							</TableCell>
							<TableCell align='center'>{row.currentMaturityRating}</TableCell>
						</TableRow>
					))}
			</TableBody>
		</Fragment>
	);
};

export default MaturityTableContent;
