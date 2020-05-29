/** @format */

import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Myproject from "../../container/Myproject";
import DenseTable from "../PorjectInfoDetails/MaturityDetails/MaturityScoreDetails";
import MaturityScore from "../../container/ProjectInfo/MaturityScore";
import QualityScore from "../../container/ProjectInfo/QualityScore";
const useStyles = makeStyles({
	root: {
		flexGrow: 1,
		maxWidth: 1500,
	},
});

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<Typography
			component='div'
			role='tabpanel'
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}>
			{children}
		</Typography>
	);
}

export default function TabMenu() {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className='card'>
			<Paper square className={classes.root}>
				<Tabs
					value={value}
					onChange={handleChange}
					//variant='fullWidth'
					indicatorColor='primary'
					textColor='primary'
					//aria-label='icon label tabs example'
				>
					<Tab hover='false' label='Maturity Score' />
					<Tab label='Quality Score' />
				</Tabs>
				<TabPanel value={value} index={0}>
					<MaturityScore />
				</TabPanel>
				<TabPanel value={value} index={1}>
					<QualityScore />
				</TabPanel>
			</Paper>
		</div>
	);
}
