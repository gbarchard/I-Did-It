import React, { Component } from 'react';
import styled from "styled-components";

import {IDidIt} from '../components/IDidIt';
import {AddEmail} from '../components/AddEmail';
import { SignOut } from '../components/SignOut';
import { MyAccount } from '../components/MyAccount';

const View = styled.div`
	display: grid;  
	grid-template-columns: 20% 60% 20%;
	grid-template-rows: 10% 80% 10%
`;

const AddEmailPosition = styled.div`
	grid-column-start: 2;
	grid-column-end: 3;
	grid-row-start: 1;
	grid-row-end: 1;	
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
`;

const SignOutPosition = styled.div`
	grid-column-start: 2;
	grid-column-end: 3;
	grid-row-start: 3;
	grid-row-end: 4;	
`;

const SignOutStyle = styled.div`
	align-items: center;
`

const MyAccountPosition = styled.div`
	grid-column-start: 3;
	grid-column-end: 4;
	grid-row-start: 1;
	grid-row-end: 1;	
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