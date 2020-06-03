/** @format */
import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import MaturityTable from "../../components/PorjectInfoDetails/MaturityDetails/MaturityScoreDetails";
import { _get_maturityqualityscore } from "../../store/actions/ProjectInfo_actions/_projectInfo_actions";
import Spinner from "../../components/Spinner/Spinner";
import JustifyContent from "../../components/Common/Box/ErrBox";
import Projectinfo from "./Projectinfo";
import ErrorContent from "../../components/Common/Box/ErrContent";
export const MaturityScore = (props) => {
	const { _getmaturitydata } = props;
	const { loading, error, maturity } = props;
	useEffect(() => {
		debugger;
		setTimeout(() => {
			_getmaturitydata();
		}, 100);
	}, []);

	console.log("maturitydaad", maturity);
	if ((loading || maturity === null) && error === null)
		return <Spinner data-test='spinner' />;

	return !error ? (
		<div className='' data-test='component-input'>
			<MaturityTable data-test='Maturity-table' maturities={maturity} />
		</div>
	) : (
		<div>
			<ErrorContent err={error} />
		</div>
	);
};

const mapstatetoprops = (state) => {
	return {
		maturity: state.projectinfo.maturitydata,
		loading: state.projectinfo.loading,
		error: state.projectinfo.errmsg,
	};
};

const mapdispatchtoprops = (dispatch) => {
	return {
		_getmaturitydata: () => dispatch(_get_maturityqualityscore()),
	};
};

export default connect(mapstatetoprops, mapdispatchtoprops)(MaturityScore);
