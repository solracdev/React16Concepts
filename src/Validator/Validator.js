import React from 'react';

const validator = (props) => {

    const text = (props.length >= 5) ? "Text long enough" : "Text too short";

    return (
        <div>
            <p>{text}</p>
        </div>

    );
}

export default validator;