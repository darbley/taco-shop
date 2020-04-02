import React from 'react';
import './style.scss';
import Taco from '../../components/Taco/Taco';

class TacoBuilder extends React.Component {
    state = {
        ingredients: {
            tortilla: 1,
            beef: 1,
            chicken: 1,
            fish: 0,
            lettuce: 1,
            tomato: 1,
            onion: 1,
            salsa: 1,
            sourCream: 1,
            guacamole: 1,
            cilantro: 1
        }
    }

    render() {
        return (
            <div>
                <Taco ingredients={this.state.ingredients} />
                <div>Build Controls</div>
            </div>
        )
    }
}
export default TacoBuilder;