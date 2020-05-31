import React from 'react';
import Enzyme , { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Projectinfodetails from "./Projectinfodetails";

Enzyme.configure({ adapter: new Adapter()});

describe('Projectinfodetails', () => {
    it('should show text', () => {
        const wrapper = shallow(<Projectinfodetails/>);
        const text = wrapper.find('Fragment');
        expect(text.text()).toBe('Project ManagerFrameworkSub FrameworkProject Description')
    });
});
