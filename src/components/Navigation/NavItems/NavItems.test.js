import React from 'react';
import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavItems from './NavItems';
import NavItem from './NavItem/NavItem';

configure({adapter: new Adapter()});

describe('NavItems ',  () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<NavItems />);
    });

    it('should render two NavItems elements if user not authenticated', () => {
        // Pass JSX to shallow fn
        // const wrapper = shallow(<NavItems />);
        // Pass variable (not JSX) to find fn
        expect(wrapper.find(NavItem)).toHaveLength(2);
    });

    it('should render three NavItems elements if user is authenticated', () => {
        // Pass JSX to shallow fn
        // const wrapper = shallow(<NavItems isAuth={true}/>);
        wrapper.setProps({isAuth: true});
        // Pass variable (not JSX) to find fn
        expect(wrapper.find(NavItem)).toHaveLength(3);
    });

    it('should render the logout link if user is authenticated', () => {
        wrapper.setProps({isAuth: true});
        // Pass variable (not JSX) to find fn
        expect(wrapper.contains(<NavItem link="/logout" exact>Logout</NavItem>)).toEqual(true);
    });

})