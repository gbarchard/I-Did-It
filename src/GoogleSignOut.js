import React, { Component } from 'react';
import { GoogleLogout } from 'react-google-login';

export class GoogleSignOut extends Component {
	
	logout = () => {
		console.log("Logged Out I think");
	}

	render() {
		return (
			<GoogleLogout
				buttonText="Logout"
				onLogoutSuccess={this.logout}
			>
			</GoogleLogout>
		);
	}
}