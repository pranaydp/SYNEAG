/** @format */

import { combineReducers } from "redux";
import tempreducer from "./TempReducer/tempreducer";
import chart_reducer from "./Chartreducer/chart_reducer";
import contentreducer from "./ContentReducer/contentreducer";
import scorereducer from "./ScoreReducer/ScoreReducer";

const rootreducer = combineReducers({
	temp: tempreducer,
	chart: chart_reducer,
	content: contentreducer,
	score: scorereducer,
});

export default rootreducer;
