import React from 'react'
import { Row } from 'react-bootstrap';
import BusinessPitch from '../components/BusinessPitch.component';
import LandingContent from '../components/LandingContent.component';
import ProductPreview from '../components/ProductPreview.component';
import Testimony from '../components/Testimony.component';


import Styled from '../components/stylesheet.styled'
import FAQs from '../components/FAQs.component';

function Home() {
  return (
    <>
      <Row>
        <LandingContent/>
      </Row>
      <Row>
        <Styled.AnotherHomeContainer>
          <ProductPreview/>
          <BusinessPitch/>
          <Testimony/>
        </Styled.AnotherHomeContainer>
      </Row>
      <Row>
        <FAQs/>
      </Row>
    </>
  );
}

export default Home;