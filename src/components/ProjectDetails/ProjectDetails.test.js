import React from 'react';
import Enzyme , { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProjectDetails from "./ProjectDetails";

Enzyme.configure({ adapter: new Adapter()});

describe('Projectinfodetails', () => {
    it('should show text', () => {
        const wrapper = shallow(<ProjectDetails/>);
        const text = wrapper.find('h5');
        expect(text.text()).toBe('My Projects')
    });
});

describe('With Enzyme', () => {
  it('App shows "About"', () => {
    const about = shallow(
      <ProjectDetails/>
    ).dive()
    expect(about.find('h5').text()).toEqual('My Projects')
  })
})