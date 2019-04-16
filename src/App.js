import React, { Component } from 'react';
import './App.css';
// Import our Person component
import Person from './Person/Person';

class App extends Component {

  // state is a special property only availabe within a class that extends Component
  // in the later versions of react it's possible to use it in components functions
  state = {
    persons: [
      { id: "Blue", name: 'Carlos', age: 30 },
      { id: "Red", name: 'Paco', age: 50 },
      { id: "Green", name: 'Foo', age: 10 }
    ],
    showPersons: false
  }

  deletePersonHandler = personIndex => {
    // clone the array instead using same instance
    // old version using slice w/o arrguments
    //const updatedPersons = this.state.persons.slice();
    // with new ES6 and spread operator
    const updatedPersons = [...this.state.persons];
    updatedPersons.splice(personIndex, 1);
    this.setState({ persons: updatedPersons });
  }

  nameChangeHandler = (event, personId) => {

    // using findIndex() retunrs the index of the object
    const indexPerson = this.state.persons.findIndex(person => person.id === personId);

    // using find() returns the object
    //const objPerson = this.state.persons.find(person => person.id === personId);

    // clone the obj to not use the same reference
    // with ES6 and spread operator
    const person = {...this.state.persons[indexPerson]};

    // same thing but "legacy-way" with old ES
    //let person = Object.assign({}, objPerson);

    //update the name of the person
    person.name = event.target.value;

    // make a copy of the original state
    const updatedPersons = [...this.state.persons];

    // update the position of the array with the new person object updated
    updatedPersons[indexPerson] = person;

    // updated the state
    this.setState({persons: updatedPersons});
  }

  togglePersonsHandler = () => {
    const show = this.state.showPersons;
    this.setState({ showPersons: !show });
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

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              change={(event) => this.nameChangeHandler(event, person.id)} />
          })}
        </div>
      );
    }

    return (
      <div className='App'>
        <h1>Hi, from the react app!</h1>
        <p>I'm running from a docker container!</p>

        {/* calling the function without (), because calling it with switchNameHandler()
         will render automatically on DOM render */}
        <button
          style={styleObj}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>

        {/* another way to call the function with arguments is using flat arrow function */}
        {/* this one is more inefficient may impact in performance */}
        {/* <button onClick={() => this.switchNameHandler("King Carlos II")}>Switch Names</button> */}
        {persons}
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