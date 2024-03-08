import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import Button from 'react-bootstrap/Button';

function Home(props) {
    return (
        <div className="home-container"> {}
            <h1>Welcome to StockWise!</h1>
            <img src={logo} alt="StockWise Logo" className="logo" /> {}

            <div className="button-container"> {}
                <h2>Sign In</h2>
                <Button size="lg" variant="primary" type="Button"><Link to="/login">Sign In</Link></Button>
            </div>

            <div className="button-container"> {}
                <h2>Sign Up</h2>
                <Button size="lg" variant="primary" type="Button"><Link to="/register">Sign Up</Link></Button>
            </div>

            <div className="button-container"> {}
                <h2>About</h2>
                <Button size="lg" variant="primary" type="Button"><Link to="/about">About</Link></Button>
            </div>

            <div className="button-container"> {}
                <h2>Contact Us</h2>
                <Button size="lg" variant="primary" type="Button"><Link to="/contactUs">Contact Us</Link></Button>
            </div> 
        </div>
    );
}

export default Home;
