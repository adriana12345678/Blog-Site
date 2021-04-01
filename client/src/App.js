import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Users from './components/Users'
import SingleUser from './components/SingleUser'
import NewUser from './components/NewUser'
import EditUser from './components/EditUser'
import {Provider} from 'react-redux'
import store from './store'
import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
     <Provider store={store}>

        <Router>

        <div>
          <Navbar />
          <Route exact path="/" component={Users}/>
          <Route exact path="/new" component={NewUser}/>
          <Route exact path="/users/:id" component={SingleUser} />
          <Route exact path="/users/:id/edit" component={EditUser} />
        </div>

        </Router>
     </Provider>
    );
  }
}

export default App;
