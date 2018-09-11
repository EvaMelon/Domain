import React, { Component } from 'react';
import './HCard.css';
import defaultAvatarImg from './img/avatar.png';

export default class HCard extends Component {
  render() {
    return (

        <div className="hCard-preview">
            <div className="vcard">
                <h2 className="preview-header">hCard preview</h2>

                <header className="full-name-preview">

                    <img className="avatar" alt="" width="80" height="100" src={this.props.avatarUrl || defaultAvatarImg}/>
            
                    <h3 className="fn n name-preview">
                        <span className="preview-field-value given-name">{this.props.name}</span>
                        <span className="preview-field-value family-name">{this.props.surname}</span>
                    </h3>

                </header>

                <div className="preview-fields-bottom">

                    <div className="preview-field">
                        <span className="preview-field-label preview-email">email</span>
                        <span className="preview-field-value email">{this.props.email}</span>
                    </div>

                    <div className="preview-field">
                        <span className="preview-field-label preview-phone">phone</span>
                        <span className="preview-field-value tel">{this.props.phone}</span>
                    </div>

                    <div className="adr">

                        <div className="preview-field">
                            <span className="preview-field-label preview-address">address</span>
                            <span className="preview-field-value street-address">{this.props.house}</span>
                            <span className="preview-field-value street-address">{this.props.street}</span>
                        </div>

                        <div className="preview-field">
                            <span className="preview-field-label preview-address"></span>
                            <span className="preview-field-value locality">{this.props.suburb}</span>
                            {this.props.suburb && this.props.state ? ", ": ""}
                            <span className="preview-field-value region">{this.props.state}</span>
                        </div>

                        <div className="preview-field-group">
                            <div className="preview-field">
                                <span className="preview-field-label preview-postcode">postcode</span>
                                <span className="preview-field-value postal-code">{this.props.postcode}</span>
                            </div>

                            <div className="preview-field">
                                <span className="preview-field-label preview-country">country</span>
                                <span className="preview-field-value country-name">{this.props.country}</span>
                            </div>
                        </div>

                    </div>
            
                </div>
            </div>
        </div>
    );
  }
}
