import React, { Component } from 'react';

const AsyncComponent = (importComponentFn) => {
    return class extends Component {
        state = {
            component: null
        }

        componentDidMount(){
            importComponentFn()
                .then((component) => {
                    console.log('component ',component);
                    this.setState({
                        component: component.default
                    });
                })
        }

        render(){
            const Cmp = this.state.component;

            return(
                // If there's a commponent set, render it and spread any props if there were any.  Otherwise do nothing.
                Cmp ? <Cmp {...this.props} /> : null
            )
        }
    }
}

export default AsyncComponent;