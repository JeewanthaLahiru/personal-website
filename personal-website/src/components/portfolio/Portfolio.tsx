import React from 'react';
import {Row} from "react-bootstrap";
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
        demo:"demo1",
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
            name:'javacript'
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
    return(
        <React.Fragment>
            <Row className="m-0">
                {
                    temporaryPortfolio.map((port:IPortfolio) => {
                        return(
                            <PortfolioItem portfolioItem={port}/>
                        )
                    })
                }
            </Row>
        </React.Fragment>
    )
}

export default Portfolio;