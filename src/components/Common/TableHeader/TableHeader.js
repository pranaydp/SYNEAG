/** @format */

import React from "react";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
const TableHeader = () => {
	return (
		<TableHead>
			<TableRow>
				{[
					"Project Name",
					"Framework Type",
					"Framework Subtype",
					"Pending Action",
				].map((text, index) => {
					return <TableCell align='right'>{text}</TableCell>;
				})}
			</TableRow>
		</TableHead>
	);
};

export default TableHeader;
