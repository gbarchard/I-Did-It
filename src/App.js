import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import styled from "styled-components";

import { Authenticated } from './views/Authenticated';
import { Unauthenticated } from './views/Unauthenticated';

class App extends Component {
  constructor(props) {
    super(props);
    this.setSignedIn=this.setSignedIn.bind(this)
  }

  componentWillMount() {
    if (localStorage.getItem("signedIn")==="true") {
      this.setState({signedIn: true});
      this.setState({imageUrl: localStorage.getItem("imageUrl")})
    }
    else {
      this.setState({signedIn: false})
    }

  }

  setSignedIn(signedInStatus, response) {
    localStorage.setItem("signedIn",signedInStatus)
    this.setState({signedIn: signedInStatus});

    if (signedInStatus) {
      var imageURL = response.w3.Paa
      this.setState({imageUrl: imageURL})
      localStorage.setItem("imageUrl", imageURL)
    }
    else {
      localStorage.setItem("imageUrl", "")
      this.setState({imageUrl: ""})
    }
  }

  ShowCorrectScreen() {
    if (this.state.signedIn===true) {
      return (
        <Authenticated image={this.state.imageUrl} setSignedInValue={this.setSignedIn}/>
      )
    }
    else {
      return (
          <Unauthenticated setSignedInValue={this.setSignedIn}></Unauthenticated>
      )
    }
  }

  render() {
    return (
        <div>
          {this.ShowCorrectScreen()}
        </div>
    );
  }
}

export default App;
