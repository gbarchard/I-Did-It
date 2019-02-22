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
        iDidItColors: ['white','white','white'],
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

  setIDidIt(iDidIt,index) {
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
        type 
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
        iDidItColors: ['gray','gray','gray'],
        iDidItToday: false 
      })
      mydidits.forEach(didit => {
        if (currentDay.toString() === didit.date) {
          switch(didit.type) {
            case 1:
            let colors1 = []
            colors1 = this.state.iDidItColors
            colors1[0] = 'red'
            this.setState({
              iDidItColors: colors1,
              iDidItToday: true 
            })
            break
            case 2:
            let colors2 = []
            colors2 = this.state.iDidItColors
            colors2[1] = 'green'
            this.setState({
              iDidItColors: colors2,
              iDidItToday: true 
            })
            break
            case 3:
            let colors3 = []
            colors3 = this.state.iDidItColors
            colors3[2] = 'purple'
            this.setState({
              iDidItColors: colors3,
              iDidItToday: true 
            })
            break
            default:
          }

        }
        else {
  
        }
      });

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
        <Authenticated iDidItColors={this.state.iDidItColors} iDidItColor={this.state.iDidItColors} iDidItToday={this.state.iDidItToday} newsFeed={this.state.newsFeed} userId={this.state.userId} image={this.state.imageUrl} setSignedInValue={this.setSignedIn} setIDidIt={this.setIDidIt}/>
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
