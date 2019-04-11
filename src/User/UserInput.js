import React from 'react';

const userInput = props => {

    let styleObj = {
        border: '1px solid red'
    }
    return (
        <input style={styleObj} type="text" onChange={props.change} value={props.name} />
    );
}

export default userInput;