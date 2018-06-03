import React, { Component } from 'react';
import styled from "styled-components";

const Account = styled.img`
    border-radius: 50%;
    height: 18vw;
    width: 18vw;
    }
`

export class MyAccount extends Component {

    render() {
        return (
            <Account src={this.props.image} alt="My Account"></Account>
        );
    }
}