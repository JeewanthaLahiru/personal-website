import React from 'react';
import {Col, Image, Row} from "react-bootstrap";
import UnityLogo from "../../assets/images/portfolio-image/unity-logo.png";
import {ILogo, IPortfolio} from "../../types/portfolioTypes";

type portfolioItemProps = {
    portfolioItem: IPortfolio
}

const findImage = (imgName:string) => {
    switch (imgName){
        case 'unity':
            return UnityLogo;
    }
}


const PortfolioItem:React.FC<portfolioItemProps> = (props) => {

    const logo:ILogo = props.portfolioItem.logo;
    const title:string = props.portfolioItem.mainTitle;
    const time:string = props.portfolioItem.timeDuration;
    const description:string = props.portfolioItem.description;
    const githubLink:string = props.portfolioItem.githubLink;
    const demo:string = props.portfolioItem.demo;
    const technotogy:ILogo[] = props.portfolioItem.technology;

    return(
        <Col xs={12} sm={12} lg={6} xl={4} className="portfolio-item-border m-0 p-4">
            <Row className="m-0 portfolio-item p-3" >
                <Col xs={12} >
                    <Row className="title-row m-0 py-2">
                        <Col xs={3} className="title-logo">
                            <Image src={findImage('unity')} />
                        </Col>
                        <Col xs={9} className="title-name" >
                            <Row>
                                <Col xs={12} className="title-main" >{title}</Col>
                                <Col xs={12} className="title-time" >{time}</Col>
                            </Row>
                        </Col>
                    </Row>
                    <hr/>
                    <Row className="m-0 description" >
                        <Col xs={12} > {description} </Col>

                    </Row>
                    <Row className="justify-content-center mt-3" >
                        <Col xs={3}> <i className="feather icon-eye" ></i> Source </Col>
                        <Col xs={3}> <i className="feather icon-link"></i> Demo </Col>
                    </Row>
                    <hr/>
                    <Row className="m-0 technology-row justify-content-center " >
                        <Col xs={2} className="tech-item">
                            <Image src={UnityLogo}/>
                        </Col>
                        <Col xs={2} className="tech-item">
                            <Image src={UnityLogo}/>
                        </Col>
                        <Col xs={2} className="tech-item">
                            <Image src={UnityLogo}/>
                        </Col>
                        <Col xs={2} className="tech-item">
                            <Image src={UnityLogo}/>
                        </Col>
                        <Col xs={2} className="tech-item">
                            <Image src={UnityLogo}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Col>
    )
}

export default PortfolioItem;