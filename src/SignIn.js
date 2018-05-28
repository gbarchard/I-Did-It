import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';

export class SignIn extends Component {

    responseGoogleSuccess = (response) => {
        console.log(response);
        this.props.setSignedInValue(true)

    }

    responseGoogleFailure = (response) => {
        console.log(response);
        this.props.setSignedInValue(false)

    }
      
    SignIn = () => {
        this.props.setSignedInValue(true)
    }

    render() {
        return (
            //<button onClick={this.SignIn}>Sign In</button>
            <GoogleLogin
                clientId="1055110234972-c4j11hps4tctcj0cvt8aonjk6l121j1m.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={this.responseGoogleSuccess}
                onFailure={this.responseGoogleFailure}
            />,document.getElementById('googleButton')
        );
    }
}