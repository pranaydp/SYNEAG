/** @format */

import { GET_MATURITYSCORE, ERROR_LOGS } from "../../actiontype/actiontypes";
import { PROJECTINFO_GET , PROJECTINFO_ERROR } from "../../actiontype/actiontypes";

export const _get_maturityqualityscore = () => {
	return async (dispatch) => {
		debugger;
		try {
			const res = await fetch("http://localhost:5000/projectinfo");
			const data = await res.json();

			dispatch({ type: GET_MATURITYSCORE, payload: data });
		} catch (error) {
			dispatch({ type: ERROR_LOGS, payload: error });
		}
	};
};

export const _get_projectinfodetails = () => {
	return async (dispatch) => {
		debugger;
		try {
			const res = await fetch("http://localhost:5000/projectinfo");
			const data = await res.json();

			dispatch({ type: PROJECTINFO_GET, payload: data });
		} catch (error) {
			dispatch({ type: PROJECTINFO_ERROR, payload: error });
		}
	};
}
