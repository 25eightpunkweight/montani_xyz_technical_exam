import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import bannerBackground from '../assets/xyz_assets/Assets/MaskGroup4.png';
import Styled from './stylesheet.styled';

// import Styled from './.styled'

function BannerMessage() {
  const [show, setShow] = useState(true);
  
  if (show){
    return (
      <Styled.BannerMessage dismissible onClose={()=>{setShow(false)}}>
        Save up to $500 per year on millions of book titles!
      </Styled.BannerMessage>
    );
  } else {
    return null;
  }
}

export default BannerMessage;