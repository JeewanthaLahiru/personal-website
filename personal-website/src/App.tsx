import React from 'react';
import './App.css';
import SideNav from "./components/side_nav_bar/SideNav";
import {Row} from "react-bootstrap";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <Row>
          <SideNav/>
          <Home/>
      </Row>
    </div>
  );
}

export default App;
