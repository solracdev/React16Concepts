import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css'
import AuthContext from '../../context/auth-context';


const cockpit = props => {
    // in functional component we use the hook useRef to create the reference
    const toggleBtnRef = useRef(null);

    const authContext = useContext(AuthContext);

    // useEffect combines the same logic as componentDidMount and componentDidUpdated
    // runs after every render cicle
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');

        // setTimeout(() => {
        //     alert('Save Data to cloud!');
        // }, 1000);

        toggleBtnRef.current.click();

        // return cleanup
        return () => {
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
                ref={toggleBtnRef}
                className={buttonClass}
                onClick={props.toggle}>Toggle Persons</button>

            <button onClick={authContext.login}>Log In</button>

        </div>
    );
}

// React.memo allows us to update this component only where there is changes to it, no to others like Persons
// is the same as "shouldComponentUpdate" but inside a component
export default React.memo(cockpit);