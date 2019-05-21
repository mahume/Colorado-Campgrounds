import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Group, Label, Control, Text, Check } from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './style.css';

function LoginForm() {
  return (
    <Container className="shadow">
      <Form>
        <Group controlId="formBasicEmail">
          <Label>Email address</Label>
          <Control type="email" placeholder="Enter email" />
          <Text className="text-muted">
            We'll never share your email with anyone else.
          </Text>
        </Group>
        <Group controlId="formBasicPassword">
          <Label>Password</Label>
          <Control type="password" placeholder="Password" />
        </Group>
        <Group controlId="formBasicChecbox">
          <Check type="checkbox" label="Check me out" />
        </Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default LoginForm;