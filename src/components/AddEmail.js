import React, { Component } from 'react';
import styled from "styled-components";

const AddEmailButton = styled.img`
    border-radius: 50%;
    height: 18vw;
    width: 18vw;
    }
`

export class AddEmail extends Component {

    getEmails = () => {
        var currentEmail = localStorage.getItem("email")
        if (currentEmail === null) {
            localStorage.setItem("email","")
        }
        var email = window.prompt("Add Email", localStorage.getItem("email"))
        if (email !== null) {
            localStorage.setItem("email",email)
        }
    }

    render() {
        return (
            <AddEmailButton src='settings.png' alt="Settings" onClick={this.getEmails}></AddEmailButton>
        );
    }
}