import React from 'react';
// React-Bootstrap
import Form from 'react-bootstrap/Form';
import { Row, Group, Label, Control } from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function SearchForm() {
  return (
    <Form>
      <Group as={Col} controlId="formGridAddress1">
        <Label>Address</Label>
        <Control placeholder="1234 Main St" />
      </Group>  
      <Group as={Col} controlId="formGridCity">
        <Label>City</Label>
        <Control />
      </Group>
      <Row as={Col}>
        <Group as={Col} controlId="formGridState">
          <Label>State</Label>
          <Control as="select">
            <option>Choose...</option>
            <option>...</option>
          </Control>
        </Group>
        <Group as={Col} controlId="formGridZip">
          <Label>Zip</Label>
          <Control />
        </Group>
      </Row>    
      <Button as={Col} variant="primary" type="submit">
        Search
      </Button>      
    </Form>
  )
}

export default SearchForm;