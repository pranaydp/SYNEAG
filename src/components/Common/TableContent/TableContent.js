/** @format */

import React from "react";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Tooltip from '@material-ui/core/Tooltip';
import QueuePlayNext from '@material-ui/icons/QueuePlayNext';
import ExitToApp from '@material-ui/icons/ExitToApp';
import AddToQueue from '@material-ui/icons/AddToQueue';


import IconButton from '@material-ui/core/IconButton';

const TableContent = (props) => {

	return (
		<TableBody>
			{props.content !== null
				? props.content.map((row) => ( 
						<TableRow hover key={row.name}>
						{row.extensionApproved === true ?
							<TableCell component='th' scope='row' align='center' style={{ color:"red"}}>
								{row.projectName}
							</TableCell> : <TableCell component='th' scope='row' align='center'>
							{row.projectName}
						    </TableCell> }
							<TableCell align='center'>{row.FrameworkType}</TableCell>
							<TableCell align='center'>{row.FrameworkSubtype}</TableCell>
							<TableCell align='center'> 
							{row.onBoard === true ?
							<Tooltip title="OnBoard">
							<IconButton aria-label="AddToQueue">
                            <AddToQueue color="primary" />
							</IconButton>
							</Tooltip> : ""}
							{row.addMaturities === true ?
							<Tooltip title="Add Maturity">
							<IconButton aria-label="QueuePlayNext">
                            <QueuePlayNext color="primary" />
							</IconButton>
							</Tooltip> : ""}
							
							{row.addQuality === true ?
							<Tooltip title="Add Quality">
							<IconButton aria-label="ExitToApp">
							<ExitToApp color="primary" />
							</IconButton>
						    </Tooltip> : ""}
							</TableCell>
						</TableRow>
				  ))
				: ""}
		</TableBody>
	);
};

export default TableContent;
