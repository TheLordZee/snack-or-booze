import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar";
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
