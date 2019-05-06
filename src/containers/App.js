import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] Constructor');
  }

  state = {
    persons: [
      { id: "Blue", name: 'Carlos', age: 30 },
      { id: "Red", name: 'Paco', age: 50 },
      { id: "Green", name: 'Foo', age: 10 }
    ],
    showPersons: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps, props:', props);
    console.log('[App.js] getDerivedStateFromProps, state:', state);
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
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
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler}
      />;
    }

    return (
      <div className={classes.App}>
        <Cockpit
          // Access the props within the class, with this.props
          // In this case we have sent a paramater to this class from index.js
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          toggle={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;