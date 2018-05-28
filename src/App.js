import React, { Component } from 'react';
import {IDidIt} from './IDidIt';
import {AddEmail} from './AddEmail';
import styled from "styled-components";
import { SignOut } from './SignOut';
import { SignIn } from './SignIn';

const MainPage = styled.div`
  text-align: center;
  padding-top: 0vmin;
`;

const LocateEmail = styled.div`
  padding-top: 5%;
  padding-left: 65%;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.setSignedIn=this.setSignedIn.bind(this)
  }
  componentWillMount() {
    if (localStorage.getItem("signedIn")==="true") {
      this.setState({signedIn: true})
    }
    else {
      this.setState({signedIn: false})
    }
  }
  setSignedIn(x) {
    localStorage.setItem("signedIn",x)
    this.setState({signedIn: x});
  }
  ShowCorrectScreen() {
    if (this.state.signedIn===true) {
      return (
        <div>
          <LocateEmail>
            <AddEmail></AddEmail>
          </LocateEmail>
          <MainPage>
            <IDidIt></IDidIt>
          </MainPage>
          <SignOut setSignedInValue={this.setSignedIn}></SignOut>
        </div>
      )
    }
    else {
      return (
        <div id="googleButton" className="g-signin2" data-onsuccess="onSignIn" data-theme="dark">
          <SignIn setSignedInValue={this.setSignedIn}></SignIn>
        </div>
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
