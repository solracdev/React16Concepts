import React from 'react';

// high order component with class
const withClass = props => (
    <div className={props.class}>{props.children}</div>
);

export default withClass;
