import React from 'react';
import './App.css';
import SideNav from "./components/side_nav_bar/SideNav";
import './styles/_main.scss';
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
        <SideNav/>
        <Home/>
    </div>
  );
}

export default App;
