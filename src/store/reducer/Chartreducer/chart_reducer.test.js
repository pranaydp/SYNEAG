/** @format */

import * as actiontype from "../../actiontype/actiontypes";
import chart_reducer from "./chart_reducer";

describe("reducer checking", () => {
	it("return default null when no action passed", () => {
		const newstate = chart_reducer(null, {});
		expect(newstate).toBe(null);
	});

	it("return default null when no action passed", () => {
		const value = { Data: undefined };
		const newstate = chart_reducer(undefined, {
			type: actiontype.GET_CHARTDATA,
		});
		expect(newstate).toEqual(value);
	});
});
