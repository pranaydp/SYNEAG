/** @format */

import React from "react";

import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { createStore, applyMiddleware } from "redux";
import { QualityScore } from "./QualityScore.js";
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
	const wrapper = shallow(<QualityScore store={store} {...props} />);
	console.log(wrapper.debug());
	return wrapper;
};

setup();

describe("renders", () => {
	describe("Quality score details should be render", () => {
		let wrapper;
		beforeEach(() => {
			const initialState = { quality: [] };
			const props = { quality: [] };
			wrapper = setup(initialState, props);
		});
		test("Render Quality score component ", () => {
			const component = findByAttr(wrapper, "component-input");
			expect(component.length).toBe(1);
		});

		test("If Null then render `spinner`components", () => {
			const props = { quality: null };
			const wrapper = shallow(<QualityScore {...props} />);
			const congratsapp = wrapper.find('[data-test="spinner"]');

			expect(congratsapp.length).toBe(1);
		});
		test("If not Null then render `Table`components", () => {
			const props = { quality: ["1"] };
			const wrapper = shallow(<QualityScore {...props} />);
			const congratsapp = wrapper.find('[data-test="Quality-table"]');

			expect(congratsapp.length).toBe(1);
		});
	});
});
