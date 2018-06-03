import React, { Component } from 'react';

import styled from "styled-components";

const SignOutText = styled.p`
    text-decoration: underline;
    cursor: pointer;
    font-size: 4vw;
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
            this.props.setSignedInValue(false)
        });
    }

    render() {
        return (
            <SignOutText type="button" onClick={this.SignOutAction}>Sign Out</SignOutText>
        );
    }
}