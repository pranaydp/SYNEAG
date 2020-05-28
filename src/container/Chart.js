/** @format */

import React, { Fragment, Component } from "react";
import LineChart from "../components/Charts/LineChart";

import { connect } from "react-redux";
import { _get_chart } from "../store/actions/Chart_actions/_chart_actions";
import Spinner from "../components/Spinner/Spinner";

class Chart extends Component {
	componentDidMount() {
		this.props.get_chart();
	}
	render() {
		let montharr = [];
		let qualityarr = [];
		let maturityarr = [];
		if (this.props.chart.Data !== null) {
			debugger;
			this.props.chart.Data.map((record) => {
				montharr.push(record.month);
				qualityarr.push(record.qualityScore);
				maturityarr.push(record.maturityScore);
			});
			//console.log("playername", playername);
		}
		debugger;
		console.log("data", this.props.chart.Data);

		if (this.props.chart.Data === null) {
			return <Spinner />;
		} else {
			return (
				<Fragment>
					<LineChart
						month={montharr}
						maturity={maturityarr}
						quality={qualityarr}
						data={this.props.chart}
					/>
				</Fragment>
			);
		}
	}
}

const mapStatetoprops = (state) => {
	return {
		chart: state.chart,
	};
};

const mapDispatchtoprops = (dispatch) => {
	return {
		get_chart: () => dispatch(_get_chart()),
	};
};
export default connect(mapStatetoprops, mapDispatchtoprops)(Chart);
