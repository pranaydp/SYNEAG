/** @format */

import { GET_MATURITYSCORE, CHART_ERROR } from "../../actiontype/actiontypes";
import { PROJECTINFO_GET , PROJECTINFO_ERROR } from "../../actiontype/actiontypes";



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
			case PROJECTINFO_GET:
				debugger;
				return {
					...state,
					projectinfodetails: action.payload.data.project,
					//dataset: action.payload.datasets,
				};

			
		default:
			return state;
	}
};

export default projectinfo_reducer;
