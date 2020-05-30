/** @format */

import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = (props) => {
	console.log(props.data);
	const { maturity, quality } = props;
	const state = {
		labels: props.month,
		datasets: [
			{
				label: "Maturity score",
				fill: false,
				lineTension: 0.1,
				borderColor: "rgba(0,0,255,1)",
				borderWidth: 1.5,
				data: maturity,
			},

			{
				label: "Quality score",
				fill: false,
				lineTension: 0.1,
				backgroundColor: "rgba(249, 180, 45,1)",
				borderColor: "rgba(255,0,0,1)",
				borderWidth: 1.5,
				data: quality,
			},
		],
	};

	return (
		<div data-test='Linechart-app'>
			<Line
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
		</div>
	);
};

export default LineChart;
