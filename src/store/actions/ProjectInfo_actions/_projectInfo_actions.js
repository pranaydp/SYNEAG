/** @format */

import {
	GET_MATURITYSCORE,
	ERROR_LOGS,
	LOADING,
} from "../../actiontype/actiontypes";
import {
	PROJECTINFO_GET,
	PROJECTINFO_ERROR,
} from "../../actiontype/actiontypes";

//create action creators from events
export function _actionSucces(TYPE, data) {
	return { type: TYPE, payload: data };
}

export function _actionFailure(TYPE, err) {
	return { type: TYPE, payload: err };
}

///

export const _get_maturityqualityscore = () => {
	return async (dispatch) => {
		debugger;
		try {
			_setLoading();
			const res = await fetch("http://localhost:5000/projectinfo");
			const data = await res.json();

			res.status === 200
				? dispatch(_actionSucces(GET_MATURITYSCORE, data))
				: dispatch(_actionFailure(PROJECTINFO_ERROR, data.error));
		} catch (error) {
			dispatch(_actionFailure(PROJECTINFO_ERROR, error));
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

// set loading
export const _setLoading = () => (dispatch) => {
	dispatch({ type: LOADING });
};
