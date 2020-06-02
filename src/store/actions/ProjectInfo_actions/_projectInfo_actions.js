/** @format */

import { GET_MATURITYSCORE, ERROR_LOGS } from "../../actiontype/actiontypes";
import {
	PROJECTINFO_GET,
	PROJECTINFO_ERROR,
} from "../../actiontype/actiontypes";

//create action creators from events
export function _actionSucces(data) {
	return { type: GET_MATURITYSCORE, payload: data };
}

export function _actionFailure(err) {
	return { type: ERROR_LOGS, payload: err };
}

///

export const _get_maturityqualityscore = () => {
	return async (dispatch) => {
		debugger;
		try {
			const res = await fetch("http://localhost:5000/projectinfo");
			const data = await res.json();

			dispatch(_actionSucces(data));
		} catch (error) {
			dispatch(_actionFailure(error));
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
};
