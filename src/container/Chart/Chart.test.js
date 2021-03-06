/** @format */

import React from "react";

import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { createStore, applyMiddleware } from "redux";
import { Chart } from "./Chart.js";
import { middleware } from "../../store/store";
import chart_reducer from "../../store/reducer/ProjectInfoReducer/ProjectInfoReducer";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const findByAttr = (wrapper, val) => {
	return wrapper.find(`[data-test='${val}']`);
};

const storeFactory = (statevalue) => {
	return createStore(chart_reducer, statevalue);
};

const setup = (initialState = {}, props = {}) => {
	const store = storeFactory(initialState);
	const wrapper = shallow(<Chart store={store} {...props} />);
	console.log(wrapper.debug());
	return wrapper;
};

setup();

describe("renders", () => {
	describe("Maturity score details should be render", () => {
		let wrapper;
		beforeEach(() => {
			const initialState = { chart: [] };
			const props = { chart: [] };
			wrapper = setup(initialState, props);
		});
		test("Render maturity score component ", () => {
			const component = findByAttr(wrapper, "component-input");
			expect(component.length).toBe(1);
		});

		test("If Null then render `spinner`components", () => {
			const props = { chart: null };
			const wrapper = shallow(<Chart {...props} />);
			const congratsapp = wrapper.find('[data-test="spinner"]');

			expect(congratsapp.length).toBe(1);
		});
		test("If not Null then render `Table`components", () => {
			const props = { chart: ["1"] };
			const wrapper = shallow(<Chart {...props} />);
			const congratsapp = wrapper.find('[data-test="Chart-input"]');

			expect(congratsapp.length).toBe(1);
		});
	});
});
