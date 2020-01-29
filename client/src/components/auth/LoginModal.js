//This is the login component

//this component presents a modal to the user which allows them to add a dream
import React, { Component } from 'react';
import {
    Button, 
    Modal, 
    ModalHeader,
    ModalBody, 
    Form, 
    FormGroup, 
    Label, 
    Input,
    NavLink,
    Alert
} from 'reactstrap';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';


//This is the Register Modal component ehich allows the user to register to use the application
class LoginModal extends Component {
    state= {
        modal : false,
        email:'',
        passowrd:'',
        msg: null
    }
//Define props
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps){
        const { error, isAuthenticated} = this.props;
        if(error !== prevProps.error) {
            //See if there is a register error and display the appropriate message
            if(error.id === 'LOGIN_FAIL'){
                this.setState({ msg: error.msg.msg })
            } else {
                this.setState({ msg: null})
            }
        }
        //if the modal is open and authentication was succesful,close the modal
        if(this.state.modal) {
            if(isAuthenticated) {
                this.toggle();
            }
        }
    }
//open and close the modal
    toggle = () => {
        //Clear errors
        this.props.clearErrors();
        this.setState({
            modal: !this.state.modal
        });
    }

    //update the target value as the value changes
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    //submit the value to be added to the dream
    onSubmit = e => {
        e.preventDefault();

        //save email and password into state
        const { email, password } = this.state;
        //create a user object to submut
        const user = {
            email,
            password
        }
        //try to log user in
        this.props.login(user)  
    };

    render() {
        return (
            <div>
               <NavLink onClick={this.toggle} href="#">
                   <Button dark= "true">Login</Button>
               </NavLink>
               <Modal isOpen={this.state.modal}
               toggle={this.toggle}
               >
                   <ModalHeader toggle={this.toggle}>
                       Login to Dream Catcher
                   </ModalHeader>
                   <ModalBody>
                       
            {this.state.msg? <Alert color="danger">{this.state.msg}</Alert>: null }
                     <Form onSubmit={this.onSubmit}>
                         <FormGroup>
                            
                              <Label for="email">Email</Label>
                             <Input
                             type="email"
                             name="email"
                             id="email"
                             placeholder="Email"
                             className="mb-3"
                             onChange={this.onChange}/>

                              <Label for="password">Password</Label>
                             <Input
                             type="password"
                             name="password"
                             id="password"
                             placeholder="Password"
                             className="mb-3"
                             onChange={this.onChange}/>

                             <Button
                             color="dark" style={{ marginTop: '2rem'}} block>
                                Login
                             </Button>
                         </FormGroup>
                         </Form>  
                   </ModalBody>
               </Modal>
            </div>
        );
    }
}

//the reducer gives us access to everything within the error and the authReducer
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(mapStateToProps, { login, clearErrors }) (LoginModal);

