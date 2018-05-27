import React, { Component } from 'react';

export class GoogleSignIn extends Component {

    render() {
        return (
            <div className="g-signin2" data-onsuccess="onSignIn"></div>
        );
    }
}