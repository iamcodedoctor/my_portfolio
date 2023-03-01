import React from "react";
import portfolio from "../../assets/portfolio/portfolio.webp";
import { Alert, Button, Carousel } from "react-bootstrap";
import "./Portfolio.css";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
    const navigate = useNavigate();
    return (
        <div className="main">
            <Button
                onClick={() => navigate("/")}
                variant="secondary"
                className="mb-2"
            >
                Back to Home
            </Button>
            <Carousel>
                <Carousel.Item>
                    <img className="ss-img" src={portfolio} alt="home" />
                </Carousel.Item>
            </Carousel>
            <div>
                <a href="https://niraj-khare.onrender.com" target="_blank">
                    <Button className="mr-2 my-2">View Site</Button>
                </a>
                <a
                    href="https://github.com/iamcodedoctor/my_portfolio"
                    target="_blank"
                >
                    <Button variant="success" className="mx-2 my-2">
                        View Source Code
                    </Button>
                </a>
            </div>
            <h1 className="title mt-2">Portolio</h1>
            <p>
                My portfolio is a aimple web-application that is built using
                React js. Its a interactive web application that simple replaces
                your tradition resume at the same time allowing the employeer to
                see your web development skills. You can simple showcase the
                projects you have created and inteactive and creatively
                represent your personal information. The source code is totally
                open source feel free to fork.
            </p>

            <h6>Technologies used:</h6>
            <ul>
                <li>React js</li>
                <li>Recat Bootstrap as css framework</li>
                <li>Recat Router for routing.</li>
            </ul>
        </div>
    );
};

export default Portfolio;
