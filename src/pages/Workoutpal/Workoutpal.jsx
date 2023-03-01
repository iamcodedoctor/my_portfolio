import React from "react";
import { Alert, Button, Carousel } from "react-bootstrap";
import "./Workoutpal.css";
import banner from "../../assets/workoutpal/banner.webp";
import exerciseDetails from "../../assets/workoutpal/exercise_details.webp";
import relatedVideos from "../../assets/workoutpal/related_videos.webp";
import searchOne from "../../assets/workoutpal/search_one.webp";
import similarExercises from "../../assets/workoutpal/similar_exercises.webp";
import search from "../../assets/workoutpal/search.webp";
import { useNavigate } from "react-router-dom";

const Workoutpal = () => {
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
                    <img className="ss-img" src={banner} alt="home" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="ss-img" src={search} alt="home" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="ss-img" src={searchOne} alt="home" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="ss-img" src={exerciseDetails} alt="home" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="ss-img" src={relatedVideos} alt="home" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="ss-img" src={similarExercises} alt="home" />
                </Carousel.Item>
            </Carousel>
            <div>
                <a href="https://workoutpal.onrender.com" target={"_blank"}>
                    <Button className="mr-2 my-2">View Site</Button>
                </a>
                <a
                    href="https://github.com/iamcodedoctor/workoutPal_react"
                    target={"_blank"}
                >
                    <Button variant="success" className="mx-2 my-2">
                        View Frontend Source Code
                    </Button>
                </a>
                <a
                    href="https://github.com/iamcodedoctor/workoutPal_express"
                    target={"_blank"}
                >
                    <Button variant="success" className="ml-2 my-2">
                        View Backend Source Code
                    </Button>
                </a>
            </div>
            <h1 className="title mt-2">Workoutpal </h1>
            <p>
                Workoutpal is a full-stack web application build based on the
                MERN stack. Its a fitness application that contains over one
                thousand unique exercises thatgeting all parts of your body, no
                matter if you are a complete beginner in the world of fitness or
                a complete pro, you will always find exercses in the app that
                will help you up your game. You can simply filter exercises on
                bases of the equipment you have and the the body part you want
                to target making the selection of exercise very simple and
                intuitive. You will get dynamic moving gif that will show you
                how to perfor the exercise and if you find this information
                inadequate you will be provided with detailed youtube videos for
                the selected exercise, and we also provide similar exercises for
                you to adjust according to your difficulty. In all its a great
                appliation you must try.
            </p>
            <h3>Frontend</h3>
            <h6>Technologies used:</h6>
            <ul>
                <li>React js</li>
                <li>Material Ui as css framework.</li>
                <li>React Router for routing.</li>
            </ul>
            <h3>Backend</h3>
            <h6>Technologies used:</h6>
            <ul>
                <li>Node js.</li>
                <li>Express js.</li>
                <li>Rapid api integration</li>
                <li>Mongodb as database.</li>
                <li>
                    MVCS architecture for better programming and security of
                    application
                </li>
            </ul>
        </div>
    );
};

export default Workoutpal;
