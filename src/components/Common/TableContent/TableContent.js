/** @format */

import React from "react";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Tooltip from '@material-ui/core/Tooltip';
import QueuePlayNext from '@material-ui/icons/QueuePlayNext';
import ExitToApp from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/IconButton';

const TableContent = (props) => {

	return (
		<TableBody>
			{props.content !== null
				? props.content.map((row) => ( 
						<TableRow hover key={row.name}>
							<TableCell component='th' scope='row' align='center'>
								{row.Projectname}
							</TableCell>
							<TableCell align='center'>{row.Frameworktype}</TableCell>
							<TableCell align='center'>{row.Suntype}</TableCell>
							
							<TableCell align='center'>
							<Tooltip title="Add Maturity">
							<IconButton aria-label="QueuePlayNext">
                            <QueuePlayNext color="primary" />
							</IconButton>
							</Tooltip>
							
							<Tooltip title="Add Quality">
							<IconButton aria-label="ExitToApp">
							<ExitToApp color="primary" />
							</IconButton>
						    </Tooltip>
							</TableCell>
						</TableRow>
				  ))
				: ""}
		</TableBody>
	);
};

export default TableContent;
