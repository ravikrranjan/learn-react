import React from 'react';

export default class Controlled extends React.Component {

  state = {
    username: '',
    isValid: false,
  };

  changeUsername = (e) => {
    const { value } = e.target;
    this.setState(() => ({
      username: value,
      isValid: value.length > 3,
    }));
  };

  submitForm = (e) => {
    e.preventDefault();
    alert(`Hello ${this.state.username}`);
  };


  render() {
    return (
      <form method="post" onSubmit={this.submitForm}>
        <center>
          <p>{this.state.username}</p>
          <p>
            <input
              type="text"
              name="username"
              onChange={this.changeUsername}
            //   ~^The value attribute is only ever allowed to be a string but never undefined or null.

            // ~!input, textarea, and select value attribute always has to be a string
            // ~!a select with a multiple attribute, an array of strings.


            // ~*checkbox and radio inputs)
              value={this.state.username} 
            />
            <br/><br/>
            <input type="submit" disabled={!this.state.isValid} />
          </p>
        </center>
      </form>
    );
  }
}