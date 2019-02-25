import React, { Component } from 'react';
import styled from "styled-components";
import { request } from 'graphql-request';

import {SVGIcon} from './SVGIcon';

import { config } from '../config.js'
import { images } from '../data/images.js'

import { getCurrentDay } from '../GetCurrentDay.js'


const Icon = styled.div `
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
        this.sendEmail=this.recordDidIt.bind(this);
        this.showIcon=this.showIcon.bind(this);
    }


    recordDidIt = () => {
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
            var audio = document.createElement('audio');
            audio.src = images[this.props.type].sound
            audio.play();
            this.props.setIDidIt(true, this.props.type)
        })
    }

    showIcon() {
        if (this.props.iDidItToday) {
            return(
                <SVGIcon image={images[this.props.type].D} color={images[this.props.type].color}></SVGIcon>
            )
        }
        else {
            return(
                <SVGIcon image={images[this.props.type].D} color={"gray"}></SVGIcon>
            )
        }
    }

    render() {
        return (
            <IDidItButton iDidItColor={this.props.iDidItColor} onClick={this.recordDidIt}>
                <Icon>
                    {this.showIcon()}
                </Icon>
            </IDidItButton>
        );
    }
}