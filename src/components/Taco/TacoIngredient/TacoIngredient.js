import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import TacoShell from './i/taco-shell.png';
import TacoShellSoft from './i/taco-shell.png';

class TacoIngredient extends React.Component{

    render() {
        let ingredient = null;

        switch(this.props.type){
            case('bread-bottom'):
                ingredient = <div className={`bread-bottom`}></div>;
                break;
            case('bread-top'):
                ingredient = (
                                <div>
                                    <div className="seeds-1"></div>
                                    <div className="seeds-2"></div>
                                </div>
                            );
                break;
            case('tortilla'): 
                    ingredient = (
                        <div>
                            <img src={TacoShell} className={ingredient} alt={ingredient} />
                        </div>
                    );
                break;
            case('tortillaSoft'): 
                ingredient = (
                    <div>
                        <img src={TacoShellSoft} className="tortilla-soft" alt={ingredient} />
                    </div>
                );
                break;
            case('beef'):
                ingredient = <div className="beef"></div>;
                break;
            case('chicken'):
                ingredient = <div className="chicken"></div>;
                break;
            case('fish'):
                ingredient = <div className="fish"></div>;
                break;
            case('lettuce'):
                ingredient = <div className="lettuce"></div>;
                break;
            case('onions'):
                ingredient = <div className="onion"></div>;
                break;
            case('tomato'):
                ingredient = <div className="tomato"></div>;
                break;
            case('cheese'):
                ingredient = <div className="cheese"></div>;
                break;
            case('salsa'):
                ingredient = <div className="salsa"></div>;
                break;
            case('sourCream'):
                ingredient = <div className="sour-cream"></div>;
                break;
            case('guacamole'):
                ingredient = <div className="guacamole"></div>;
                break;
            case('cilantro'):
                ingredient = <div className="guacamole"></div>;
                break;

            default:
                ingredient = null;
        }
        
        return ingredient;

    }
} 

export default TacoIngredient;

TacoIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

