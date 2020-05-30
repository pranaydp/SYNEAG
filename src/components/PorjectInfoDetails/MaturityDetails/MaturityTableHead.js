/** @format */

import React from "react";

import TableCell from "@material-ui/core/TableCell";

import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

export default function MaturityTableHead(props) {
	const { header } = props;
	return (
		<TableHead>
			<TableRow>
				{header &&
					header.map((rows) => {
						return (
							<TableCell align='center'>
								<b>{rows}</b>
							</TableCell>
						);
					})}
			</TableRow>
		</TableHead>
	);
}
