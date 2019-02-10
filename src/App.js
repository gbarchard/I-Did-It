import React, { Component } from 'react';
import { request } from 'graphql-request';

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
        userId: localStorage.getItem("userId"),
        newsFeed: []
      })
      const query = `query {
				mydidits(
					userId: "${localStorage.getItem("userId")}")` +
				`{
					id
					comment
					image
					date 
				}
			}`
      
			//let url = "https://evening-stream-42098.herokuapp.com/graphql"
			let url = "http://localhost:3000/graphql"
			request(url, query).then(data => {
        console.log(data.mydidits)
				this.setState({
          newsFeed: data.mydidits
        })
			})
    }
    else {
      this.setState({
        signedIn: false,
        imageUrl: "",
        userId: "",
        newsFeed: []
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
        <Authenticated newsFeed={this.state.newsFeed} userId={this.state.userId} image={this.state.imageUrl} setSignedInValue={this.setSignedIn}/>
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
