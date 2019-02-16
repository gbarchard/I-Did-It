import React, { Component } from 'react';
import { request } from 'graphql-request';

import { Authenticated } from './views/Authenticated';
import { Unauthenticated } from './views/Unauthenticated';
import { getCurrentDay } from './GetCurrentDay';

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
        newsFeed: [],
        iDidItColor: '#B3A369',
        iDidItToday: false,
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
        let currentDay = getCurrentDay()
        let mydidits = data.mydidits
        this.setState({
          newsFeed: mydidits
        })
        this.setState({
          iDidItColor: 'white',
          iDidItToday: false
        })
        mydidits.forEach(didit => {
          if ((currentDay.toString() === (didit.date).toString()) && this.state.iDidItToday === false) {
            console.log("got here")
            this.setState({
              iDidItColor: '#A9A9A9',
              iDidItToday: true 
            })
          }
          else if (this.state.iDidItToday === false) {
            this.setState({
              iDidItColor: '#B3A369',
              iDidItToday: false
            })
          }
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
    console.log(this.state)
    if (this.state.signedIn===true) {
      return (
        <Authenticated iDidItColor={this.state.iDidItColor} iDidItToday={this.state.iDidItToday} newsFeed={this.state.newsFeed} userId={this.state.userId} image={this.state.imageUrl} setSignedInValue={this.setSignedIn}/>
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
