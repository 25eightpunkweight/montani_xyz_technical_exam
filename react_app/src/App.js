import logo from './logo.svg';
import './App.css';
import { Container, Row } from 'react-bootstrap';
import BannerMessage from './components/BannerMessage.component';
import Navigation from './components/Navigation.component';
import LandingContent from './components/LandingContent.component';
import ProductPreview from './components/ProductPreview.component';
import Styled from './components/stylesheet.styled';
import BusinessPitch from './components/BusinessPitch.component';
import Testimony from './components/Testimony.component';
import FAQs from './components/FAQs.component';
import Footer from './components/Footer.component';
import Home from './pages/Home.page';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const containerStyle = {
    maxWidth: '100vw'
  }


  return (
    <BrowserRouter className="App">
      <Container style={containerStyle}>
        <Row >
          <BannerMessage/>
        </Row>
        <Row>
          <Navigation/>
        </Row>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
        <Row>
          <Footer/>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
