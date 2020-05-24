/** @format */

import { combineReducers } from "redux";
import tempreducer from "./TempReducer/tempreducer";

const rootreducer = combineReducers({
	temp: tempreducer,
});

export default rootreducer;
