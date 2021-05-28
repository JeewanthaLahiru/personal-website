import React from "react";
import {Row} from "react-bootstrap";
import PortfolioItem from "../portfolio/PortfolioItem";

const Home:React.FC = () => {
    return(
        <div className="home p-4">
            <Row className="m-0">
                <PortfolioItem/>
                <PortfolioItem/>
                <PortfolioItem/>
                <PortfolioItem/>
                <PortfolioItem/>
                <PortfolioItem/>
                <PortfolioItem/>
                <PortfolioItem/>
            </Row>
        </div>
    )
}

export default Home;