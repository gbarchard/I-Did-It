import React, { Component } from 'react';
import styled from "styled-components";
import { request } from 'graphql-request';

import { config } from '../config.js'

import { getCurrentDay } from '../GetCurrentDay.js'


const HealthyIcon = styled.svg `
    fill: ${
	    props => (
		    props.iDidItColor
	    )
    };
    width: 70vmin;
    height: 70vmin;

    margin-left: 0vmin;
    margin-top: 10vmin;

`

const IDidItButton = styled.button`
    background-color: white;
    border-color: black;
    border-width: 1vmin;
    border-radius: 50%;
    width: 80vmin;
    height: 80vmin;
    font-size: 16vmin;
    outline:0;
    

    &:active {
        background-color: white;
        color: white;
        border: none;
        border-color: white;
    }
    &:focus {
        background-color: white;
        color: white;
        border: none;
        outline:0;
        border-color: white;
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
            <IDidItButton iDidItColor={this.props.iDidItColor} onClick={this.sendEmail}>
                <HealthyIcon iDidItColor={this.props.iDidItColor} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000">
                    <g>
                        <path className="healthy" d="M820.9,496.2l-81.9,138.7L590.1,346L419.8,674.3L261.6,402.4l-48.3,100.9H72.6c7.6,9,15.9,17.5,24.6,25.4c1.2,1.1,2.4,2.1,3.6,3.1l399.8,399.8L911,521.4c0,0,2.9-3.4,3.3-3.7c7-6.9,13.5-14,19.5-21.5L820.9,496.2z"/>
                        <path className="healthy" d="M188.7,464.2l69.5-145.4l159.6,274.3l172.4-332.2L741.3,554l57.3-97h161.3c19.7-36.7,30.2-78.7,30.2-124.6c0-145.9-118.3-264.2-264.2-264.2c-95.7,0-179.4,50.8-225.8,127c-46.4-76.1-130.1-127-225.8-127C128.3,68.3,10,186.6,10,332.5c0,48,12.8,92.9,35.1,131.7H188.7z"/>
                    </g>
                </HealthyIcon></IDidItButton>
        );
    }
}