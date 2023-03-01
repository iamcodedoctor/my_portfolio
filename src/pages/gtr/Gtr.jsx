import React from "react";
import gtr from "../../assets/gtr/gtr.webp";
import { Alert, Button, Carousel } from "react-bootstrap";
import "./Gtr.css";
import { useNavigate } from "react-router-dom";

const Gtr = () => {
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
                    <img className="ss-img" src={gtr} alt="home" />
                </Carousel.Item>
            </Carousel>
            <div>
                <a href="#" target={"_blank"}>
                    <Button className="mr-2 my-2">View Site</Button>
                </a>
                <a
                    href="https://github.com/iamcodedoctor/gtr_design"
                    target="_blank"
                >
                    <Button variant="success" className="mx-2 my-2">
                        View Source Code
                    </Button>
                </a>
            </div>
            <h1 className="title mt-2">Workoutpal </h1>
            <p>
                Gtr is a web application build based on the React js. Its a
                simple web application that is built using react js and for
                styling I have jsut used the original css instead of any
                framework, which just shows my understanding in basic and core
                web technologies. Its just a single page web application that
                shows css skills.
            </p>

            <h6>Technologies used:</h6>
            <ul>
                <li>React js</li>
                <li>Core css</li>
            </ul>
        </div>
    );
};

export default Gtr;
