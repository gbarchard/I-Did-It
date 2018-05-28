import React, { Component } from 'react';
import { GoogleLogout } from 'react-google-login';

export class SignOut extends Component {

    SignOutAction = () => {
        this.props.setSignedInValue(false)
    }

    render() {
        return (
            <button type="button" onClick={this.SignOutAction}>Log Out</button>
        );
    }
}