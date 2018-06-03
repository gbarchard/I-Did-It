import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';

export class SignIn extends Component {

	responseGoogleSuccess = (response) => {
		this.props.setSignedInValue(true, response)
	}

	responseGoogleFailure = (response) => {
		this.props.setSignedIn(false, response)
	}

	render() {
		return (
			<GoogleLogin
				clientId="1055110234972-c4j11hps4tctcj0cvt8aonjk6l121j1m.apps.googleusercontent.com"
				buttonText="Login with Google"
				onSuccess={this.responseGoogleSuccess}
				onFailure={this.responseGoogleFailure}
			/>
		);
	}
}