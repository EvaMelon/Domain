import React, { Component } from 'react';
import HCard from './HCard/HCard.js';
import ImageField from './ImageField/ImageField.js';
import './App.css';

class Field extends Component {

  render() {
    return (
      <div className="field">
        <label htmlFor={this.props.innerId}>{this.props.label}</label>
        <input id={this.props.innerId} type="text" onChange={this.props.onChange}/>
      </div>
    );
  }
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        user: {
          name: "",
          surname: "",
          email: "",
          phone: "",
          house: "",
          street: "",
          suburb: "",
          state: "",
          postcode: "",
          country: "",
          avatarUrl: ""
        }
    };
  }

  handleUserPropertyChange = (event) => {
    const propertyName = event.target.id;
    const propertyValue = event.target.value;
    this.setState ({
      user: {
        ...this.state.user,
        [propertyName]: propertyValue
      }
    });
  }

  handleAvatarchange = (avatarUrl) => {
    this.setState ({
      user: {
        ...this.state.user,
        avatarUrl: avatarUrl
      }
    });
  }

  render() {
    return (
      <div className="app">

        <form className="hcard-builder">

          <h1 className="app-header">hCard Builder</h1>

          <fieldset className="personal-details">

            <legend className="section-header">Personal Details</legend>

            <div className="fields"> 
              <Field innerId="name" label="Given Name" onChange={this.handleUserPropertyChange}/>
              <Field innerId="surname" label="Surname" onChange={this.handleUserPropertyChange}/>
              <Field innerId="email" label="Email" onChange={this.handleUserPropertyChange}/>
              <Field innerId="phone" label="Phone" onChange={this.handleUserPropertyChange}/>
            </div>
          
          </fieldset>

          <fieldset>

            <legend className="section-header">Address</legend>
          
            <div className="fields">
              <Field innerId="house" label="House Name or #" onChange={this.handleUserPropertyChange}/>
              <Field innerId="street" label="Street" onChange={this.handleUserPropertyChange}/>
              <Field innerId="suburb" label="Suburb" onChange={this.handleUserPropertyChange}/>
              <Field innerId="state" label="State" onChange={this.handleUserPropertyChange}/>
              <Field innerId="postcode" label="Postcode" onChange={this.handleUserPropertyChange}/>
              <Field innerId="country" label="Country" onChange={this.handleUserPropertyChange}/>
            </div>

          </fieldset>

          <div className="buttons-section">
            <div className="button-avatar-wrapper">
              <ImageField onChange={this.handleAvatarchange}/>
            </div>

            <div className="button-create-hcard-wrapper">
              <button className="button create-hcard-button">Create hCard</button>
            </div>
          </div>

        </form>

        <HCard {...this.state.user}/>
        
      </div>
    );
  }
}

export default App;
