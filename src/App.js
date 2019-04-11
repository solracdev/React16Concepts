import React, { Component } from 'react';
import './App.css';
// Import our Person component
import Person from './Person/Person';

class App extends Component {

  // state is a special property only availabe within a class that extends Component
  // in the later versions of react it's possible to use it in components functions
  state = {
    persons: [
      { name: 'Carlos', age: 30 },
      { name: 'Paco', age: 50 },
      { name: 'Foo', age: 10 }
    ]
  }

  switchNameHandler = newName => {
    // DONT DO THIS this.state.persons[0].name = "JHON DOE";
    // to change the state property we can use the method setState include in the Component
    this.setState({
      persons: [
        { name: newName, age: 80 },
        { name: 'Jhon Doe', age: 66 },
        { name: 'Foo Foo', age: 16 }
      ]
    });
  }

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: "Carlos XX", age: 80 },
        { name: event.target.value, age: 66 },
        { name: 'Foo Foo', age: 16 }
      ]
    });
  }

  render() {
    // use css style a js object
    let styleObj = {
      backgroundColor: 'white',
      font: 'inherit',
      boder: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    
    return (
      <div className='App'>
        <h1>Hi, from the react app!</h1>
        <p>I'm running from a docker container!</p>

        {/* calling the function without (), because calling it with switchNameHandler()
         will render automatically on DOM render */}
        <button
        style={styleObj} 
        onClick={this.switchNameHandler.bind(this, "Carlos IX")}>Switch Names</button>

        {/* another way to call the function with arguments is using flat arrow function */}
        {/* this one is more inefficient may impact in performance */}
        {/* <button onClick={() => this.switchNameHandler("King Carlos II")}>Switch Names</button> */}

        {/* Use the component that we just have imported */}
        {/* Pass variables value to the props in the function Person */}
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        {/* To use the text between the component we'll use the props.children in the function */}
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Amateratsu")}
          change={this.nameChangeHandler}>My hobbies: racing </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;

// How to use react Hook instead extends component
// first import useState
//import React, { useState } from 'react';

// react Hooks
// create function instead class
// const app = props => {

//   // setState from react Hook returns always two elements
//   // the first element is always the current object
//   // the second element is a function that allow us to update / change the state
//   // using js Destructuring we cant store those values in an array
//   const [personState, setPersonState] = useState({
//     persons: [
//       { name: 'Carlos', age: 30 },
//       { name: 'Paco', age: 50 },
//       { name: 'Foo', age: 10 }
//     ]
//   });

//   // when we use react hook the function ( in this cade setPersonState ), doest not merge the changes
//   // so we need to call useState again, we dont need to pass an object, just a string will work too
//   const [otherState, setOtherState] = useState("some random value");

//   console.log(personState, otherState);

//   const switchNameHandler = () => {
//     setPersonState({
//       persons: [
//         { name: 'Carlos VII', age: 80 },
//         { name: 'Jhon Doe', age: 66 },
//         { name: 'Foo Foo', age: 16 }
//       ]
//     });
//   }

//   return (
//     <div className='App'>
//       <h1>Hi, from the react app!</h1>
//       <p>I'm running from a docker container!</p>

//       <button onClick={switchNameHandler}>Switch Names</button>

//       <Person name={personState.persons[0].name} age={personState.persons[0].age} />
//       {/* To use the text between the component we'll use the props.children in the function */}
//       <Person name={personState.persons[1].name} age={personState.persons[1].age}>My hobbies: racing </Person>
//       <Person name={personState.persons[2].name} age={personState.persons[2].age} />
//     </div>
//   );
// }

// //export the function with the name of it
// export default app;