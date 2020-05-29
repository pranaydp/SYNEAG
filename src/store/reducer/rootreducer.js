/** @format */

import { combineReducers } from "redux";
import tempreducer from "./TempReducer/tempreducer";
import chart_reducer from "./Chartreducer/chart_reducer";
import contentreducer from "./ContentReducer/contentreducer";
import projectinfo_reducer from "./ProjectInfoReducer/ProjectInfoReducer";

const rootreducer = combineReducers({
	temp: tempreducer,
	chart: chart_reducer,
	content: contentreducer,
	projectinfo: projectinfo_reducer,
});

export default rootreducer;
