/** @format */

import React from "react";

import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import MaturityScoreDetails from "./MaturityScoreDetails";

Enzyme.configure({ adapter: new EnzymeAdapter() });
describe("Maturity score details tests", () => {
	test("renders Maturity components", () => {
		const props = { maturities: [] }; // { maturities: ["one", "two", "three"] };
		const wrapper = shallow(<MaturityScoreDetails {...props} />);
		const component = wrapper.find('[data-test="maturity-input"]');
		expect(component.length).toBe(1);
	});
	test("display  `no data availble message` if no data found", () => {
		const props = { maturities: [] };
		const wrapper = shallow(<MaturityScoreDetails {...props} />);
		const component = wrapper.find('[data-test="no-data"]');
		expect(component.length).toBe(1);
	});
	test("Render  `Table component render` if  data found", () => {
		const props = { maturities: ["one"] };
		const wrapper = shallow(<MaturityScoreDetails {...props} />);
		const component = wrapper.find('[data-test="table-input"]');
		expect(component.length).toBe(1);
	});
});
