//React imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Styling imports
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import "../App.css";
//connect allows us to access state from within redux
import { connect } from 'react-redux';
//component anf function imports
import { getDreams, deleteDream } from '../actions/DreamActions';



class DreamList extends Component {

    //declare proptypes
    static propTypes = {
        getDreams : PropTypes.func.isRequired,
        dream : PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    };

    componentDidMount() {
        this.props.getDreams();
    }
//Call delete action
    onDeleteClick = (id) => {
        this.props.deleteDream(id);
    };

    
//we need to render a button that will accept a dream and list all of the dreams added with delete buttons next to them
    render() {
        const { dreams } = this.props.dream;
        return (
          <Container>
              {this.props.isAuthenticated ?  <ListGroup>
              <TransitionGroup className="dream-list">
                {dreams.map(({ _id, name, date, highlight}) => (
                  <CSSTransition key={_id} timeout={500} classname="fade">
                    <ListGroupItem className="dream-items">
                      <div className="dreamList">
                   <p><h6>Date of entry:</h6>{date}</p> 
                   <p><h6>Dream Summary:</h6>{name}</p> 
              
                       <Button
                          className="remove-btn"
                          color="danger"
                          size="sm"
                          onClick={this.onDeleteClick.bind(this, _id)}
                        >
                          delete
                        </Button>
                        </div> 
                    </ListGroupItem>
                  </CSSTransition>
                ))}
              </TransitionGroup>
            </ListGroup> : null }
          </Container>
        );
    }
}

//mapStatetoProps allow us to map our dreams as a component property
//we are using dream  because that is what we called the reducer
const mapStateToProps = (state) => ({
    dream: state.dream,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { getDreams, deleteDream })(DreamList);