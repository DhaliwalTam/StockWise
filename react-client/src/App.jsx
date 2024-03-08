import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import './App.css';

 import About from './components/User/About';
 import ContactUs from './components/User/ContactUs';
import Home from './components/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';


function App() {
  return (
    <Router>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">StockWise</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/contactUs">Contact Us</Nav.Link>
              <Nav.Link as={Link} to="/register">Register</Nav.Link> 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
      <div >
        <Routes>
        <Route index element={<Home />} />
          <Route path="home" element={<Home />} /> 
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/contactUs" element={<ContactUs/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/register" element={<Register/>} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
