import React, { Component, Fragment } from "react";
//import react strap navbar so that we can utilize the hamburger icon for if users use the app on their phone
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from "reactstrap";


import RegisterModal from "./auth/RegisterModal";
import LoginModal from "./auth/LoginModal";
import Logout from "./auth/Logout";


//we need to access the auth state through redux, so we bring in redux
import { connect } from "react-redux";
import PropTypes from "prop-types";

//we need to assign state so that the component knows if the nav has been opened or not
class AppNavBar extends Component {
  state = {
    isOpen: false
  };

  //add proptypes
  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  //to avoid binding we make use of the arrow function
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  //inside render we need to access auth as it includes all of the state values of auth and the user
  render() {
    const { isAuthenticated, user } = this.props.auth;

    //variable set up for users logged in- logout
    const authLinks = (
      <Fragment>
          <NavItem>
              <span className="navbar-text mr-3">
            <strong>{ user? `Welcome ${user.name}` : ' '}</strong>
              </span>
          </NavItem>
        <NavItem>
          <Logout />
        </NavItem>
      </Fragment>
    );
    //variable set up for visitors not logged in- login and register
    const guestLinks = (
      <Fragment>
        <NavItem>
          <RegisterModal />
        </NavItem>

        <NavItem>
          <LoginModal />
        </NavItem>
      </Fragment>
    );

    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">Dream Catcher</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                 { isAuthenticated ? authLinks : guestLinks } 
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

//access the auth state so that the logout option can be visible in the nav when the user is authenticated
const mapStateTpProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateTpProps,
  null
)(AppNavBar);
