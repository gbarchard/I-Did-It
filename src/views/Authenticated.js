import React, { Component } from 'react';
import styled from "styled-components";


import {IDidIt} from '../components/IDidIt';
import {AddEmail} from '../components/AddEmail';
import { GoogleSignOut } from '../components/GoogleSignOut';
import { MyAccount } from '../components/MyAccount';


const View = styled.div`
	display: grid;  
	grid-template-columns: 20vmin 1fr 20vmin;
	grid-template-rows: 1fr 30vmax 1fr 1fr;
`;

const AddEmailPosition = styled.div`
	grid-column-start: 1;
	grid-column-end: 2;
	grid-row-start: 1;
	grid-row-end: 1;
	display: flex;
	justify-content: left;
`;

const IDidItPosition = styled.div`
	grid-column-start: 1;
	grid-column-end: 4;
	grid-row-start: 2;
	grid-row-end: 4;
	display: flex;
	justify-content: center;
`;

const NewsFeedPosition = styled.div`
	grid-column-start: 1;
	grid-column-end: 4;
	grid-row-start: 4;
	grid-row-end: 5;
	display: flex;
	justify-content: center;
`;

const GoogleSignOutPosition = styled.div`
	grid-column-start: 2;
	grid-column-end: 3;
	grid-row-start: 5;
	grid-row-end: 6;	
	display: flex;
	justify-content: center;
`;


const MyAccountPosition = styled.div`
	grid-column-start: 3;
	grid-column-end: 4;
	grid-row-start: 1;
	grid-row-end: 1;	
	display: flex;
	justify-content: flex-end;
`;

export class Authenticated extends Component {
  constructor(props) {
    super(props);
		this.addNewsFeed=this.addNewsFeed.bind(this)
	}
	componentWillMount(){
		console.log(this.props)
	}


	addNewsFeed() {

			var newsFeed = this.props.newsFeed
			return (
				<div>
					{newsFeed.map((newsFeedItem, i) => {
						return (
							<div key={i}>{newsFeedItem.date}</div>
					)})}
				</div>
			)
		}
	render() {
		return (
			<View>
				<AddEmailPosition>
					<AddEmail></AddEmail>
				</AddEmailPosition>
				<IDidItPosition>
					<IDidIt iDidItToday={this.props.iDidItToday} iDidItColor={this.props.iDidItColor} userId={this.props.userId}></IDidIt>
				</IDidItPosition>
				<MyAccountPosition>
					<MyAccount image={this.props.image}/>
				</MyAccountPosition>
				<NewsFeedPosition>
					{this.addNewsFeed()}
				</NewsFeedPosition>
				<GoogleSignOutPosition>
					<GoogleSignOut setSignedInValue={this.props.setSignedInValue}></GoogleSignOut>
				</GoogleSignOutPosition>
			</View>
		);	
	}
}