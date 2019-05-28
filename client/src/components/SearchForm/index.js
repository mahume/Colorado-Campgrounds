import React from 'react';
// React-Bootstrap
import Form from 'react-bootstrap/Form';
import { Row, Group, Label, Control } from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


function SearchForm({ address, city, state, zip, handleChange, handleSubmit }) {
  return (
    <Form id="weatherSearchForm">
      <Group as={Col} controlId="formGridAddress1">
        <Label>Address</Label>
        <Control 
          type="text"
          placeholder="1234 Main St" 
          name="searchAddress"
          value={address}
          onChange={handleChange}
        />
      </Group>  
      <Group as={Col} controlId="formGridCity">
        <Label>City</Label>
        <Control 
          type="text"
          name="searchCity"
          value={city}
          onChange={handleChange}
        />
      </Group>
      <Row as={Col}>
        <Group as={Col} controlId="formGridState">
          <Label>State</Label>
          <Control 
            as="select"
            name="searchState"
            value={state}
            onChange={handleChange}
          >
            <option>Choose...</option>
            <option>...</option>
          </Control>
        </Group>
        <Group as={Col} controlId="formGridZip">
          <Label>Zip</Label>
          <Control 
            type="number"
            name="searchZip"
            value={zip}
            onChange={handleChange}
          />
        </Group>
      </Row>    
      <Button 
        as={Col} 
        variant="primary" 
        type="submit"
        onClick={handleSubmit}
      >
        Search
      </Button>      
    </Form>
  )
}

export default SearchForm;