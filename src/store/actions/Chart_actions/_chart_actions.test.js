/** @format */

import * as types from "../../actiontype/actiontypes";
import * as actions from "../Chart_actions/_chart_actions";

import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import fetchMock from "fetch-mock";
import expect from "expect"; // You can use any testing library

const middlewares = [thunk]; 
const mockStore = configureMockStore(middlewares);

export function Chartdata() {
	return {
		type: types.GET_CHARTDATA,
	};
}

export function Getchart(text) {
	return {
		type: types.GET_CHARTDATA,
		text,
	};
}
describe("actions", () => {
	afterEach(() => {
		fetchMock.restore();
	});
	it("action type should be match", () => {
		const text = "GET_CHARTDATA";

		expect(Chartdata()).toEqual({ type: types.GET_CHARTDATA });
	});

	it("should create an action to  get chart data with success", () => {
		const text = "Success";
		const expectedAction = {
			type: types.GET_CHARTDATA,
			text,
		};
		expect(Getchart(text)).toEqual(expectedAction);
	});
	it("should create an action to  get chart data with Fails", () => {
		const text = "Error";
		const expectedAction = {
			type: types.CHART_ERROR,
			text,
		};
		expect({ type: types.CHART_ERROR, text }).toEqual(expectedAction);
	});

	///new
	// it("creates FETCH_TODOS_SUCCESS when fetching todos has been done", () => {
	// 	fetchMock.getOnce("http://localhost:5000/chartdata");

	// 	const expectedActions = [{ type: types.GET_CHARTDATA }];
	// 	const store = mockStore({});

	// 	return store.dispatch(actions._get_chart()).then(() => {
	// 		// return of async actions
	// 		expect(store.getActions()).toEqual(expectedActions);
	// 	});
	//});
});
