/** @format */

import * as types from "../../actiontype/actiontypes";
import * as actions from "../Chart_actions/_chart_actions";

describe("actions", () => {
	it("returns an actions with type `GET_CHART`", () => {
		const action = actions._actionSucces();
		//console.log(action.type);
		expect(action).toEqual({ type: types.GET_CHARTDATA });
	});
	it("returns an actions with type `CHART_ERROR`", () => {
		const action = actions._actionFailure();
		//console.log(action.type);
		expect(action).toEqual({ type: types.CHART_ERROR });
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
