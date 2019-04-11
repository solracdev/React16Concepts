import React from 'react';
import './User.css';

const userOutput = props => {

    return (
        <div className="UserOutput">
            <p>I'm {props.name}</p>
            <p>{props.children}</p>
        </div>
    );
}

export default userOutput;