import React, { Component } from 'react';
import styled from "styled-components";
import { request } from 'graphql-request';

import { config } from '../config.js'
import { images } from '../data/images.js'

import { getCurrentDay } from '../GetCurrentDay.js'


const Icon = styled.svg `
    fill: ${
	    props => (
		    props.iDidItColor
	    )
    };
    width: 25vmin;
    height: 25vmin;

    margin-left: -.3vmin;
    margin-top: 3vmin;
`

const IDidItButton = styled.button`
    background-color: white;
    border-width: 0vmin;
    border-radius: 50%;
    width: 30vmin;
    height: 30vmin;
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
        this.showIcon=this.showIcon.bind(this);
    }


    sendEmail = () => {
        let today = getCurrentDay()

        const mutation = `mutation {
			addDidit(
				userId: "${this.props.userId}",
                date: "${today}",
                type: ${this.props.type},
			)` +
			`{
                created
			}
		}`

		let url = config.baseURL
		request(url, mutation).then(data => {
            this.props.setIDidIt(true, this.props.type)
            // var currentEmail = localStorage.getItem("email")
            // if (currentEmail === null) {
            //     localStorage.setItem("email","")
            // }
            // var RandomEmailIndex = Math.floor(Math.random() * 3);
            // var RandomEmailMessages = ["I dominate","You're up, bro","Bring it!"]
            // var CarriageReturn = "%0D%0A%0D%0A"
            // var MarketingMessage = "Want to do it too?  Join us at http://ididitagain.herokuapp.com/"
            // var EmailList =localStorage.getItem("email")
            // var MyEmail = 'mailto:'+EmailList+'?subject=I Did It&body='+RandomEmailMessages[RandomEmailIndex] + CarriageReturn + MarketingMessage
            // window.location.href = MyEmail
        })
    }

    showIcon() {
        let image = images[this.props.type]
        return(
            <g>
                {image.map((imagepath, i) => {
                    return (
                        <path key={i} d={imagepath}/>
                    )
                })}
            </g>
        )
    }

    render() {
        return (
            <IDidItButton iDidItColor={this.props.iDidItColor} onClick={this.sendEmail}>
                <Icon type={this.props.type} iDidItColor={this.props.iDidItColor} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000">
                    {this.showIcon()}
                </Icon></IDidItButton>
        );
    }
}