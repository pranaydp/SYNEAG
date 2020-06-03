/** @format */

import React, { Fragment, Component, useEffect } from "react";
import LineChart from "../../components/Charts/LineChart";

import { connect } from "react-redux";
import { _get_chart } from "../../store/actions/Chart_actions/_chart_actions";
import Spinner from "../../components/Spinner/Spinner";
import ErrorContent from "../../components/Common/Box/ErrContent";

export const Chart = (props) => {
	const { get_chart } = props;
	const { loading, error, chart } = props;

	useEffect(() => {
		get_chart();
	}, []);

	debugger;
	//console.log("data", this.props.chart);

	if ((loading || chart === null) && error === null) {
		return <Spinner data-test='spinner' />;
	}

	return !error ? (
		<div className='card' data-test='component-input'>
			<LineChart data-test='Chart-input' chart={chart} />{" "}
		</div>
	) : (
		<div>
			<ErrorContent err={error} />
		</div>
	);
};

const mapStatetoprops = (state) => {
	return {
		chart: state.chart.Data,
		loading: state.chart.loading,
		error: state.chart.errmsg,
	};
};

const mapDispatchtoprops = (dispatch) => {
	return {
		get_chart: () => dispatch(_get_chart()),
	};
};
export default connect(mapStatetoprops, mapDispatchtoprops)(Chart);
