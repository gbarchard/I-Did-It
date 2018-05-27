import React, { Component } from 'react';

export class SignOut extends Component {

    SignOut = () => {
        this.props.setSignedInValue(false)
    }

    render() {
        return (
            <button onClick={this.SignOut}>Sign Out</button>
        );
    }
}