import React, { Component } from 'react';
import styled from "styled-components";
import { request } from 'graphql-request';

import { config } from './config.js'

import { getCurrentDay } from '../GetCurrentDay.js'

const IDidItButton = styled.button`
    background-color: ${
	props => (
		props.iDidItColor
	)
};;
    color: white;
    border-radius: 50%;
    border: solid ${
        props => (props.iDidItColor)
    };
    width: 80vmin;
    height: 80vmin;
    font-size: 16vmin;

    &:active {
        background-color: ${props => (props.iDidItColor)};
        color: ${
            props => (props.iDidItColor)
        };

    }
`

export class IDidIt extends Component {
    constructor(props) {
        super(props);
        this.sendEmail=this.sendEmail.bind(this);
    }


    sendEmail = () => {
        let today = getCurrentDay()

        const mutation = `mutation {
			addDidit(
				userId: "${this.props.userId}",
                date: "${today}",
			)` +
			`{
                created
			}
		}`

		//let url = "https://evening-stream-42098.herokuapp.com/graphql"
		let url = config.baseURL
		request(url, mutation).then(data => {
            this.props.setIDidIt(true)
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
        })
    }

    render() {
        return (
            <IDidItButton iDidItColor={this.props.iDidItColor} onClick={this.sendEmail}>I Did It</IDidItButton>
        );
    }
}