import React, { Component } from 'react';
import classes from './App.css';
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
    const person = { ...this.state.persons[indexPerson] };

    // same thing but "legacy-way" with old ES
    //let person = Object.assign({}, objPerson);

    //update the name of the person
    person.name = event.target.value;

    // make a copy of the original state
    const updatedPersons = [...this.state.persons];

    // update the position of the array with the new person object updated
    updatedPersons[indexPerson] = person;

    // updated the state
    this.setState({ persons: updatedPersons });
  }

  togglePersonsHandler = () => {
    const show = this.state.showPersons;
    this.setState({ showPersons: !show });
  }

  render() {
    let persons = null;
    let buttonClass = '';

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
      buttonClass = classes.Red;
    }

    const assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.Red);
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.Bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, from the react app!</h1>
        <p className={assignedClasses.join(' ')}>I'm running from a docker container!</p>

        {/* calling the function without (), because calling it with switchNameHandler()
         will render automatically on DOM render */}
        <button
          className={buttonClass}
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