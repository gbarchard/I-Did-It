import React, { Component } from 'react';
import styled from "styled-components";

const IDidItButton = styled.button`
    background-color: #B3A369;
    color: white;
    border-radius: 50%;
    align-items: center;
    outline:0; 
    border: 2px solid #B3A369;
    width: 75vmin;
    height: 75vmin;
    font-size: 20vmin;

    &:active {
        background-color: white;
        color: #B3A369;
    }
`

export class IDidIt extends Component {

    sendEmail = () => {
        console.log("got here")
        if (currentEmail === null) {
            localStorage.setItem("email","")
        }
        var RandomEmailIndex = Math.floor(Math.random() * 4);
        var RandomEmailMessages = ["Suck It","I dominate","You're up, bro","Bring it!"]
        var EmailList =localStorage.getItem("email")
        var MyEmail = 'mailto:'+EmailList+'?subject=I Did It&body='+RandomEmailMessages[RandomEmailIndex]
        window.location.href = MyEmail
    }

    render() {
        return (
            <IDidItButton onClick={this.sendEmail}>I Did It</IDidItButton>
        );
    }
}