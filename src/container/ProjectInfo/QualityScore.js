/** @format */
import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import QualityTable from "../../components/PorjectInfoDetails/QualityDetails/QualityScoreDetails";
import { _get_maturityqualityscore } from "../../store/actions/ProjectInfo_actions/_projectInfo_actions";
import Spinner from "../../components/Spinner/Spinner";
import JustifyContent from "../../components/Common/Box/ErrBox";
import ErrorContent from "../../components/Common/Box/ErrContent";
export const QualityScore = (props) => {
	const { _getqualitydata } = props;
	const { loading, error, quality } = props;

	useEffect(() => {
		debugger;
		setTimeout(() => {
			_getqualitydata();
		}, 100);
	}, []);

	console.log("maturitydaad", props.quality);
	if ((loading || quality === null) && error === null)
		return <Spinner data-test='spinner' />;

	return !error ? (
		<div data-test='component-input'>
			<QualityTable data-test='Quality-table' qualities={props.quality} />
		</div>
	) : (
		<ErrorContent err={error} />
	);
};

const mapstatetoprops = (state) => {
	return {
		quality: state.projectinfo.qualitydata,
		loading: state.projectinfo.loading,
		error: state.projectinfo.errmsg,
	};
};

const mapdispatchtoprops = (dispatch) => {
	return {
		_getqualitydata: () => dispatch(_get_maturityqualityscore()),
	};
};

export default connect(mapstatetoprops, mapdispatchtoprops)(QualityScore);
