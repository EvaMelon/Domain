import React, { Component } from 'react';
import './ImageField.css';

export default class ImageField extends Component {
  handleChange = (event) => {
    const input = event.target;
    const file = input.files[0];
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      this.props.onChange(reader.result);
    }, false);
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  render() {
    return (
      <label className="button image-field-button">
        Upload Avatar
        <input className="inner-input" type="file" onChange={this.handleChange}/>
      </label>
    );
  }
}
