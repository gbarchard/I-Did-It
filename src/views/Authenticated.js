import React, { Component } from 'react';
import styled from "styled-components";


import {IDidIt} from '../components/IDidIt';
import {AddEmail} from '../components/AddEmail';
import { GoogleSignOut } from '../components/GoogleSignOut';
import { MyAccount } from '../components/MyAccount';


const View = styled.div`
	display: grid;  
	grid-template-columns: 32vw 32vw 32vw;
	grid-template-rows: 17vh 60vh 20vh;
`;

const AddEmailPosition = styled.div`
	grid-column-start: 0;
	grid-column-end: 1;
	grid-row-start: 1;
	grid-row-end: 1;
	display: flex;
	justify-content: flex-start;
`;

const IDidIt1Position = styled.div`
	grid-column-start: 0;
	grid-column-end: 1;
	grid-row-start: 3;
	grid-row-end: 3;
	display: flex;
	justify-content: center;
`;

const IDidIt2Position = styled.div`
	grid-column-start: 1;
	grid-column-end: 2;
	grid-row-start: 3;
	grid-row-end: 3;
	display: flex;
	justify-content: center;

`;

const IDidIt3Position = styled.div`
	grid-column-start: 2;
	grid-column-end: 3;
	grid-row-start: 3;
	grid-row-end: 3;
	display: flex;
	justify-content: center;
`;

const NewsFeedPosition = styled.div`
	grid-column-start: 1;
	grid-row-start: 2;
	grid-row-end: 3;
	display: flex;
	justify-content: center;
  align-items: flex-end;
`;

const GoogleSignOutPosition = styled.div`
	grid-column-start: 1;
	grid-column-end: 2;
	grid-row-start: 1;
	grid-row-end: 1;	
	display: flex;
	justify-content: center;
`;


const MyAccountPosition = styled.div`
	grid-column-start: 2;
	grid-column-end: 3;
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
	}


	addNewsFeed() {

			var newsFeed = this.props.newsFeed
			return (
				<div>
					{newsFeed.map((newsFeedItem, i) => {
						return (
							<div key={i}>{newsFeedItem.date}<span> {newsFeedItem.type}</span></div>
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
				<IDidIt1Position>
					<IDidIt type={1} setIDidIt={this.props.setIDidIt} iDidItToday={this.props.iDidItToday} iDidItColor={this.props.iDidItColor[0]} userId={this.props.userId}></IDidIt>
				</IDidIt1Position>
				<IDidIt2Position>
					<IDidIt type={2} setIDidIt={this.props.setIDidIt} iDidItToday={this.props.iDidItToday} iDidItColor={this.props.iDidItColor[1]} userId={this.props.userId}></IDidIt>
				</IDidIt2Position>
				<IDidIt3Position>
					<IDidIt type={3} setIDidIt={this.props.setIDidIt} iDidItToday={this.props.iDidItToday} iDidItColor={this.props.iDidItColor[2]} userId={this.props.userId}></IDidIt>
				</IDidIt3Position>
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