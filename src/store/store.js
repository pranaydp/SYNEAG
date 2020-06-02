/** @format */

import React from "react";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootreducer from "./reducer/rootreducer";

const initialState = {};
export const middleware = [thunk];

const store = createStore(
	rootreducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
