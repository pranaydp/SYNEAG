/** @format */

import React from "react";
import { Line } from "react-chartjs-2";
import JustifyContent from "../Common/Box/ErrBox";

const LineChart = (props) => {
	//	console.log(props.data);
	//const { maturity, quality } = props.chart;
	let montharr = [];
	let qualityarr = [];
	let maturityarr = [];
	if (props.chart !== null) {
		debugger;
		props.chart.map((record) => {
			montharr.push(record.monthYear);
			qualityarr.push(record.qualityScore);
			maturityarr.push(record.maturityPercentage);
		});
		//console.log("playername", playername);
	}
	const state = {
		labels: montharr,
		datasets: [
			{
				label: "Maturity score",
				fill: false,
				lineTension: 0.1,
				borderColor: "rgba(0,0,255,1)",
				borderWidth: 1.5,
				data: maturityarr,
			},

			{
				label: "Quality score",
				fill: false,
				lineTension: 0.1,
				backgroundColor: "rgba(249, 180, 45,1)",
				borderColor: "rgba(255,0,0,1)",
				borderWidth: 1.5,
				data: qualityarr,
			},
		],
	};

	return (
		<div data-test='Linechart-app'>
			{props.chart.length > 0 ? (
				<Line
					data-test='chart-input'
					data={state}
					height={"174px"}
					options={{
						title: {
							display: true,
							text: "Maturity Score and Quality Score Trend",
							fontSize: 12,
						},
						legend: {
							display: true,
							position: "bottom",
						},
					}}
				/>
			) : (
				<div data-test='no-data'>
					<JustifyContent v={15} />
				</div>
			)}
		</div>
	);
};

export default LineChart;
