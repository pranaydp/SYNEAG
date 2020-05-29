/** @format */

import { GET_MATURITYSCORE, CHART_ERROR } from "../../actiontype/actiontypes";

const initialState = {
	maturitydata: null,
	qualitydata: null,
};

const projectinfo_reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_MATURITYSCORE:
			debugger;
			return {
				...state,
				maturitydata: action.payload.data.maturityDetailsList,
				//dataset: action.payload.datasets,
			};

		default:
			return state;
	}
};

export default projectinfo_reducer;
