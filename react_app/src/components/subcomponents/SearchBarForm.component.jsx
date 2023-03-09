import React, { useState } from 'react'
import {Search} from 'react-bootstrap-icons';
import { InputGroup } from 'react-bootstrap';
import {isValidISBN13, isValidISBN10} from '../../helpers/ISBNHelpers';
import { useHistory, useNavigate } from "react-router-dom";


// import Styled from './.styled'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { redirect } from 'react-router-dom';

function SearchBarForm() {
  const [searchISBN, setSearchISBN] = useState('');
  const [errorText, setErrorText] = useState('');
  let navigate = useNavigate();
  
  const checkForValidISBN = (e) => {
    e.preventDefault();
    // 978-0-596-52068-7
    if ( !( isValidISBN10(searchISBN) || isValidISBN13(searchISBN) ) ){
      setErrorText("please enter a \n valid ISBN");
      return;
    }

    setErrorText('');

    navigate("/book/" + searchISBN);
  };
  
  return (
    <>
      <Form
        onSubmit={e=>{checkForValidISBN(e)}}
      >
        <Form.Group style={{display: 'flex', flexDirection: 'row'}}>
          <InputGroup>
            <InputGroup.Text>&#128269;</InputGroup.Text>
            <Form.Control 
              type="text" 
              placeholder="Enter an ISBN..."
              onChange={e => {
                setSearchISBN(e.target.value.trim())
              }}
            />
            <Form.Label style={{color: 'red', fontSize: '12px', marginLeft: '10px', width: '100px'}}>{errorText}</Form.Label>
          </InputGroup>
        </Form.Group>
      </Form>
    </>
  );
}

export default SearchBarForm;