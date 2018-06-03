import React, { Component } from 'react';
import styled from "styled-components";

import { GoogleSignIn } from '../components/GoogleSignIn';

const View = styled.div`
	display: grid;  
	grid-template-columns: 1fr;
	grid-template-rows: 80vh;
`;

const SignInPosition = styled.div`
	grid-column-start: 1;
	grid-column-end: 2;
	grid-row-start: 1;
	grid-row-end: 2;
	display: flex;
	align-self: center;
  align-items: center;
  justify-content: center;
`;

export class Unauthenticated extends Component {
	render() {
		return (
			<View>
				<SignInPosition>
					<GoogleSignIn setSignedInValue={this.props.setSignedInValue}/>
				</SignInPosition>	
			</View>
		);
	}
}