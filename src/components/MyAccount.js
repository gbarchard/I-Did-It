import React, { Component } from 'react';

export class MyAccount extends Component {

    render() {
        return (
            <img src={this.props.image} alt="My Account"></img>
        );
    }
}