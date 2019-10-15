//react imports
import React, { Component } from "react";
//component imports
import AppNavBar from './components/AppNavbar';
import DreamList from './components/DreamList';
//redux imports
import { Provider } from 'react-redux';
import store from './store';
//style imports
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import DreamModal from './components/DreamModal';
import { Container } from 'reactstrap';
import { loadUser } from './actions/authActions';

//wrapping the entire element in redux provider allows us to share state with all of our components
//we are using componentDidMount so that we can call loadUser as soon as the app renders
class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <AppNavBar/>
        <Container>
        <DreamModal/>
        <DreamList/>
        </Container>
      </div>
      </Provider>
    );
  }
}

export default App;
