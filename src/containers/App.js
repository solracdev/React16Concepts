import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
//import WithClass from '../hoc/WithClass';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
import AuthContext from '../context/auth-context';

// class base component
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
    showPersons: false,
    changeCounter: 0,
    authenticated: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps, props:', props);
    console.log('[App.js] getDerivedStateFromProps, state:', state);
    return state;
  };

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  };

  deletePersonHandler = personIndex => {
    const updatedPersons = [...this.state.persons];
    updatedPersons.splice(personIndex, 1);
    this.setState({ persons: updatedPersons });
  };

  nameChangeHandler = (event, personId) => {

    const indexPerson = this.state.persons.findIndex(person => person.id === personId);

    const person = { ...this.state.persons[indexPerson] };
    person.name = event.target.value;

    const updatedPersons = [...this.state.persons];
    updatedPersons[indexPerson] = person;

    // best way to update the state when dpenends on some old value in the state
    this.setState((prevState, props) => {
      return {
        persons: updatedPersons,
        changeCounter: prevState.changeCounter + 1
      };
    });
  };

  togglePersonsHandler = () => {
    const show = this.state.showPersons;
    this.setState({ showPersons: !show });
  };

  loginHandler = () => {
    this.setState(() => {
      return {
        authenticated: true
      };
    });
  };

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
      <Aux>
        {/* Accessing the context with the property provider*/}
        <AuthContext.Provider
          value={
            {
              authenticated: this.state.authenticated,
              login: this.loginHandler
            }
          }>
          <Cockpit
            // Access the props within the class, with this.props
            // In this case we have sent a paramater to this class from index.js
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            toggle={this.togglePersonsHandler}
          />
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
  };
};

export default withClass(App, classes.App);