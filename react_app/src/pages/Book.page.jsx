import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Image, ListGroup, Row, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

import Styled from '../components/stylesheet.styled'

function Book() {
  const { isbn } = useParams();

  const [loading, setLoading] = useState(true);
  const [bookData, setBookData] = useState(null);
  const [authors, setAuthors] = useState('');
  const [respError, setRespError] = useState(null);

  const getBookData = () => {
    let joinedAuthors = [];
    axios.get('/book', {params: {isbn: isbn}})
      .then((resp) => {
        setBookData(resp.data.book);
        resp.data.book.authors.forEach((auth, idx)=>{
          joinedAuthors.push([auth.first_name, auth.middle_name, auth.last_name].join(' '));
        });
        setAuthors(joinedAuthors.join(', '))
      })
      .catch((err)=>{
        if (err.response.status == 404){
          setRespError(404);
        }
      });

    setLoading(false);
  }

  useEffect(()=>{
    getBookData();
  },[]);

  return (
    <Container>
      <Row style={{...Styled.rowSectionSubStyle, ...{backgroundColor: '#f2f5f8'}}}>
      {
        loading ? 
          <Spinner animation="border" />
          : 
          <>
            {
              bookData && 
              <>
                <Col md={4}>
                  <Image fluid src={require('../assets/xyz_assets/Assets/the_underwater_welder.png')}/>
                </Col>
                <Col md={8}>
                  <ListGroup>
                    <ListGroup.Item>
                      <h2>{bookData.title}</h2>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <h4>by {authors}</h4>
                    </ListGroup.Item>
                    <ListGroup.Item></ListGroup.Item>
                    <ListGroup.Item><h6>Edition: {bookData.edition}</h6></ListGroup.Item>
                    <ListGroup.Item><h6>Price: {bookData.price}</h6></ListGroup.Item>
                    <ListGroup.Item><h6>ISBN: {bookData.isbn_13}</h6></ListGroup.Item>
                    <ListGroup.Item><h6>Publication Year: {bookData.year_published}</h6></ListGroup.Item>
                    <ListGroup.Item><h6>Publisher: {bookData.publisher}</h6></ListGroup.Item>
                  </ListGroup>
                </Col>
              </>
            }
            {
              respError == 404 && 
              <div style={{textAlign: 'center'}}>
                <h3>Oops!</h3>
                <p>Looks like we haven't registered that book yet!</p>
              </div>

            }
          </>
      }
      </Row>
    </Container>

  )
}

export default Book;