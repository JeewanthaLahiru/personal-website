import React from 'react';
import './App.css';
import SideNav from "./components/side_nav_bar/SideNav";
import './styles/_main.scss';
import MyApp from "./components/MyApp";

function App() {
  return (
    <div className="App">
        <SideNav/>
        <MyApp/>
    </div>
  );
}

export default App;
