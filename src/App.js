import React, { Component } from 'react';

import { Authenticated } from './views/Authenticated';
import { Unauthenticated } from './views/Unauthenticated';

class App extends Component {
  constructor(props) {
    super(props);
    this.setSignedIn=this.setSignedIn.bind(this)
  }

  componentWillMount() {
    if (localStorage.getItem("signedIn")==="true") {
      this.setState({
        signedIn: true,
        imageUrl: localStorage.getItem("imageUrl"),
        userId: localStorage.getItem("userId")
      })
    }
    else {
      this.setState({
        signedIn: false,
        imageUrl: "",
        userId: ""
      })
    }

  }

  setSignedIn(signedInStatus, response) {
    localStorage.setItem("signedIn",signedInStatus.signedIn)
    this.setState({signedIn: signedInStatus.signedIn});

    if (signedInStatus.signedIn) {
      var imageURL = response.addUser.image
      var userId = signedInStatus.userId
      this.setState({
        imageUrl: imageURL,
        userId: userId
      })
      localStorage.setItem("imageUrl", imageURL)
      localStorage.setItem("userId", userId)
    }
    else {
      localStorage.setItem("imageUrl", "")
      this.setState({imageUrl: ""})
      localStorage.setItem("userId", "")
      this.setState({userId: ""})
    }
  }

  ShowCorrectScreen() {
    if (this.state.signedIn===true) {
      return (
        <Authenticated userId={this.state.userId} image={this.state.imageUrl} setSignedInValue={this.setSignedIn}/>
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
