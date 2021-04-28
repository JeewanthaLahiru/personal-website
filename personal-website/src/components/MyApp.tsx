import React from 'react';
import {Container} from "react-bootstrap";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./home/Home";

const MyApp:React.FC = () => {
    return(
        <Router>
            <Container fluid={true} className="m-0 my-app" >
                <Route path="/home" component={Home}/>
            </Container>
        </Router>
    )
}

export default MyApp;