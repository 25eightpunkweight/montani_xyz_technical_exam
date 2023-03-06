import React from 'react'
import {Search} from 'react-bootstrap-icons';
import { InputGroup } from 'react-bootstrap';

// import Styled from './.styled'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SearchBarForm() {
  return (
    <Form>
      <Form.Group>
        <InputGroup>
          <InputGroup.Text>&#128269;</InputGroup.Text>
          <Form.Control 
            type="text" 
            placeholder="Search..."
          />
        </InputGroup>
      </Form.Group>
    </Form>
  );
}

export default SearchBarForm;