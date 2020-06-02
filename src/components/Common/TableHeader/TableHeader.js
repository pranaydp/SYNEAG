/** @format */

import React from "react";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";


const TableHeader = (props) => {
	debugger;
	return (
		<TableHead>
			<TableRow>
				{props.heading.map((text, index) => {
					return <TableCell align='center'><b>{text}</b></TableCell>;
				})}
			</TableRow>
		</TableHead>
	);
};

export default TableHeader;
