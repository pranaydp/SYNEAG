/** @format */
import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { Chart } from "./Chart";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}, state = null) => {
	const wrapper = shallow(<Chart {...props} />);

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
	const congratsapp = wrapper.find('[data-test="component-input"]');

	expect(congratsapp.length).toBe(1);
});
