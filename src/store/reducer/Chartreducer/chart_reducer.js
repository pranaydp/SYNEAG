/** @format */

import { GET_CHARTDATA, CHART_ERROR } from "../../actiontype/actiontypes";

const initialState = {
	label: null,
	dataset: null,
};

const _chart_reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_CHARTDATA:
			debugger;
			return {
				...state,
				label: action.payload.labels,
				dataset: action.payload.datasets,
			};

		default:
			return state;
	}
};

export default _chart_reducer;
