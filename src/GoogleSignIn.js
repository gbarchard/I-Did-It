import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';

export class GoogleSignIn extends Component {

	responseGoogle = (response) => {
		console.log(response);
	}

	render() {
		return (
			<div>
			<GoogleLogin className="g-signin2"
				clientId="1055110234972-c4j11hps4tctcj0cvt8aonjk6l121j1m.apps.googleusercontent.com"
				buttonText="Login"
				onSuccess={this.responseGoogle}
				onFailure={this.responseGoogle}
			/>
			<div className="g-signin2"></div>
			</div>
		);
	}
}