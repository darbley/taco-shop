import React from 'react';
import './style.scss';

const Backdrop = (props) => {
    console.log('back props ',props);
    return(

    props.show ?
            <div className="backdrop" onClick={props.closeBackdrop}>
                backdrop
            </div>
        : null
)}
export default Backdrop;