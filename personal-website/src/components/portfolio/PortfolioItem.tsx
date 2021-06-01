import React from 'react';
import {Col, Image, Row} from "react-bootstrap";
import UnityLogo from "../../assets/images/portfolio-image/unity-logo.png";
import UnrealLogo from "../../assets/images/portfolio-image/unreal.png";
import ReactLogo from "../../assets/images/portfolio-image/react.png";
import AngularLogo from "../../assets/images/portfolio-image/angular.png";
import GraphQlLogo from "../../assets/images/portfolio-image/graphql.png";
import TypescriptLogo from "../../assets/images/portfolio-image/typescript.png";
import SassLogo from "../../assets/images/portfolio-image/sass.png";
import CSharpLogo from "../../assets/images/portfolio-image/csharp.png";
import AndroidLogo from "../../assets/images/portfolio-image/android.png";
import BootstrapLogo from "../../assets/images/portfolio-image/bootstrap.svg";
import AwsLogo from "../../assets/images/portfolio-image/aws.png";
import JavascriptLogo from "../../assets/images/portfolio-image/javascript.png";
import MongodbLogo from "../../assets/images/portfolio-image/mongodb.jpg";
import SpringbootLogo from "../../assets/images/portfolio-image/springboot.png";
import NifiLogo from "../../assets/images/portfolio-image/nifi.png";
import PhpLogo from "../../assets/images/portfolio-image/php.svg";
import CssLogo from "../../assets/images/portfolio-image/css.png";
import HtmlLogo from "../../assets/images/portfolio-image/html.png";

import {ILogo, IPortfolio} from "../../types/portfolioTypes";

type portfolioItemProps = {
    portfolioItem: IPortfolio
}

const findImage = (imgName:string) => {
    switch (imgName){
        case 'unity':
            return UnityLogo;
        case 'html':
            return HtmlLogo;
        case 'php':
            return PhpLogo;
        case 'css':
            return CssLogo;
        case 'nifi':
            return NifiLogo;
        case 'springboot':
            return SpringbootLogo;
        case 'mongodb':
            return MongodbLogo;
        case 'javascript':
            return JavascriptLogo;
        case 'unreal':
            return UnrealLogo;
        case 'react':
            return ReactLogo;
        case 'angular':
            return AngularLogo;
        case 'graphql':
            return GraphQlLogo;
        case 'typescript':
            return TypescriptLogo;
        case 'sass':
            return SassLogo;
        case 'csharp':
            return CSharpLogo;
        case 'android':
            return AndroidLogo;
        case 'bootstrap':
            return BootstrapLogo;
        case 'aws':
            return AwsLogo;
        default:
            return UnityLogo;
    }
}

const openInNewTab = (url:string) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}
const onClickSourceHandler = (url:string) => {
    openInNewTab(url);
}


const PortfolioItem:React.FC<portfolioItemProps> = (props) => {

    const logo:ILogo = props.portfolioItem.logo;
    const title:string = props.portfolioItem.mainTitle;
    const time:string = props.portfolioItem.timeDuration;
    const description:string = props.portfolioItem.description;
    const githubLink:string = props.portfolioItem.githubLink;
    const demo:string = props.portfolioItem.demo;
    const technology:ILogo[] = props.portfolioItem.technology;

    return(
        <Col xs={12} sm={12} lg={6} xl={4} className="portfolio-item-border m-0 p-4">
            <Row className="m-0 portfolio-item p-3" >
                <Col xs={12} >
                    <Row className="title-row m-0 py-2">
                        <Col xs={3} className="title-logo">
                            <Image src={findImage(logo.name)} />
                        </Col>
                        <Col xs={9} className="title-name" >
                            <Row>
                                <Col xs={12} className="title-main" >{title}</Col>
                                <Col xs={12} className="title-time" >{time}</Col>
                            </Row>
                        </Col>
                    </Row>
                    <hr/>
                    <Row className="m-0 description align-items-center" >
                        <Col xs={12} > {description} </Col>

                    </Row>
                    <Row className="justify-content-center mt-3 social-link-row" >
                        <Col xs={3}
                             onClick={()=> onClickSourceHandler(githubLink)}
                             className="social-link"
                        >
                            <i className="feather icon-eye" ></i>
                            Source
                        </Col>
                        {   demo !== "" &&
                            <Col xs={3}
                                onClick={() => onClickSourceHandler(demo)}
                                 className="social-link"
                            >
                                <i className="feather icon-link"></i>
                                Demo
                            </Col>
                        }
                    </Row>
                    <hr/>
                    <Row className="m-0 technology-row justify-content-center " >
                        {
                            technology.map((tech:ILogo, index:number)=> {
                                return(
                                    <Col xs={2} className="tech-item">
                                        <Image src={findImage(tech.name)}/>
                                    </Col>
                                )
                            })
                        }

                    </Row>
                </Col>
            </Row>
        </Col>
    )
}

export default PortfolioItem;