import React from 'react';
import {Container} from "react-bootstrap";
import {Switch, Route} from 'react-router-dom';
import Home from "./home/Home";
import Education from "./education/Education";
import Stats from "./stats/Stats";

const MyApp:React.FC = () => {
    return(
        <Container fluid={true} className="m-0 my-app" >
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/stats" exact component={Stats}/>
                <Route path="/education" exact component={Education}/>
            </Switch>
        </Container>
    )
}

export default MyApp;