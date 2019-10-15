import React from 'react';
import {Container } from 'reactstrap';
import '../App.css'

export default class View extends React.Component {
    render() {
      return (
        <Container>
        <div className="login-box">
         <h4><h1 className="plz-login">Dream Catcher</h1><br/>
         Log in to Document your Dreams</h4> 
        </div>
        </Container>
      );
    }
  }
  