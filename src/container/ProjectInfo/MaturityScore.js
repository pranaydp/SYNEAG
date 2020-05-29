/** @format */
import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import DenseTable from "../../components/PorjectInfoDetails/MaturityDetails/MaturityScoreDetails";
import { _get_maturityqualityscore } from "../../store/actions/ProjectInfo_actions/_projectInfo_actions";
const MaturityScore = (props) => {
	const { _getmaturitydata } = props;

	useEffect(() => {
		debugger;
		setTimeout(() => {
			_getmaturitydata();
		}, 100);
	}, []);

	console.log("maturitydaad", props.maturity);
	return (
		<Fragment>
			<DenseTable maturities={props.maturity} />
		</Fragment>
	);
};

const mapstatetoprops = (state) => {
	return {
		maturity: state.projectinfo.maturitydata,
	};
};

const mapdispatchtoprops = (dispatch) => {
	return {
		_getmaturitydata: () => dispatch(_get_maturityqualityscore()),
	};
};

export default connect(mapstatetoprops, mapdispatchtoprops)(MaturityScore);
