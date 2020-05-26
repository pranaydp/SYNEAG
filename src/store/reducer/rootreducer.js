/** @format */

import { combineReducers } from "redux";
import tempreducer from "./TempReducer/tempreducer";
import chart_reducer from "./Chartreducer/chart_reducer";

const rootreducer = combineReducers({
	temp: tempreducer,
	chart: chart_reducer,
});

export default rootreducer;
