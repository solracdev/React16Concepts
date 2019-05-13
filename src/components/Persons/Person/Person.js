
import React, { Component } from 'react';
import personClass from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    // access to the contextType, onlye available in class component
    static contextType = AuthContext;

    componentDidMount() {
        // old way
        //this.inputElement.focus();
        this.inputElementRef.current.focus();

        // access the context thanks to the static variable (contextType)
        console.log("Is user authenticated: " + this.context.authenticated);
    }

    render() {
        console.log("[Person.js] rendering...");
        return (
            <Aux className={personClass.Person} >

                {this.context.authenticated ? <p>Authenticated!</p> : <p>Please Log in</p>}

                <p onClick={this.props.click} > Hi, I'm a person! My name is {this.props.name} and I'm {this.props.age} years old</p>
                <p key="i2"> {this.props.children}</p>
                <input
                    key="i3"
                    // reference old way
                    //ref={(inputElement) => { this.inputElement = inputElement }}
                    ref={this.inputElementRef}
                    type="text"
                    onChange={this.props.change}
                    value={this.props.name} />
            </Aux >
        );
    };
}

// With the package prop-types whe can define the type of the props for each attribute
// so if we define the property name as a string and we pass a number, it will throw a warning
// Person.propsTypes = {
//     click: PropTypes.func,
//     name: PropTypes.string,
//     age: PropTypes.number,
//     change: PropTypes.func
// };

export default withClass(Person, personClass.Person);