// Logger.js

import React from 'react';

// Define a higher-order component (HOC) named Logger
const Logger = WrappedComponent => {
  // Define a class component inside the HOC
  class WithLogger extends React.Component {
    // Log when the component is mounted
    componentDidMount() {
      console.log('Component is mounted');
    }

    // Log when the component is unmounted
    componentWillUnmount() {
      console.log('Component is unmounted');
    }

    // Render the wrapped component with its props
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  // Return the class component with lifecycle logging
  return WithLogger;
};

// Export the Logger HOC
export default Logger;
