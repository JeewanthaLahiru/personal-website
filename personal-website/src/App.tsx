import React from 'react';
import './App.css';
import SideNav from "./components/side_nav_bar/SideNav";
import {Row} from "react-bootstrap";
import './styles/_main.scss';

function App() {
  return (
    <div className="App">
      <Row>
          <SideNav/>
      </Row>
    </div>
  );
}

export default App;
