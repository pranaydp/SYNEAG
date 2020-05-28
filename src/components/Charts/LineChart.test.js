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

test("Line chart need to display", () => {
	const props = null;
	const wrapper = setup();
	expect(wrapper.exists()).toBe(true);
});

test("Line chart need to display", () => {
	const props = null;
	const wrapper = setup();
	const congratsapp = wrapper.find('[data-test="Linechart-app"]');

	expect(congratsapp.length).toBe(1);
});
