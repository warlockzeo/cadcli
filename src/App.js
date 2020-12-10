import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Menu from "./components/Menu";
import Routes from "./utils/routes";

function App() {
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
}

export default App;
