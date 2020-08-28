import React from 'react';
import './style.scss';

const Backdrop = (props) => (

    props.show ?
            <div className="backdrop" onClick={props.closeBackdrop}>
                backdrop
            </div>
        : null
)
export default Backdrop;