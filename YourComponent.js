// YourComponent.js

import React from 'react';
import Logger from './Logger'; // Import the Logger HOC

// Define your simple component
class YourComponent extends React.Component {
  render() {
    return <div>Your component content here</div>;
  }
}

// Wrap YourComponent with Logger HOC and export it
export default Logger(YourComponent);
