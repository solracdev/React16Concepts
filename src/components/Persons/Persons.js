import React, { PureComponent } from 'react';
import Person from './Person/Person';

// PureComponent already incorporate the function "shouldComponentUpdate"
// and checks every changes for the props, so we dont need to check one by one.
class Persons extends PureComponent {

    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons.js] shouldComponentUpdate')
    //     if (nextProps.persons === this.props.persons) {
    //         return false;
    //     }
    //     return true;
    // }

    getSnapshotBeforeUpdate(prevPorps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'return from getSnapshotBeforeUpdate!' };
    }

    componentDidUpdate(prevPorps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    render() {
        console.log('[Persons.js] rendering...')
        return (
            this.props.persons.map((person, index) => {
                return <Person
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    change={(event) => this.props.changed(event, person.id)}
                />
            }));
    };
}

export default Persons;