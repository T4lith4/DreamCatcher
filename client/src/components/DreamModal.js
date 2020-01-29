//this component presents a modal to the user which allows them to add a dream
import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  

} from "reactstrap";

import { connect } from "react-redux";
import { addDream } from "../actions/DreamActions";
import { PropTypes } from "prop-types";
import View from './View';
import '.././App.css';

class DreamModal extends Component {
  state = {
    modal: false,
    name: ""
  };

  //set authenticated propTypes so that we can hide the dreams if a user is not logged in
  static propTypes = {
    isAuthenticated: PropTypes.bool
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  //update the target value of the name as the user types their name in
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
     
    });
  };
  //submit the value to be added to the dream
  onSubmit = e => {
    e.preventDefault();
    const newDream = {
     name: this.state.name
  
    };
    //add dream via addDream action
    this.props.addDream(newDream);
    //Close modal
    this.toggle();
  };
  //we want the add dream button to show when the user is authenticated, and show the view component if they are not
  render() {
    return (
      <div>
        {this.props.isAuthenticated ? (
          <div>
          <h4 className="welcome-msg">What is your subconscious telling you?</h4>
          <Button
            color="dark"
            className="add-btn"
            onClick={this.toggle}
          >
            Add a Dream
          </Button>
          </div>
        
        ) : (
         <View/>
        )}

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Document a Dream</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="dream">Dream Summary</Label>
                <Input
                  type="textarea"
                  name="name"
                  id="name"
                  placeholder="what happened in your dream? Feel free to include any highlights and how your dream made you feel"
                  onChange={this.onChange}
                />
 
                <Button className="modal-add-btn" color="dark" style={{marginTop: "2rem"}} block>
                  Add Dream
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dream: state.dream,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { addDream }
)(DreamModal);
