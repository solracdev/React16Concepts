import React from 'react';

// second way to create a high order componen
const withClass = (WrappedComponent, className) => {
    // return a functional component
    return props => (
        <div className={className}>
            {/* use the js spread operator to access to all values of the props with his key */}
            <WrappedComponent {...props} />
        </div>
    );
};

export default withClass;