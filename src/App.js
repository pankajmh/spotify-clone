import React, { useState, useEffect } from 'react';
import './App.css';
import { getTokenFromUrl } from './spotify';
import Login from './Login';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

//creating instance of spotify
const spotify = new SpotifyWebApi();

function App() {
  //  const [token, setToken] = useState(null);
  const [{ token }, dispatch] = useDataLayerValue();

  // const [dataLayer, dispatch] = useDataLayerValue();
  // we can use user as -> dataLayer.user

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = ''; //dont show token in url
    const _token = hash.access_token;
    if (_token) {
      //  setToken(_token);
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        // console.log('🧔', user);
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        });
      });
      spotify.getPlaylist('1eDNTC8SNPNQ4JoWnaeVcz').then((res) =>
        dispatch({
          type: 'SET_HIP_HOP',
          HIP_HOP: res,
        })
      );
    }
  }, []);

  // console.log('🧔next', user);
  //  console.log('👽', token);

  return (
    <div className='app'>
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
