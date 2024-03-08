import React, { useState, useEffect } from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import axios from 'axios';
import LoginForm from './Login';
import StockDashboard from '../User/StockDashboard';

function View({ screen, setScreen, isLoggedIn }) {
  const [data, setData] = useState();
  const [articleOperation, setArticleOperation] = useState('no-op');

  // Called when user clicks on Logout button
  // to clear the cookie and set the screen state variable 
  // back to its initial state.
  const deleteCookie = async () => {
    try {
      await axios.get('/api/signout');
      setScreen('auth');
    } catch (e) {
      console.log(e);
    }
  };

  // Called when user clicks on Verify Cookie button
  // end-point demonstrates another example for the use
  // of cookie specific response from the server.
  const verifyCookie = async () => {
    try {
      const res = await axios.get('/api/welcome');
      console.log(res.data)
      setData(res.data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      {!isLoggedIn && screen === 'auth' && <LoginForm setScreen={setScreen} />}
      {isLoggedIn && screen === 'stockDashboardHome' && <StockDashboard />}
      {/* <Button onClick={verifyCookie}>Verify Cookie</Button>{" "} */}
      <Button onClick={deleteCookie}>Log out</Button>
    </div>
  );
}

export default View;
