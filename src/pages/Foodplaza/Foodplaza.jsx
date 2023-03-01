import React from "react";
import "./Foodplaza.css";
import home from "../../assets/foodplaza/home.webp";
import menu from "../../assets/foodplaza/menu.webp";
import adminOrders from "../../assets/foodplaza/admin_orders.webp";
import cart from "../../assets/foodplaza/cart.webp";
import myOrders from "../../assets/foodplaza/myOrders.webp";

import { Alert, Button, Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Foodplaza = () => {
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
                    <img className="ss-img" src={home} alt="home" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="ss-img" src={menu} alt="home" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="ss-img" src={cart} alt="home" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="ss-img" src={myOrders} alt="home" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="ss-img" src={adminOrders} alt="home" />
                </Carousel.Item>
            </Carousel>
            <div>
                <a href="http://foodplaza.onrender.com" target={"_blank"}>
                    <Button className="mr-2 my-2">View Site</Button>
                </a>
                <a
                    href="https://github.com/iamcodedoctor/uphar_gruh_react"
                    target={"_blank"}
                >
                    <Button variant="success" className="mx-2 my-2">
                        View Frontend Source Code
                    </Button>
                </a>
                <a
                    href="https://github.com/iamcodedoctor/uphar_gruh_express"
                    target="_blank"
                >
                    <Button variant="success" className="ml-2 my-2">
                        View Backend Source Code
                    </Button>
                </a>
            </div>
            <Alert>
                Please do note that the frontend of the live site might be a
                little depricated, because of the free hosting I am using to
                host this site, but the source code of the site is 100% working
                and you can easily fork it from github and deploy on local
                computer or any cloud based platfrom you desire.
            </Alert>
            <h1 className="title mt-2">Foodplaza</h1>
            <p>
                Foodplaza is a full-stack web application build based on the
                MERN stack. Its food ordering and delivery app that lets the
                user to order food items online. The app has a role based
                authentication for user and admin, the user can only create an
                order and track it while the admin can process the orders placed
                by users and manage the menu items on the application.
            </p>
            <h3>Frontend</h3>
            <h6>Technologies used:</h6>
            <ul>
                <li>React js</li>
                <li>Passport js for authentication.</li>
                <li>React Bootstrap as css framework.</li>
                <li>Redux for global State management.</li>
                <li>React Router for routing.</li>
                <li>Stripe as online payment gateway.</li>
            </ul>
            <h3>Backend</h3>
            <h6>Technologies used:</h6>
            <ul>
                <li>Node js.</li>
                <li>Express js.</li>
                <li>Passport js for user authentication.</li>
                <li>Stripe as online payment gateway.</li>
                <li>Mongodb as database.</li>
                <li>
                    MVCS architecture for better programming and security of
                    application
                </li>
            </ul>
        </div>
    );
};

export default Foodplaza;
