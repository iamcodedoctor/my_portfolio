import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import foodPlaza from "../../assets/foodplaza_banner.avif";
import gtr from "../../assets/gtr_banner.avif";
import myPortfolio from "../../assets/myPortfolio_banner.avif";
import workoutPal from "../../assets/workoutpal_banner.avif";

const Projects = () => {
    const navigate = useNavigate();
    return (
        <div className="main" id="my-projects">
            <h1 className="title">My Projects</h1>
            <Row className="my-4 cards-div">
                <Col xs={12} lg={3}>
                    <Card onClick={()=> navigate('/project/workoutpal')} className="my-2" style={{ width: "100%", cursor:"pointer"  }}>
                        <Card.Img variant="top" src={workoutPal} />
                        <Card.Body>
                            <Card.Title>workoutpal</Card.Title>
                            <Card.Text>
                                One Place to learn exercises for everyone, no
                                matter what age you are, what equipment you
                                have, what fitness level you have, there are always new progressive
                                exercises for everyone.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} lg={3}>
                <Card className="my-2" onClick={()=> navigate('/project/foodplaza')} style={{ width: "100%", cursor:"pointer" }}>
                        <Card.Img variant="top" src={foodPlaza} />
                        <Card.Body>
                            <Card.Title>FoodPlaza</Card.Title>
                            <Card.Text>
                                A react app that can take your restraunt business online, from ordering your food to tracking your order state to making online payments, its a app that can take your business online. 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} lg={3}>
                <Card onClick={()=> navigate('/project/gtr')} className="my-2" style={{ width: "100%", cursor:"pointer" }}>
                        <Card.Img variant="top" src={gtr} />
                        <Card.Body>
                            <Card.Title>Gtr Design</Card.Title>
                            <Card.Text>
                                This is a simple single page react app that the shows the design skills, this app is created using only html and css with no frontend css frameworks it shows the core frontend skills.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} lg={3}>
                <Card className="my-2" onClick={()=> navigate('/project/portfolio')} style={{ width: "100%", cursor:"pointer" }}>
                        <Card.Img variant="top" src={myPortfolio} />
                        <Card.Body>
                            <Card.Title>My Porfolio</Card.Title>
                            <Card.Text>
                                Its the very appliation that you are currently seeing. Its a simple app that demonstrates development skills and replaces your traditional resume to attract employers.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Projects;
