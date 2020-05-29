/** @format */

import { GET_MATURITYSCORE, ERROR_LOGS } from "../../actiontype/actiontypes";

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
