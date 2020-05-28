/** @format */

import React from "react";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Button from "../Button/Button";

const TableContent = (props) => {
	return (
		<TableBody>
			{props.content !== null
				? props.content.map((row) => (
						<TableRow hover key={row.name}>
							<TableCell component='th' scope='row'>
								{row.Projectname}
							</TableCell>
							<TableCell align='right'>{row.Frameworktype}</TableCell>
							<TableCell align='right'>{row.Suntype}</TableCell>
							<TableCell>
								<Button name={"Add Maturity"} />
							</TableCell>
							<TableCell>
								<Button name={"Add Quality"} />
							</TableCell>
						</TableRow>
				  ))
				: ""}
		</TableBody>
	);
};

export default TableContent;
