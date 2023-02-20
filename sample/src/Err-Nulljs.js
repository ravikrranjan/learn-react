import React from 'react';

class Err extends React.Component {

  state = {
    // Uncomment the following code to display the error message 
    error: null
    // error : {
    //   message: "This is an error message.",
    // },
  };

  render() {
    if (!this.state.error) {
      return null;
    }

    return (
      <div className="error-message">{this.state.error.message}</div>
    );
  }
}

export default class NullErr extends React.Component {

  render() {
    return (
      <div>
        <h1>Just a normal webpage</h1>
        <p>Any errors will be displayed below.</p>
        <Err />      
      </div>
    );
  }
}