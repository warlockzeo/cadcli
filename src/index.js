import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import ReducerPacientes from "./storage/ReducerPacientes";
// import ReducerProfissionais from "./storage/ReducerProfissionais";
// import ReducerMarcacoes from "./storage/ReducerMarcacoes";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const pacientes = createStore(ReducerPacientes);
// const profissionais = createStore(ReducerProfissionais);
// const marcacoes = createStore(ReducerMarcacoes);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={pacientes}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
