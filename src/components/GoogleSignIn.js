import React, { Component } from 'react';
import { request } from 'graphql-request';

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
		const mutation = `mutation {
			addUser(
				firstName: "${response.w3.ofa}",
				lastName: "${response.w3.wea}", 
				email: "${response.w3.U3}",
				token: "${response.w3.Eea}",
				image: "${response.w3.Paa}"
			)` +
			`{
				id
				firstName
				lastName
				email
				token
				image
				created
			}
		}`

		//let url = "https://evening-stream-42098.herokuapp.com/graphql"
		let url = "http://localhost:3000/graphql"
		request(url, mutation).then(data => {
			this.props.setSignedInValue({
				"signedIn": true,
				"userId": data.addUser.id
			}, data)
		})
		
	}

	render() {
		return (
			<div id='g-signin2'/>
		);
	}
}