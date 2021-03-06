import React, { Component } from 'react';

import styled from "styled-components";

const SignOutText = styled.p`
    text-decoration: underline;
    cursor: pointer;
    font-size: 4vmin;
    font-family: 'Roboto', sans-serif;
`

export class GoogleSignOut extends Component {    
    componentDidMount() {
        window.gapi.load('auth2', function() {
            window.gapi.auth2.init();
        });
    }
    
    SignOutAction = () => {
        var auth2 = window.gapi.auth2.getAuthInstance();
        auth2.signOut().then(() => {
            this.props.setSignedInValue({"signedIn": false})
        });
    }

    render() {
        return (
            <SignOutText type="button" onClick={this.SignOutAction}>SIGN OUT</SignOutText>
        );
    }
}