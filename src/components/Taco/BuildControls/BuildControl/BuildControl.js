import React from 'react';
import './style.scss';

const BuildControl = (props) => (
        <div className="build-control">
            <h4>{props.label}</h4>
            <button>Less</button>
            <button>More</button>
        </div>
)
export default BuildControl;