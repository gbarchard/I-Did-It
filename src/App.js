import React, { Component } from 'react';
import {IDidIt} from './IDidIt';
import {AddEmail} from './AddEmail';
import {GoogleSignIn} from './GoogleSignIn';
import {GoogleSignOut} from './GoogleSignOut';
import styled from "styled-components";

const MainPage = styled.div`
  text-align: center;
  padding-top: 0vmin;
`;

const LocateEmail = styled.div`
  padding-top: 5%;
  padding-left: 65%;
`;

class App extends Component {
  render() {
    return (
      <div>
        <GoogleSignIn></GoogleSignIn>
        <GoogleSignOut></GoogleSignOut>
        <LocateEmail>
          <AddEmail></AddEmail>
        </LocateEmail>
        <MainPage>
          <IDidIt></IDidIt>
        </MainPage>
      </div>
    );
  }
}

export default App;
