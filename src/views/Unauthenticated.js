import React, { Component } from 'react';
import styled from "styled-components";

import { SignIn } from '../components/SignIn';

export class Unauthenticated extends Component {

	render() {
		return (
			<SignIn setSignedInValue={this.props.setSignedInValue}/>
		);
	}
}