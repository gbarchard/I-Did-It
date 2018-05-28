import React, { Component } from 'react';
import styled from "styled-components";

import {IDidIt} from '../components/IDidIt';
import {AddEmail} from '../components/AddEmail';
import { SignOut } from '../components/SignOut';
import { MyAccount } from '../components/MyAccount';


const MainPage = styled.div`
  text-align: center;
  padding-top: 0vmin;
`;

const LocateEmail = styled.div`
  padding-top: 5%;
  padding-left: 65%;
`;

export class Authenticated extends Component {

    render() {
        return (
					<div>
						<LocateEmail>
							<AddEmail></AddEmail>
						</LocateEmail>
						<MainPage>
							<IDidIt></IDidIt>
						</MainPage>
						<SignOut setSignedInValue={this.props.setSignedInValue}></SignOut>
						<MyAccount image={this.props.image}/>
					</div>
        );
    }
}