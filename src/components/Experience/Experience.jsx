import React from "react";
import { Card, Col, Nav, Row, Tab } from "react-bootstrap";
import "./Experience.css";

const Experience = () => {
    return (
        <div className="main" id="my-experience">
            <h1 className="title">My Education and Work Experience</h1>
            <div className="my-4">
                <Tab.Container id="left-tabs-example" defaultActiveKey="ssc">
                    <Row>
                        <Col sm={4} className="mb-2">
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="ssc">
                                        Secondary Education
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="hsc">
                                        Higher Secondary Education
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="be">B. E.</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="work">
                                        Job Experience
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={8}>
                            <Tab.Content>
                                <Tab.Pane eventKey="ssc">
                                    <Card>
                                        <div className="info-display">
                                            <Card.Text>
                                                I have completed my Senior
                                                Secondary Education from
                                                Navjeevan Day School, Sinnar,
                                                Dist. Nashik. It comes under
                                                Maharashtra State Board,
                                                Savitribai Phule Pune
                                                University. At this time the
                                                only thing I used computer for
                                                was casual gaming, but
                                                customizing windows in wierd
                                                ways possible and trying to
                                                tinker with its settings taught
                                                me much about coputers, however
                                                my professional skills were
                                                limited to just efficiently
                                                using microsoft office.
                                            </Card.Text>
                                        </div>
                                    </Card>
                                </Tab.Pane>
                                <Tab.Pane eventKey="hsc">
                                    <Card>
                                        <div className="info-display">
                                            <Card.Text>
                                                I have completed my Higher
                                                Secondary Education from R.Y.K.
                                                Science College, College Road
                                                Nashik which again falls under
                                                the Maharashtra State Board,
                                                Savatribai Phule Pune
                                                University. This was the time I
                                                was introduced to basic html and
                                                css, I was good at it however
                                                javascript was still
                                                intemidating for me, but the
                                                seed of developer was sown here.
                                            </Card.Text>
                                        </div>
                                    </Card>
                                </Tab.Pane>
                                <Tab.Pane eventKey="be">
                                    <Card>
                                        <div className="info-display">
                                            <Card.Text>
                                                I have completed my Bachelors In
                                                Computer Science from Smt.
                                                kashibai Navle, College of
                                                Engineering, Ambegaon BK. Pune,
                                                which again falls under
                                                Savtribai Phule Pune University.
                                                This was the time when most of
                                                my technical skills were
                                                polished.This was when I was
                                                introduced to linux and I dived
                                                deep into the world of linux. A
                                                few of my projects from college
                                                include :
                                                <ul>
                                                    <li>
                                                        Ticket Booking System
                                                        (mongodb and python)
                                                    </li>
                                                    <li>
                                                        A simple mario like
                                                        game. (python)
                                                    </li>
                                                    <li>
                                                        Vulnerability Accessment
                                                        and Penetration Testing.
                                                        (Information Security
                                                        and various tools.)
                                                    </li>
                                                </ul>
                                            </Card.Text>
                                        </div>
                                    </Card>
                                </Tab.Pane>
                                <Tab.Pane eventKey="work">
                                    <Card>
                                        <div className="info-display">
                                            <Card.Text>
                                                I have worked as a professional
                                                software developer at Bitsmith
                                                Technologies Private Limited
                                                which is leading Ed. Tech.
                                                Company. Due to company policies
                                                I cannot reveal the projects I
                                                worked on but my job role and
                                                work included:
                                                <ul>
                                                    <li>
                                                        Buliding and optimizing
                                                        complex API with node js
                                                        and mongodb.
                                                    </li>
                                                    <li>
                                                        Working with react for
                                                        creating simple yet
                                                        powerful frontend
                                                        interface.
                                                    </li>
                                                    <li>
                                                        Working with wordpress
                                                        for creating websites.
                                                    </li>
                                                    <li>
                                                        Managing and working
                                                        with security of
                                                        websites.
                                                    </li>
                                                </ul>
                                            </Card.Text>
                                        </div>
                                    </Card>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </div>
    );
};

export default Experience;
