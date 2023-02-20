import React from 'react';

const NotificationList = ({ items }) => {
    if (items.length) {
      return (
        <ul>
          {items.map((notification) => (
            <li>{notification.title}</li>
          ))}
        </ul>
      );
    }
    return <p>No new notifications</p>;
  };



export default class EditableText extends React.Component {

  state = {
    value: null,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.value === null) {
      return {
        value: nextProps.initialValue || '',
      };
    }
    return null;
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState(() => ({
      value,
    }));
  };

  setMode = (mode) => () => {
    this.setState(() => ({
      mode,
    }));
  };

  render() {
    if (this.state.mode === 'edit') {
      return (
        <div>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <br />
          <button onClick={this.setMode('view')}>Done</button>
        </div>
      );
    }

    return (
      <div>
        {this.state.value}
        <br />
        <button onClick={this.setMode('edit')}>Edit</button>
      </div>
    );
  }
}