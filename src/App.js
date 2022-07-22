import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
// import Kloud9Rating from './Kloud9Rating'
import { getTokenFromUrl } from './spotify';

function App() {

  const [token, setToken] = useState(null);
  // const [rating, setRating] = useState(null)

  // Run code based on given condition also if state change or compoent mount
  useEffect(() => {
    //code ...
    const hash = getTokenFromUrl();
    window.location.hash = ""; // dont show token in Url
    const _token = hash.access_token;
    if(_token) {
      setToken(_token)
    }
  }, []);

  return (
    <div className="app">
      {
        token ? (
          <h1>I am logged in</h1>
        ) : (
          <Login />
        )
      }
      {/* <p className="text">Please rate : </p>
     <Kloud9Rating starNumber = {5} size= {20} rating={rating} onRating={(rate) => setRating(rate)} /> */}
      
    </div>
  );
}

export default App;
