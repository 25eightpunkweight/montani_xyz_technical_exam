import logo from './logo.svg';
import './App.css';
import { Container, Row } from 'react-bootstrap';
import BannerMessage from './components/BannerMessage.component';
import Navigation from './components/Navigation.component';
import Footer from './components/Footer.component';
import Home from './pages/Home.page';
import Book from './pages/Book.page';
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
          <Route path="/book/:isbn" element={<Book/>}/>
        </Routes>
        <Row>
          <Footer/>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
