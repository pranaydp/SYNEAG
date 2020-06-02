/** @format */

import React from "react";

import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import QualityScoreDetails from "./QualityScoreDetails";

Enzyme.configure({ adapter: new EnzymeAdapter() });
describe("Qualitu score details tests", () => {
	test("renders Quality components", () => {
		const props = { qualities: [] }; // { maturities: ["one", "two", "three"] };
		const wrapper = shallow(<QualityScoreDetails {...props} />);
		const component = wrapper.find('[data-test="quality-input"]');
		expect(component.length).toBe(1);
	});
	test("display  `no data availble message Component` if no data found", () => {
		const props = { qualities: [] };
		const wrapper = shallow(<QualityScoreDetails {...props} />);
		const component = wrapper.find('[data-test="no-data"]');
		expect(component.length).toBe(1);
	});
	test("Render  `Table component render` if  data found", () => {
		const props = { qualities: ["one"] };
		const wrapper = shallow(<QualityScoreDetails {...props} />);
		const component = wrapper.find('[data-test="table-input"]');
		expect(component.length).toBe(1);
	});
});
