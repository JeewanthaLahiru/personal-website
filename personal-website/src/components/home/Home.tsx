import React from "react";
import {Col, Form, Image, Row} from "react-bootstrap";
import MyPhoto from "../../assets/images/profile/profile3.jpg";
import Typescript from "../../assets/images/portfolio-image/typescript.png";
import SocialIcon from "./SocialIcon";
import Typewriter from "typewriter-effect";

const Home:React.FC = () => {
    return(
        <React.Fragment>
            <Row className="m-0 px-xl-4 pt-4 pb-2 name-row" >
                <Col xs={12}>
                    <h1 className="text-light text-left" >
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString('Hello World!')
                                    .callFunction(() => {
                                        console.log('String typed out!');
                                    })
                                    .pauseFor(2500)
                                    .deleteAll()
                                    .callFunction(() => {
                                        console.log('All strings were deleted');
                                    })
                                    .start();
                            }}
                            options={{
                                strings: ['Hello I\'m Jeewantha Lahiru',
                                    'I\'m a full stack Web developer...',
                                    'I\'m also a Game developer...'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>


                </Col>
            </Row>
            <Row className="personal-details mx-0 px-xl-4">
                <Col xl={4} xs={12}>
                    <Row className="m-0">
                        <Col xl={12} className="detail-col p-4">
                            <Row className="image-row" >
                                <Col className="image-area" xs={12}>
                                    <Image src={MyPhoto} />
                                </Col>
                            </Row>
                            <h2>Jeewantha Lahiru</h2>
                            <p>Galgoda, Mahawalathenna, Balangoda,</p>
                            <p>Sri lanka</p>
                            <p>Bsc (Hons) Software Engineering</p>
                            <p>University of Kelaniya</p>

                            <hr/>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit</p>


                        </Col>
                    </Row>
                </Col>

                <Col xs={12} xl={8} className="mt-sm-4 mt-xl-0">
                    <Row className="m-0">
                        <Col className="detail-col pt-3" xs={12}>
                          <h4 className="text-left">About me</h4>
                            <hr/>
                            <h5 className="text-left" >Contact Details</h5>
                            <Row className="mx-0 mt-1 mb-5">

                                <Col xs={6} className="pt-4">
                                    <Form.Label className="align-left" >Mobile</Form.Label>
                                    <Form.Control type="text"
                                                  value="0710343246"
                                                  disabled={true}
                                    />
                                </Col>
                                <Col xs={6} className="pt-4">
                                    <Form.Label className="align-left" >Email Address</Form.Label>
                                    <Form.Control type="text"
                                                  value="jeewanthalahiru1111@gmail.com"
                                                  disabled={true}
                                    />
                                </Col>

                                <Col xs={6} className="pt-4">
                                    <Form.Label className="align-left" >Date of Birth</Form.Label>
                                    <Form.Control type="text"
                                                  value="Jan 02 1998 (23)"
                                                  disabled={true}
                                    />
                                </Col>
                                <Col xs={6} className="pt-4">
                                    <Form.Label className="align-left" >Career goal</Form.Label>
                                    <Form.Control type="text"
                                                  value="Game Developer"
                                                  disabled={true}
                                    />
                                </Col>
                            </Row>
                            <hr/>
                            <h5 className="text-left mt-4 mb-3">Developer Details</h5>
                            <Row className="mx-0 mb-5">
                                <Col xs={6} className="pt-4">
                                    <Form.Label className="align-left" >Favourite Languages</Form.Label>
                                    <Form.Control type="text"
                                                  value="Typescript, C#"
                                                  disabled={true}
                                    />
                                </Col>
                                <Col xs={6} className="pt-4">
                                    <Form.Label className="align-left" >Favourite front-end framework</Form.Label>
                                    <Form.Control type="text"
                                                  value="ReactJs"
                                                  disabled={true}
                                    />
                                </Col>
                                <Col xs={6} className="pt-4">
                                    <Form.Label className="align-left" >Favourite back-end framework</Form.Label>
                                    <Form.Control type="text"
                                                  value="Express-js"
                                                  disabled={true}
                                    />
                                </Col>
                                <Col xs={6} className="pt-4">
                                    <Form.Label className="align-left" >Favourite Game engine</Form.Label>
                                    <Form.Control type="text"
                                                  value="Unity"
                                                  disabled={true}
                                    />
                                </Col>

                            </Row>
                            <hr/>
                            <h5 className="text-left mt-4 mb-3">Find me on</h5>
                            <Row className="mx-0 mb-5 socialMediaRow" >
                                <SocialIcon imageLink={Typescript}
                                            socialLink={"https://www.linkedin.com/in/jeewantha-lahiru-b85b2917b/"}
                                />

                                <SocialIcon imageLink={Typescript}
                                            socialLink={"https://www.linkedin.com/in/jeewantha-lahiru-b85b2917b/"}
                                />
                                <SocialIcon imageLink={Typescript}
                                            socialLink={"https://www.linkedin.com/in/jeewantha-lahiru-b85b2917b/"}
                                />
                                <SocialIcon imageLink={Typescript}
                                            socialLink={"https://www.linkedin.com/in/jeewantha-lahiru-b85b2917b/"}
                                />
                                <SocialIcon imageLink={Typescript}
                                            socialLink={"https://www.linkedin.com/in/jeewantha-lahiru-b85b2917b/"}
                                />
                                <SocialIcon imageLink={Typescript}
                                            socialLink={"https://www.linkedin.com/in/jeewantha-lahiru-b85b2917b/"}
                                />
                                <SocialIcon imageLink={Typescript}
                                            socialLink={"https://www.linkedin.com/in/jeewantha-lahiru-b85b2917b/"}
                                />
                                <SocialIcon imageLink={Typescript}
                                            socialLink={"https://www.linkedin.com/in/jeewantha-lahiru-b85b2917b/"}
                                />
                                <SocialIcon imageLink={Typescript}
                                            socialLink={"https://www.linkedin.com/in/jeewantha-lahiru-b85b2917b/"}
                                />
                                <SocialIcon imageLink={Typescript}
                                            socialLink={"https://www.linkedin.com/in/jeewantha-lahiru-b85b2917b/"}
                                />
                                <SocialIcon imageLink={Typescript}
                                            socialLink={"https://www.linkedin.com/in/jeewantha-lahiru-b85b2917b/"}
                                />
                                <SocialIcon imageLink={Typescript}
                                            socialLink={"https://www.linkedin.com/in/jeewantha-lahiru-b85b2917b/"}
                                />
                                <SocialIcon imageLink={Typescript}
                                            socialLink={"https://www.linkedin.com/in/jeewantha-lahiru-b85b2917b/"}
                                />
                                
                            </Row>

                        </Col>
                    </Row>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Home;