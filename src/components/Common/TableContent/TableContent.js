/** @format */

import React from "react";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Button from "@material-ui/core/Button";
const TableContent = (props) => {
	return (
		<TableBody>
			{props.content !== null
				? props.content.map((row) => (
						<TableRow key={row.name}>
							<TableCell component='th' scope='row'>
								{row.Projectname}
							</TableCell>
							<TableCell align='right'>{row.Frameworktype}</TableCell>
							<TableCell align='right'>{row.Suntype}</TableCell>
							<TableCell>
								<Button variant='outlined' color='primary'>
									Add Matruirty
								</Button>
							</TableCell>
							<TableCell>
								<Button variant='outlined' color='primary'>
									Add quality
								</Button>
							</TableCell>
						</TableRow>
				  ))
				: ""}
		</TableBody>
	);
};

export default TableContent;
