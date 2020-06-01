/** @format */

import React from "react";

import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { createStore } from "redux";
import { Chart } from "./Chart.js";
import chart_reducer from "../../store/reducer/Chartreducer/chart_reducer";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const findByAttr = (wrapper, val) => {
	return wrapper.find(`[data-test='${val}']`);
};

const storeFactory = (statevalue) => {
	return createStore(chart_reducer, statevalue);
};

const setup = (initialState = {}) => {
	const store = storeFactory(initialState);
	const wrapper = shallow(<Chart store={store} />);
	console.log(wrapper.debug());
	return wrapper;
};

setup();

describe("renders", () => {
	describe("Chart should be render", () => {
		let wrapper;
		beforeEach(() => {
			const initialState = { chart: 1 };
			wrapper = setup(initialState);
		});
		test("Chart render without error", () => {
			//const component = wrapper.find('[data-test="component-input"]');
			const component = findByAttr(wrapper, "component-input");
			//console.log(component.length);
			expect(component.length).toBe(1);
		});
		// test("should Chart render", () => {
		// 	const component = wrapper.find('[data-test="chart"]');
		// 	expect(component.length).toBe(1);
		// });
	});

	describe("Chart should not be render", () => {
		test("Chart render with error", () => {});
		test("Chart not render", () => {});
	});
});
