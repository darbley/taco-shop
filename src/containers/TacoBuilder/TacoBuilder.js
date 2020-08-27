import React from 'react';
import './style.scss';
import Taco from '../../components/Taco/Taco';
import BuildControls from '../../components/Taco/BuildControls/BuildControls';

class TacoBuilder extends React.Component {
    state = {
        ingredients: {
            tortilla: 0,
            beef: 0,
            chicken: 0,
            pork: 0,
            bean: 0,
            fish: 0,
            lettuce: 0,
            tomato: 0,
            onion: 0,
            salsa: 0,
            sourCream: 0,
            guacamole: 0,
            cilantro: 0
        }
    }

    render() {
        return (
            <div>
                <Taco ingredients={this.state.ingredients} />
                <BuildControls />
            </div>
        )
    }
}
export default TacoBuilder;