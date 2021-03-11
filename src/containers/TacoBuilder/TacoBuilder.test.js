import React from 'react';
import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { TacoBuilder } from './TacoBuilder';
import BuildControls from '../../components/Taco/BuildControls/BuildControls';

configure({adapter: new Adapter()});

describe('TacoBuilder Component ',  () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<TacoBuilder onInitIngredients={() => {}} />);
    });

    it('should render the <BuildControls /> component when receiving ingredients prop', () => {
        wrapper.setProps({ rdx_ingredients: {beef: 0}});
        // Pass variable (not JSX) to find fn
        expect(wrapper.find(BuildControls)).toHaveLength(1);
    });


})
