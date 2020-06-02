/** @format */
import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import QualityTable from "../../components/PorjectInfoDetails/QualityDetails/QualityScoreDetails";
import { _get_maturityqualityscore } from "../../store/actions/ProjectInfo_actions/_projectInfo_actions";
import Spinner from "../../components/Spinner/Spinner";
import JustifyContent from "../../components/Common/Box/ErrBox";
export const QualityScore = (props) => {
	const { _getqualitydata } = props;

	useEffect(() => {
		debugger;
		setTimeout(() => {
			_getqualitydata();
		}, 100);
	}, []);

	console.log("maturitydaad", props.quality);
	if (props.quality === null) return <Spinner data-test='spinner' />;

	return (
		<div data-test='component-input'>
			<QualityTable data-test='Quality-table' qualities={props.quality} />
		</div>
	);
};

const mapstatetoprops = (state) => {
	return {
		quality: state.projectinfo.qualitydata,
	};
};

const mapdispatchtoprops = (dispatch) => {
	return {
		_getqualitydata: () => dispatch(_get_maturityqualityscore()),
	};
};

export default connect(mapstatetoprops, mapdispatchtoprops)(QualityScore);
