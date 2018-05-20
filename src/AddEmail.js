import React, { Component } from 'react';
import styled from "styled-components";

const AddEmailButton = styled.button`
    background-color: #B3A369;
    color: white;
    border-radius: 50%;
    align-items: center;
    outline:0; 
    border: 2px solid #B3A369;
    width: 15vmin;
    height: 15vmin;
    font-size: 10vmin;

    &:active {
        background-color: white;
        color: #B3A369;
    }
`

export class AddEmail extends Component {

    getEmails = () => {
        var currentEmail = localStorage.getItem("email")
        var email = window.prompt("Add Email", localStorage.getItem("email"))
        if (email != null) {
            localStorage.setItem("email",email)
        }
    }

    render() {
        return (
            <AddEmailButton onClick={this.getEmails}>+</AddEmailButton>
        );
    }
}