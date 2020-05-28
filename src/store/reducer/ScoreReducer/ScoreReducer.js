/** @format */

import { GET_MATURITYSCORE, CHART_ERROR } from "../../actiontype/actiontypes";

const initialState = {
	scoredata: null,
};

const score_reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_MATURITYSCORE:
			debugger;
			return {
				...state,
				scoredata: action.payload,
				//dataset: action.payload.datasets,
			};

		default:
			return state;
	}
};

export default score_reducer;
