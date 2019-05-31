import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Group, Label, Control, Text } from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import './style.css'

function Signup({ username, password, handleChange, handleSubmit }) {
	return (
		<Container>
			<Form className="signupform">
				<Group controlId="formBasicUsername">
					<Text>Sign up</Text>
					<Label>Username</Label>
					<Control 
						type="text" 
						placeholder="Username" 
						name="username"
						value={username}
						onChange={handleChange}
					/>
				</Group>
				<Group controlId="formBasicPassword">
					<Label>Password</Label>
					<Control 
						type="password" 
						placeholder="Password" 
						name="password"
						value={password}
						onChange={handleChange}
					/>
				</Group>
				<Button 
					variant="primary" 
					type="submit" 
					onClick={handleSubmit}
				>
					Signup
				</Button>
			</Form>
		</Container>
	)
}

export default Signup