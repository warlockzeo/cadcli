import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Routes from './utils/routes';

import Header from './components/Header';
import Menu from './components/Menu';

const App = () => {
  const dispatch = useDispatch();

  useEffect(async () => {
    await fetch('http://protocolo.v2.api/users', {
      method: 'GET',
      mode: 'cors',
      headers: {}
    })
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        dispatch({ type: 'LOADPACIENTES', data });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header
          logo="/assets/images/logo-pmtn.jpg"
          logoAlt="Logomarca"
          business="CLIMEG"
        >
          <Menu />
        </Header>
        <Routes />
      </div>
    </BrowserRouter>
  );
};

export default App;
