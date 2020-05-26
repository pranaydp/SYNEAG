/** @format */

import React, { Fragment, Component } from "react";
import LineChart from "../components/Charts/LineChart";

import { connect } from "react-redux";
import { _get_chart } from "../store/actions/_chart_actions";

class Chart extends Component {
	componentDidMount() {
		this.props.get_chart();
	}
	render() {
		debugger;
		console.log(this.props.chart);
		return (
			<Fragment>
				<LineChart data={this.props.chart} />
			</Fragment>
		);
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
