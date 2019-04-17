import React from 'react';

const char = (props) => {
    // inline style
    const inlineStyle = {
        display: 'inline - block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black',
        width: '20px'
    }
    return (
        <div style={inlineStyle} onClick={props.clicked}>
            {props.character}
        </div>
    );
}

export default char;