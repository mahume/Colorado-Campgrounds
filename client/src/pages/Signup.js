import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import SignupForm from '../components/SignupForm';

class Signup extends Component {
  state = {
    username: '',
    password: '',
    confirmPassword: '',
  }
	handleChange = e => {
    const { name, value } = e.target;
    this.setState({
			[name]: value
		})
	}
	handleSubmit = e => {
		console.log('sign-up handleSubmit, username: ');
		console.log(this.state.username);
		e.preventDefault();

		//request to server to add a new username/password
    axios
      .post('/api/users', {
        username: this.state.username,
        password: this.state.password
      })
			.then(response => {
				console.log(response)
				if (!response.data.errmsg && response.data) {
					console.log('successful signup')
          axios.post('/api/users/login', { ...response.data, password: this.state.password })
            .then(response2 => {
              console.log(response2.data);
              this.props.updateUser({
                loggedIn: true,
                username: response.data.username
              }).then(() => this.props.history.push('/'));
            })
            .catch(error => console.error(error));
				} else {
					console.log('username already taken')
				}
      })
      .catch(error => {
				console.log('signup error: ')
				console.log(error)
			})
	}

  render() {
    return (
      <SignupForm
        username={this.state.username}
        password={this.state.password}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default withRouter(Signup);