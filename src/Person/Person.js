// Imports ract library component
import React from 'react';

// Import style file
import './Person.css';

// create the function that returns jsx with ES6 sintax
const person = (props) => {
    return (
        <div className="Person">
            {/* to use js code inside jsx we have to wraped it with {} */}
            <p onClick={props.click}>Hi, I'm a person! My name is {props.name} and I'm {props.age} years old</p>

            {/* to print the text between the opening and close tag componen, we use props.children */}
            <p>{props.children}</p>

            {/* create an input that will recieve the function to change the name */}
            <input type="text" onChange={props.change} value={props.name}/>
        </div>
    );
}

// Export the function
export default person;