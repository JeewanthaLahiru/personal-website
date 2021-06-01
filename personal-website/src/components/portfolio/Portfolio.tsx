import React from 'react';
import { Row} from "react-bootstrap";
import PortfolioItem from "./PortfolioItem";

const Portfolio:React.FC = () => {
    return(
        <React.Fragment>
            <Row className="m-0">
                <PortfolioItem/>
            </Row>
        </React.Fragment>
    )
}

export default Portfolio;