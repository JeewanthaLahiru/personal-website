import React from "react";

const Home:React.FC = () => {
    return(
        <div className="home">
            <div className="content-area" >
                <div className="wrapper" >
                    <div id="home" className="banner">
                        <div className="text-content" >
                            <h2>Homepage</h2>
                        </div>
                    </div>
                    <div id="about" className="about-area">
                        <div className="text-content" >
                            <h2>About</h2>
                        </div>
                    </div>
                    <div id="services" className="services-area">
                        <div className="text-content" >
                            <h2>Services</h2>
                        </div>
                    </div>
                    <div id="portfolio" className="portfolio-area">
                        <div className="text-content" >
                            <h2>Portfolio</h2>
                        </div>
                    </div>
                    <div id="contact" className="contact-area">
                        <div className="text-content" >
                            <h2>Contact</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;