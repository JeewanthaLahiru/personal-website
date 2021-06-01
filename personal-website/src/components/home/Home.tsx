import React from "react";
import {Col, Image, Row} from "react-bootstrap";
import Typescript from "../../assets/images/portfolio-image/typescript.png";

const Home:React.FC = () => {
    return(
        <React.Fragment>
            <Row className="m-0 px-xl-4 py-4" >
                <Col xs={12}>
                    <h1 className="text-light text-left" >Hello I'm Jeewantha</h1>
                    <h3 className="text-light text-left" >I'm a fullstack Web/ Game developer</h3>
                </Col>
            </Row>
            <Row className="personal-details mx-0 px-xl-4">
                <Col xl={4} className="detail-col p-4">
                    <Row className="image-row" >
                        <Col className="image-area" xs={12}>
                            <Image src={Typescript} />
                        </Col>
                    </Row>
                    <h2>Jeewantha Lahiru</h2>
                    <p>Galgoda, Mahawalathenna, Balangoda,</p>
                    <p>Sri lanka</p>
                    <p>Bsc (Hons) Software Engineering</p>
                    <p>University of Kelaniya</p>

                    <hr/>


                </Col>
                <Col xl={8}></Col>
            </Row>
        </React.Fragment>
    )
}

export default Home;