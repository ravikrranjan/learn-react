import React from 'react';

export default class Uncontrolled extends React.Component {

  state = {
    username: '',
    isValid: false,
  }

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
        <p>Your username: {this.state.username}</p>
        <p>
          <input type="text" name="username" onChange={this.changeUsername} />
          <input type="submit" disabled={!this.state.isValid} />
        </p>
      </form>
    );
  }
}