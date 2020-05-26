/** @format */

import { GET_CHARTDATA, CHART_ERROR } from "../actiontype/actiontypes";

import dataJSON from "../../components/Charts/db.json";

//get chart data and bind it
export const _get_chart = () => {
	return async (dispatch) => {
		//console.log("", dataJSON);
		try {
			debugger;
			const res = await fetch("http://localhost:5000/chartdata");
			const data = await res.json();

			dispatch({ type: GET_CHARTDATA, payload: data });
		} catch (err) {
			dispatch({ type: CHART_ERROR, payload: err });
		}
	};
};
