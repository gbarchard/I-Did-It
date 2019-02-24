import React, { Component } from 'react';
import styled from "styled-components";

import { SVGIcon } from '../components/SVGIcon';

import { images } from '../data/images.js'

const Icon = styled.div `
    width: 5vmin;
    height: 5vmin;

    margin-left: -.3vmin;
    margin-top: 3vmin;
`

export class NewsFeed extends Component {
    constructor(props) {
        super(props);
        this.buildNewsFeed=this.buildNewsFeed.bind(this);
    }

    buildNewsFeed(newsFeed) {
			return (
				<div>
					{newsFeed.map((newsFeedItem, i) => {
						return (
							<div key={i}>{newsFeedItem.date}<span><Icon><SVGIcon image={images[newsFeedItem.type].D} color={images[newsFeedItem.type].color}></SVGIcon></Icon></span></div>
					)})}
				</div>
			)
    }

    render() {
        return (
					<div>
                {this.buildNewsFeed(this.props.newsFeed)}
					</div>
        );
    }
}