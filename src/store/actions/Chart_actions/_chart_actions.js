/** @format */

import { GET_CHARTDATA, CHART_ERROR } from "../../actiontype/actiontypes";

//get chart data and bind it
export function _actionSucces(data) {
	return { type: GET_CHARTDATA, payload: data };
}

export function _actionFailure(err) {
	return { type: CHART_ERROR, payload: err };
}

export const _get_chart = () => {
	return async (dispatch) => {
		//console.log("", dataJSON);
		try {
			debugger;
			const res = await fetch("http://localhost:5000/chartdata");
			const data = await res.json();

			dispatch(_actionSucces(data));
		} catch (err) {
			dispatch(_actionFailure(err));
		}
	};
};
