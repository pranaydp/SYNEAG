/** @format */

import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = (props) => {
	console.log(props.data);
	const { label, dataset } = props.data;
	//const [maturity, quality] = dataset;
	console.log(dataset);
	const state = {
		labels: label,
		datasets: [
			{
				label: "Maturity score",
				fill: false,
				lineTension: 0.5,
				borderColor: "rgba(0,0,0,1)",
				borderWidth: 2,
				data: [65, 59, 80, 81, 56],
			},
			{
				label: "Quality score",
				fill: false,
				lineTension: 0.5,
				backgroundColor: "rgba(75,192,192,1)",

				borderWidth: 2,
				data: [68, 50, 70, 88, 46],
			},
		],
	};

	return (
		<div>
			<Line
				data={state}
				options={{
					title: {
						display: true,
						text: "",
						fontSize: 20,
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
