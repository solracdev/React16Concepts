
import React, { Component } from 'react';
import personClass from './Person.css';

class Person extends Component {
    render() {
        console.log("[Person.js] rendering...");
        return (
            <div className={personClass.Person} >
                <p onClick={this.props.click} > Hi, I'm a person! My name is {this.props.name} and I'm {this.props.age} years old</p>
                <p> {this.props.children}</p>
                <input
                    type="text"
                    onChange={this.props.change}
                    value={this.props.name} />
            </div >
        );
    };
}

export default Person;