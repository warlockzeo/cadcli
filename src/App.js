import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Menu from "./components/Menu";
import Routes from "./utils/routes";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header>
          <Menu logout='' />
        </Header>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
