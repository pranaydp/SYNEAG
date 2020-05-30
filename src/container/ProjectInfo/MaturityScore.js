/** @format */
import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import MaturityTable from "../../components/PorjectInfoDetails/MaturityDetails/MaturityScoreDetails";
import { _get_maturityqualityscore } from "../../store/actions/ProjectInfo_actions/_projectInfo_actions";
import Spinner from "../../components/Spinner/Spinner";
import JustifyContent from "../../components/Common/Box/ErrBox";
const MaturityScore = (props) => {
	const { _getmaturitydata } = props;

	useEffect(() => {
		debugger;
		setTimeout(() => {
			_getmaturitydata();
		}, 100);
	}, []);

	console.log("maturitydaad", props.maturity);
	if (props.maturity === null) return <Spinner />;

	return (
		<div>
			{props.maturity.length > 0 ? (
				<MaturityTable maturities={props.maturity} />
			) : (
				<JustifyContent v={9} />
			)}
		</div>
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
