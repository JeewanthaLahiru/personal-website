import React from 'react';
import {Container} from "react-bootstrap";
import {Switch, Route} from 'react-router-dom';
import Home from "./home/Home";
import Education from "./education/Education";
import Stats from "./stats/Stats";
import Contact from "./contact/Contact";
import Profile from "./profile/Profile";
import Skills from "./skills/Skills";

const MyApp:React.FC = () => {
    return(
        <Container fluid={true} className="m-0 my-app" >
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/stats" exact component={Stats}/>
                <Route path="/education" exact component={Education}/>
                <Route path="/skills" exact component={Skills}/>
                <Route path="/profile" exact component={Profile}/>
                <Route path="/contact" exact component={Contact}/>
            </Switch>
        </Container>
    )
}

export default MyApp;