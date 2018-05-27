import React, { Component } from 'react';

export class SignIn extends Component {

    SignIn = () => {
        this.props.setSignedInValue(true)
    }

    render() {
        return (
            <button onClick={this.SignIn}>Sign In</button>
        );
    }
}