import React, { Component } from 'react';

import styled from "styled-components";

const SignOutText = styled.p`
    text-decoration: underline;
    cursor: pointer;
    font-size: 4vw;
`

export class SignOut extends Component {

    SignOutAction = () => {
        this.props.setSignedInValue(false)
    }

    render() {
        return (
            <SignOutText type="button" onClick={this.SignOutAction}>Sign Out</SignOutText>
        );
    }
}