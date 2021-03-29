import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Header from './components/Header';
import Menu from './components/Menu';
import Routes from './utils/routes';

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
        dispatch({ type: 'LOAD', data });
      })
      .catch((error) => {
        //console.log(error);
        const dados = { nome: 'mario' };
        dispatch({ type: 'LOAD', data: dados });
      });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header>
          <Menu logout="" />
        </Header>
        <Routes />
      </div>
    </BrowserRouter>
  );
};

export default App;
