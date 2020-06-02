/** @format */

import {
	GET_CHARTDATA,
	CHART_ERROR,
	LOADING,
} from "../../actiontype/actiontypes";

//get chart data and bind it
export function _actionSucces(TYPE, data) {
	return { type: TYPE, payload: data.data };
}

export function _actionFailure(TYPE, err) {
	return { type: TYPE, payload: err };
}

export const _get_chart = () => {
	return async (dispatch) => {
		try {
			debugger;
			_setLoading();
			const res = await fetch("http://localhost:5000/chartdata");
			const data = await res.json();
			console.log(res);
			res.status === 200
				? dispatch(_actionSucces(GET_CHARTDATA, data))
				: dispatch(_actionFailure(CHART_ERROR, data.error));
		} catch (err) {
			debugger;
			dispatch(_actionFailure(CHART_ERROR, err));
		}
	};
};

// set loading
export const _setLoading = () => (dispatch) => {
	dispatch({ type: LOADING });
};
