import React, { Component } from 'react';
import styled from "styled-components";

import {IDidIt} from '../components/IDidIt';
import {AddEmail} from '../components/AddEmail';
import { SignOut } from '../components/SignOut';
import { MyAccount } from '../components/MyAccount';

const View = styled.div`
	display: grid;  
	grid-template-columns: 20% 60% 20%;
	grid-template-rows: 10% 80% 10%;
`;

const AddEmailPosition = styled.div`
	grid-column-start: 1;
	grid-column-end: 2;
	grid-row-start: 1;
	grid-row-end: 1;
	display: flex;
	justify-content: center;
`;

const IDidItStyle = styled.div`
  text-align: center;
  padding-top: 0vmin;
`;

const IDidItPosition = styled.div`
	grid-column-start: 2;
	grid-column-end: 3;
	grid-row-start: 2;
	grid-row-end: 3;
	display: flex;
	justify-content: center;
`;

const SignOutPosition = styled.div`
	grid-column-start: 2;
	grid-column-end: 3;
	grid-row-start: 3;
	grid-row-end: 4;	
	display: flex;
	justify-content: center;
`;

const SignOutStyle = styled.div`

`

const MyAccountPosition = styled.div`
	grid-column-start: 3;
	grid-column-end: 4;
	grid-row-start: 1;
	grid-row-end: 1;	
	display: flex;
	justify-content: center;
	align-self: center;
`;



export class Authenticated extends Component {

    render() {
        return (
					<View>
						<AddEmailPosition>
							<AddEmail></AddEmail>
						</AddEmailPosition>
						<IDidItPosition>
							<IDidItStyle>
								<IDidIt></IDidIt>
							</IDidItStyle>
						</IDidItPosition>
						<MyAccountPosition>
							<MyAccount image={this.props.image}/>
						</MyAccountPosition>
						<SignOutPosition>
							<SignOutStyle>
								<SignOut setSignedInValue={this.props.setSignedInValue}></SignOut>
							</SignOutStyle>	
						</SignOutPosition>
					</View>
        );
    }
}