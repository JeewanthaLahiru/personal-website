import React, {useState} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import {Category, IPortfolio} from "../../types/portfolioTypes";
import PortfolioItem from "./PortfolioItem";

const temporaryPortfolio:IPortfolio[] = [
    {
        category:Category.WEB,
        logo:{
            name:'react'
        },
        mainTitle:'Personal Website',
        timeDuration:"May, 2021 – June, 2021",
        description:"This website have the portfolio of Jeewantha Lahiru",
        githubLink:"https://github.com/JeewanthaLahiru/personal-website",
        demo:"",
        technology:[
            {
                name:'react'
            },
            {
                name:'typescript'
            },
            {
                name:'sass'
            }
        ]
    },
    {
        category:Category.GAMING,
        logo:{
            name:'unity'
        },
        mainTitle:'Endless Runner',
        timeDuration:"May, 2021 – June, 2021",
        description:"Endless running mobile game made with unity game engine",
        githubLink:"https://github.com/JeewanthaLahiru/EndlessRunner/pulse",
        demo:"",
        technology:[
            {
                name:'unity'
            },
            {
                name:'csharp'
            },
            {
                name:'android'
            }
        ]
    },
    {
        category:Category.WEB,
        logo:{
            name:'react'
        },
        mainTitle:'Online grocery app',
        timeDuration:"May, 2021 – June, 2021",
        description:"This is an online shoping cart application",
        githubLink:"https://github.com/JeewanthaLahiru/online-grocery-app-with-react",
        demo:"https://jeewantha.codes/",
        technology:[
            {
                name:'react'
            },
            {
                name:'sass'
            },
            {
                name:'bootstrap'
            },
            {
                name:'aws'
            },
            {
                name:'typescript'
            }
        ]
    },
    {
        category:Category.WEB,
        logo:{
            name:'react'
        },
        mainTitle:'Library management application',
        timeDuration:"May, 2021 – June, 2021",
        description:"this is an library management web application",
        githubLink:"https://github.com/JeewanthaLahiru/library-app-individual",
        demo:"",
        technology:[
            {
                name:'react'
            },
            {
                name:'typescript'
            },
            {
                name:'sass'
            },
            {
                name:'bootstrap'
            }
        ]
    },
    {
        category:Category.GAMING,
        logo:{
            name:'javascript'
        },
        mainTitle:'Tic tac toe game',
        timeDuration:"May, 2021 – June, 2021",
        description:"this is a javascript game",
        githubLink:"https://github.com/JeewanthaLahiru/Tic-Tac-Toe-game",
        demo:"",
        technology:[
            {
                name:'javascript'
            }
        ]
    },
    {
        category:Category.WEB,
        logo:{
            name:'angular'
        },
        mainTitle:'Weather data monitoring app',
        timeDuration:"Dec, 2020 – Jan, 2021",
        description:"this web application reads weather data from sensors and record in the database. We can show weather data reading from frontend",
        githubLink:"https://github.com/JeewanthaLahiru/cloud-based-sensor-monitoring-and-alert-management-platform",
        demo:"",
        technology:[
            {
                name:'angular'
            },
            {
                name:'typescript'
            },
            {
                name:'bootstrap'
            },
            {
                name:'springboot'
            },
            {
                name:'mongodb'
            },
            {
                name:'nifi'
            }
        ]
    },
    {
        category:Category.GAMING,
        logo:{
            name:'unity'
        },
        mainTitle:'SuperMario clone',
        timeDuration:"Nov, 2020 – Dec, 2020",
        description:"This is a 2d game cloned by watching super mario game",
        githubLink:"https://github.com/JeewanthaLahiru/Super-Mario-Clone",
        demo:"",
        technology:[
            {
                name:'unity'
            },
            {
                name:'csharp'
            }
        ]
    },
    {
        category:Category.WEB,
        logo:{
            name:'php'
        },
        mainTitle:'Car sale online',
        timeDuration:"June, 2020 – Oct, 2020",
        description:"this is a car sale web application. Users can view and buy a vehicle. Dealers can post vehicles",
        githubLink:"https://github.com/JeewanthaLahiru/ShoppingCart",
        demo:"",
        technology:[
            {
                name:'php'
            },
            {
                name:'html'
            },
            {
                name:'css'
            },
            {
                name:'javascript'
            }
        ]
    },
]

const Portfolio:React.FC = () => {

    const [category, setCategory] = useState('all');

    const onClickAllHandler = () => {
        setCategory("all");
    }
    const onClickGameHandler = () => {
        setCategory("game");
    }
    const onClickWebHandler = () => {
        setCategory("web");
    }

    return(
        <React.Fragment>
            <Row className="m-0 pt-5 px-xl-3">
                <Col xs={12} >
                    <Row className="mx-0 mt-5 pl-2 ">
                        <Button onClick={onClickAllHandler}
                                className="mr-3 px-4"
                                variant={category==='all'? 'success' : 'primary'}
                        >
                            All
                        </Button>
                        <Button onClick={onClickWebHandler}
                                className="mr-3 px-3 "
                                variant={category==='web'? 'success' : 'primary'}
                        >
                            Web
                        </Button>
                        <Button onClick={onClickGameHandler}
                                className="mr-3"
                                variant={category==='game'? 'success' : 'primary'}
                        >
                            Games
                        </Button>
                    </Row>

                </Col>
                {
                    temporaryPortfolio.map((port:IPortfolio, index:number) => {
                        switch (category) {
                            case 'all':
                                return(
                                    <PortfolioItem portfolioItem={port}/>
                                )
                            case 'web':
                                if(port.category === "WEB"){
                                    return(
                                        <PortfolioItem portfolioItem={port}/>
                                    )
                                }
                                break;
                            case 'game':
                                if(port.category === "GAMING"){
                                    return(
                                        <PortfolioItem portfolioItem={port}/>
                                    )
                                }
                                break;

                        }

                    })
                }
            </Row>
        </React.Fragment>
    )
}

export default Portfolio;