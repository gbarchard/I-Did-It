import React, { Component } from 'react';
import styled from "styled-components";

const IDidItButton = styled.button`
    background-color: #B3A369;
    color: white;
    border-radius: 50%;
    border: solid #B3A369;
    width: 80vmin;
    height: 80vmin;
    font-size: 16vmin;

    &:active {
        background-color: white;
        color: #B3A369;
    }
`

export class IDidIt extends Component {

    sendEmail = () => {
        var currentEmail = localStorage.getItem("email")
        if (currentEmail === null) {
            localStorage.setItem("email","")
        }
        var RandomEmailIndex = Math.floor(Math.random() * 3);
        var RandomEmailMessages = ["I dominate","You're up, bro","Bring it!"]
        var CarriageReturn = "%0D%0A%0D%0A"
        var MarketingMessage = "Want to do it too?  Join us at http://ididitagain.herokuapp.com/"
        var EmailList =localStorage.getItem("email")
        var MyEmail = 'mailto:'+EmailList+'?subject=I Did It&body='+RandomEmailMessages[RandomEmailIndex] + CarriageReturn + MarketingMessage
        window.location.href = MyEmail
    }

    render() {
        return (
            <IDidItButton onClick={this.sendEmail}>I Did It</IDidItButton>
        );
    }
}