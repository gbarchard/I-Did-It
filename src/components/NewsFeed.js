import React, { Component } from 'react';

import { NewsFeedItem } from './NewsFeedItem';


import { images } from '../data/images.js'

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
							<NewsFeedItem key={i} date={newsFeedItem.date} image={images[newsFeedItem.type].D} color={images[newsFeedItem.type].color}></NewsFeedItem>
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