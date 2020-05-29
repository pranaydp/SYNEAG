/** @format */

import React, { Fragment } from "react";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const QualityTableContent = (props) => {
	debugger;
	return (
		<Fragment>
			<TableBody>
				{props.qualitydata &&
					props.qualitydata.map((row, index) => (
						<TableRow hover key={row.id}>
							<TableCell component='th' scope='row'>
								{row.releaseDate}
							</TableCell>
							<TableCell align='right'>{row.releaseName}</TableCell>
							<TableCell align='right'>{row.qualityScore}</TableCell>
							<TableCell align='right'>{row.qualityRating}</TableCell>
						</TableRow>
					))}
			</TableBody>
		</Fragment>
	);
};

export default QualityTableContent;
