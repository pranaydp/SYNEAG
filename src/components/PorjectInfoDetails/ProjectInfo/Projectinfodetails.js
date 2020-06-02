/** @format */

import React, { Fragment } from "react";
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";


import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	root: {
		minWidth: 275,
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)",
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
});
export default function ProjectInfoDetails(props) {
	debugger;
	const classes = useStyles();
	const { projectinfodata } = props;

	console.log("projectinfodata", projectinfodata);
	const bull = <span className={classes.bullet}>•</span>;

	return (
		<Fragment>
			<Card component={Paper} className="card">
				<CardContent>
					<Typography
						className={classes.title}
						color='primary'
						component='h3'
						gutterBottom>
						{projectinfodata && projectinfodata.projectName}
					</Typography>
					<Typography
						className={classes.title}
						color='textSecondary'
						gutterBottom>
						Project Manager
					</Typography>
					<Typography className={classes.title}>
						{projectinfodata && projectinfodata.programManagers[0]}
					</Typography>
					<div className='row'>
						<div className='col-lg-6 col-xs-12 col-md-6'>
							<div style={{ display: "flex", alignItems: "center" }}>
								<ErrorOutlineIcon color='primary' />
								<Typography
									className={classes.title}
									style={{ paddingLeft: "4px" }}
									color='textSecondary'
									gutterBottom>
									Framework
								</Typography>
							</div>
							<Typography
								className={classes.pos}
								style={{ paddingLeft: "24px" }}>
								{projectinfodata && projectinfodata.frameworkType}
							</Typography>
						</div>

						<div className='col-lg-6 col-xs-12 col-md-6'>
							<div style={{ display: "flex", alignItems: "center" }}>
								<ErrorOutlineIcon color='primary' />
								<Typography
									className={classes.title}
									style={{ paddingLeft: "4px" }}
									color='textSecondary'
									gutterBottom>
									Sub Framework
								</Typography>
							</div>

							<Typography
								className={classes.pos}
								style={{ paddingLeft: "24px" }}>
								{projectinfodata && projectinfodata.frameworkSubtype}
							</Typography>
						</div>
					</div>

					<Typography
						className={classes.title}
						color='textSecondary'
						gutterBottom>
						Project Description
					</Typography>
					<TextareaAutosize
						style={{ width: "350px" }}
						height={250}
						rowsMax={55}
						aria-label='maximum height'
						placeholder='Maximum 4 rows'
						defaultValue={projectinfodata && projectinfodata.projectDescription}
					/>
				</CardContent>
			</Card>
		</Fragment>
	);
}
