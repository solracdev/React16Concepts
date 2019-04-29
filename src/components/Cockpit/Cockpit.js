import React from 'react';
import classes from './Cockpit.css'


const cockpit = props => {

    const assignedClasses = [];
    let buttonClass = '';

    if (props.showPerson) {
        buttonClass = classes.Red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.Red);
    }

    if (props.persons.length <= 1) {
        assignedClasses.push(classes.Bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>I'm running from a docker container!</p>

            <button
                className={buttonClass}
                onClick={props.toggle}>Toggle Persons</button>
        </div>
    );
}

export default cockpit;