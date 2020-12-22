/* eslint-disable react-hooks/exhaustive-deps */
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

import Header from "./components/Header";
import Menu from "./components/Menu";
import Routes from "./utils/routes";

const App = () => {
  const dispatch = useDispatch();

  useEffect(async () => {
    const pacientes = await fetch("http://protocolo.v2.api/users", {
      method: "GET",
      mode: "cors",
      headers: {},
    }).then((response) => response.json());

    dispatch({ type: "ListPacientes", data: pacientes });

    const profissionais = await fetch("http://protocolo.v2.api/users", {
      method: "GET",
      mode: "cors",
      headers: {},
    }).then((response) => response.json());

    // const profissionais2 = [{ nome: "mario", profissao: "programador" }];

    dispatch({ type: "ListProfissionais", data: profissionais });

    const marcacoes = await fetch("http://protocolo.v2.api/users", {
      method: "GET",
      mode: "cors",
      headers: {},
    }).then((response) => response.json());

    // const marcacoes2 = [
    //   { paciente: "mario", profissional: "joão", data: "2020-12-28" },
    // ];

    dispatch({ type: "ListMarcacoes", data: marcacoes });
  }, []);

  return (
    <BrowserRouter>
      <div className='App'>
        <Header>
          <Menu logout='' />
        </Header>
        <Routes />
      </div>
    </BrowserRouter>
  );
};

export default App;
