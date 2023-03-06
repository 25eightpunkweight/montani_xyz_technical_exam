import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

import Styled from './stylesheet.styled';
import ProductCard from './subcomponents/ProductCard.component';

function ProductPreview() {

  const previewTitles = [
    'Doughnuts and Doom',
    'The Bend Of Luck',
    'The Underwater Welder',
  ];

  return (
    <Container>
      <Row style={Styled.rowSectionSubStyle}>
        <h1>Explore our Books</h1>
        <p>with our dedicated customer support team, you can rest easy knowing that we're doing everything we can to save you time, money, and stress</p>
      </Row>
      <Row style={Styled.rowSectionSubStyle}>
        {/* loop through 3 of the book titles here */}
        {
          previewTitles.map(
            (e , i) => {
              return (
                <Col md={4} key={i}>
                  <ProductCard title={e}/>
                </Col>
              )
            }  
          )
        }
      </Row>
    </Container>
  );
}

export default ProductPreview;