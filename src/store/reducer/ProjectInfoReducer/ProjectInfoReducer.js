/** @format */

import {
	GET_MATURITYSCORE,
	PROJECTINFO_GET,
	PROJECTINFO_ERROR,
	LOADING,
} from "../../actiontype/actiontypes";

const initialState = {
	maturitydata: null,
	qualitydata: null,
	loading: false,
	errmsg: null,
};

const projectinfo_reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_MATURITYSCORE:
			debugger;
			return {
				...state,
				maturitydata: action.payload.data.maturityDetailsList,
				qualitydata: action.payload.data.qualityDetailsList,
				loading: false,
				//dataset: action.payload.datasets,
			};
		case PROJECTINFO_GET:
			debugger;
			return {
				...state,
				projectinfodetails: action.payload.data.project,
				//dataset: action.payload.datasets,
			};
		case PROJECTINFO_ERROR:
			return {
				...state,
				errmsg: action.payload,
				loading: false,
			};
		case LOADING:
			return {
				...state,
				loading: true,
			};
		default:
			return state;
	}
};

export default projectinfo_reducer;
