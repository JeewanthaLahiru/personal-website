import React from 'react';
import {Row} from "react-bootstrap";
import {Category, IPortfolio} from "../../types/portfolioTypes";
import PortfolioItem from "./PortfolioItem";

const temporaryPortfolio:IPortfolio[] = [
    {
        category:Category.GAMING,
        logo:{
            name:'unity'
        },
        mainTitle:'GAme',
        timeDuration:"2012",
        description:"description1",
        githubLink:"githubLink1",
        demo:"demo1",
        technology:[
            {
                name:'unity'
            },
            {
                name:'blender'
            }
        ]
    },
    {
        category:Category.GAMING,
        logo:{
            name:'unity'
        },
        mainTitle:'GAme',
        timeDuration:"2012",
        description:"description1",
        githubLink:"githubLink1",
        demo:"demo1",
        technology:[
            {
                name:'unity'
            },
            {
                name:'blender'
            }
        ]
    },
    {
        category:Category.GAMING,
        logo:{
            name:'unity'
        },
        mainTitle:'GAme',
        timeDuration:"2012",
        description:"description1",
        githubLink:"githubLink1",
        demo:"demo1",
        technology:[
            {
                name:'unity'
            },
            {
                name:'blender'
            }
        ]
    },
    {
        category:Category.GAMING,
        logo:{
            name:'unity'
        },
        mainTitle:'GAme',
        timeDuration:"2012",
        description:"description1",
        githubLink:"githubLink1",
        demo:"demo1",
        technology:[
            {
                name:'unity'
            },
            {
                name:'blender'
            }
        ]
    },
    {
        category:Category.GAMING,
        logo:{
            name:'unity'
        },
        mainTitle:'GAme',
        timeDuration:"2012",
        description:"description1",
        githubLink:"githubLink1",
        demo:"demo1",
        technology:[
            {
                name:'unity'
            },
            {
                name:'blender'
            }
        ]
    }
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