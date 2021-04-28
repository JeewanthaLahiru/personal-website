import React from 'react';
import './App.css';
import SideNav from "./components/side_nav_bar/SideNav";
import './styles/_main.scss';
import MyApp from "./components/MyApp";
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
            <SideNav/>
            <MyApp/>
        </Router>
    </div>
  );
}

export default App;
