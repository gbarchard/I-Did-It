import React, { Component } from 'react';
import { request } from 'graphql-request';

import { config } from './config.js';

import { getCurrentDay } from './GetCurrentDay';

import { Authenticated } from './views/Authenticated';
import { Unauthenticated } from './views/Unauthenticated';

class App extends Component {
  constructor(props) {
    super(props);
    this.setSignedIn=this.setSignedIn.bind(this)
    this.setIDidIt=this.setIDidIt.bind(this)
    this.getDidIts=this.getDidIts.bind(this)

  }

  componentWillMount() {
    
    if (localStorage.getItem("signedIn")==="true") {
      this.setState({
        signedIn: true,
        imageUrl: localStorage.getItem("imageUrl"),
        userId: localStorage.getItem("userId"),
        newsFeed: [],
        iDidItColor: 'white',
        iDidItToday: false,
      }) 
      this.getDidIts ()
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

  setIDidIt(iDidIt) {
    if (iDidIt) {
      this.setState({
        iDidItColor: 'gray',
        iDidItToday: true 
      })
    }
    else {
      this.setState({
        iDidItColor: 'red',
        iDidItToday: false 
      })
    }
    this.getDidIts ()
  }

  getDidIts () {
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

    let url = config.baseURL
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
      if (currentDay.toString() === mydidits[0].date) {
        this.setState({
          iDidItColor: 'red',
          iDidItToday: true 
        })
      }
      else {
        this.setState({
          iDidItColor: 'gray',
          iDidItToday: false 
        })
      }
    })
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
        <Authenticated iDidItColor={this.state.iDidItColor} iDidItToday={this.state.iDidItToday} newsFeed={this.state.newsFeed} userId={this.state.userId} image={this.state.imageUrl} setSignedInValue={this.setSignedIn} setIDidIt={this.setIDidIt}/>
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
