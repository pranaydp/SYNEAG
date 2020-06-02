/** @format */

import {
	GET_CHARTDATA,
	CHART_ERROR,
	LOADING,
} from "../../actiontype/actiontypes";

const initialState = {
	Data: null,
	errmsg: null,
	loading: false,
};

const _chart_reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_CHARTDATA:
			debugger;
			return {
				...state,
				Data: action.payload,
				loading: false,
				//dataset: action.payload.datasets,
			};
		case CHART_ERROR:
			debugger;
			console.log("errr", action.payload);
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

export default _chart_reducer;
