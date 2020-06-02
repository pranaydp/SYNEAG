/** @format */
import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import LineChart from "./LineChart";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}, state = null) => {
	const wrapper = shallow(<LineChart {...props} />);

	if (state) wrapper.setState(state);
	return wrapper;
};
describe("Render Line chart component", () => {
	test("Line chart need to display", () => {
		const props = { chart: [] };
		const wrapper = shallow(<LineChart {...props} />);
		expect(wrapper.exists()).toBe(true);
	});

	test("Line chart need to display", () => {
		const props = { chart: [] };
		const wrapper = shallow(<LineChart {...props} />);
		const congratsapp = wrapper.find('[data-test="Linechart-app"]');

		expect(congratsapp.length).toBe(1);
	});

	test("display  `no data availble message Component` if no data found", () => {
		const props = { chart: [] };
		const wrapper = shallow(<LineChart {...props} />);
		const component = wrapper.find('[data-test="no-data"]');
		expect(component.length).toBe(1);
	});
	test("Render  `Table component render` if  data found", () => {
		const props = { chart: ["one"] };
		const wrapper = shallow(<LineChart {...props} />);
		const component = wrapper.find('[data-test="chart-input"]');
		expect(component.length).toBe(1);
	});
});
