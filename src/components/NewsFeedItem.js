import React, { Component } from 'react';
import styled from "styled-components";

import { SVGIcon } from '../components/SVGIcon';

const View = styled.div`
	display: grid;  
	grid-template-columns: 1fr 1fr 1fr;
`;

const Icon = styled.div `
		grid-column-start: 3;
		grid-column-end: 4;
    width: 5vmin;
    height: 5vmin;
`;

const Date = styled.div `
    grid-column-start: 1;
		grid-column-end: 3;
		display: flex;
		justify-content: flex-start;
`;

export class NewsFeedItem extends Component {

    render() {
        return (
					<View>
						<Date>{this.props.date}</Date><Icon><SVGIcon image={this.props.image} color={this.props.color}></SVGIcon></Icon>
					</View>
				);
    }
}