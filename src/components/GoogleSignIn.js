import React, { Component } from 'react';

export class GoogleSignIn extends Component {
	constructor(props) {
    super(props);
		this.onSignIn=this.onSignIn.bind(this);
	}
	
	componentDidMount() {
		window.gapi.signin2.render('g-signin2', {
			'scope': 'https://www.googleapis.com/auth/plus.profile.emails.read',
			'onsuccess': this.onSignIn,
			'theme': 'dark'
		});  
	}

	onSignIn(response) {
		this.props.setSignedInValue(true, response)
	}

	render() {
		return (
			<div id='g-signin2'/>
		);
	}
}