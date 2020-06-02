/** @format */

import * as types from "../../actiontype/actiontypes";
import * as actions from "../Chart_actions/_chart_actions";

describe("actions", () => {
	it("returns an actions with type `GET_CHART`", () => {
		const action = actions._actionSucces(types.GET_CHARTDATA);
		//console.log(action.type);
		expect(action).toEqual({ type: types.GET_CHARTDATA });
	});
	it("returns an actions with type `CHART_ERROR`", () => {
		const action = actions._actionFailure(types.CHART_ERROR);
		//console.log(action.type);
		expect(action).toEqual({ type: types.CHART_ERROR });
	});
});
