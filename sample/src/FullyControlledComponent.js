import React from 'react';

export default class FullyControlledComponent extends React.Component {

  state = {
    text: '',
    textarea: '',
    checkbox: false,
    singleSelect: '',
    multipleSelect: [],
  };

  changeValue = ({ target: { name, value } }) => {
    this.setState(() => ({
      [name]: value,
    }));
  };

  changeCheckbox = ({ target: { name, checked } }) => {
    this.setState(() => ({
      [name]: checked,
    }));
  };

  changeSelect = ({ target: { name, value, selectedOptions, multiple } }) => {
    if (multiple) {
      value = Array.from(selectedOptions).map((option) => option.value);
    }
    this.setState(() => ({
      [name]: value,
    }));
  };

  render() {
    return (
      <form>
        <h1>Json Data</h1>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        <br/><br/>
        <h2>Text</h2>
        <input
          type="text"
          name="text"
          value={this.state.text}
           //   ~^The value attribute is only ever allowed to be a string but never undefined or null.

            // ~!input, textarea, and select value attribute always has to be a string
            // ~!a select with a multiple attribute, an array of strings.


         
          onChange={this.changeValue}
        />
        <br/><br/>
        <h2>Text Area</h2>
        <textarea
          name="textarea"
          value={this.state.textarea}
          onChange={this.changeValue}
        />
       
        <br/><br/>
        <h2>Single Select</h2>
        <select
          name="singleSelect"
          value={this.state.singleSelect}
          onChange={this.changeValue}
        >
          <option value="">Please select</option>
          <option value="1">One</option>
          <option value="2">Two</option>
        </select>
        <br/><br/>
        <h2>Multiple Select</h2>
        <select
          name="multipleSelect"
          value={this.state.multipleSelect}
          onChange={this.changeSelect}
          multiple
        >
          <option value="1">One</option>
          <option value="2">Two</option>
        </select>
        <br/><br/>

        <h2>Radio</h2>
        <input
          type="radio"
          name="radio"
          value="1"
            //   ~*with checkboxes or radio buttons which do not only change a value but a status (checked).
             // ~*checkbox and radio inputs)
          checked={this.state.radio === '1'}
          onChange={this.changeValue}
        />
        <span></span>
        <input
          type="radio"
          name="radio"
          value="2"
          checked={this.state.radio === '2'}
          onChange={this.changeValue}
        />

        <br/><br/>
        <h2>Checkbox</h2>
        <input
          type="checkbox"
          name="checkbox"
             // ~*checkbox and radio inputs)
          checked={this.state.checkbox}
          onChange={this.changeCheckbox}
        />
      </form>
    );
  }
}