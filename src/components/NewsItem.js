import React, { Component } from 'react';

export class NewsItem extends Component {
  componentWillMount() {
		console.log("this.props.date")
	}
	
    render() {
        return (
            <p>{this.props.date}</p>
        );
    }
}