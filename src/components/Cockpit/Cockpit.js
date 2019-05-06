import React, { useEffect } from 'react';
import classes from './Cockpit.css'


const cockpit = props => {

    // useEffect combines the same logic as componentDidMount and componentDidUpdated
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');

       const timer =  setTimeout(() => {
            alert('Save Data to cloud!');
        }, 1000);

        // return cleanup
        return () => {
            clearTimeout(timer);
            console.log('[Cockpit.js] cleanup work in useEffect');
        };

        // to trigger this function only when some component is changed, we passed it as an array
        // to render just for the first time and never run again pass an empty array []
    }, [props.persons]);

    const assignedClasses = [];
    let buttonClass = '';

    if (props.showPerson) {
        buttonClass = classes.Red;
    }

    if (props.personsLength <= 2) {
        assignedClasses.push(classes.Red);
    }

    if (props.personsLength <= 1) {
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

// React.memo allows us to update this component only where there is changes to it, no to others like Persons
// is the same as "shouldComponentUpdate" but inside a component
export default React.memo(cockpit);