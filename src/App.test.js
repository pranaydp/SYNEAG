/** @format */
/** @format */
import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}, state = null) => {
	const wrapper = shallow(<App {...props} />);

	if (state) wrapper.setState(state);
	return wrapper;
};

test("App  need to display", () => {
	const props = null;
	const wrapper = setup();
	expect(wrapper.exists()).toBe(true);
});
