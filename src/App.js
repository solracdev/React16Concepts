import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
class App extends Component {
  state = {
    persons: [
      { id: "Blue", name: 'Carlos', age: 30 },
      { id: "Red", name: 'Paco', age: 50 },
      { id: "Green", name: 'Foo', age: 10 }
    ],
    showPersons: false
  }

  deletePersonHandler = personIndex => {
    const updatedPersons = [...this.state.persons];
    updatedPersons.splice(personIndex, 1);
    this.setState({ persons: updatedPersons });
  }

  nameChangeHandler = (event, personId) => {

    const indexPerson = this.state.persons.findIndex(person => person.id === personId);

    const person = { ...this.state.persons[indexPerson] };
    person.name = event.target.value;

    const updatedPersons = [...this.state.persons];
    updatedPersons[indexPerson] = person;

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

        <button
          className={buttonClass}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>

        {persons}
      </div>
    );
  }
}

export default App;