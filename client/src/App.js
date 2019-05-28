import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

import NavigationBar from './components/NavigationBar';

class App extends Component {
  state = {
    loggedIn: false,
    username: null
  }
  componentDidMount = () => {
    this.getUser();
  }
  updateUser = userObject => {
    this.setState(userObject);
  }
  getUser = () => {
    axios
      .get('/user/')
      .then(response => {
        console.log('Get user response: ');
        console.log(response.data);
        if (response.data.user) {
          console.log('Get User: There is a user saved in the server session: ')
          this.setState({
            loggedIn: true,
            username: response.data.user.username
          })
        } else {
          console.log('Get user: no user');
          this.setState({
            loggedIn: false,
            username: null
          })
        }
      })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavigationBar 
            updateUser={this.updateUser} 
            loggedIn={this.state.loggedIn} 
          />
          {/* Greet user */}
          {this.state.loggedIn &&
            <p>Join the party, {this.state.username}!</p>
          }
          <Route
            exact path="/"
            component={Home} 
          />
          <Route
            path="/login"
            // component={Login}
            // updateUser={this.updateUser}
            render={() =>
              <Login
                updateUser={this.updateUser}
              />
            }
          />
          <Route
            path="/signup"
            render={() =>
              <Signup/>
            }
          />
        </div>
      </Router>
    );
  }
}

export default App;
