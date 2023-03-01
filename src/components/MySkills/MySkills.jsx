import { Card, Col, Row } from "react-bootstrap";
import "./MySkills.css";

const MySkills = () => {
    return (
        <div className="main" id="my-skills">
            <h1 className="title">My Skills</h1>
            <Row className="my-4 cards-div">
                <Col xs={12} lg={4}>
                    <Card className="my-2" style={{ width: "100%", height:'350px' }}>
                        <Card.Body>
                            <Card.Title>Frontend Skills</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                The following are the frontend technologies and
                                frameworks I can use:
                            </Card.Subtitle>
                            <Card.Text>
                                <ul>
                                    <li>HTML</li>
                                    <li>Css</li>
                                    <li>Javascript</li>
                                    <li>Bootstrap</li>
                                    <li>Tailwind css</li>
                                    <li>Material Ui</li>
                                    <li>React Js</li>
                                    <li>Wordpress</li>

                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} lg={4}>
                    <Card className="my-2" style={{ width: "100%", height:'350px' }}>
                        <Card.Body>
                            <Card.Title>Backend Skills</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                The following are the backend technologies and
                                frameworks I can use:
                            </Card.Subtitle>
                            <Card.Text>
                                <ul>
                                    <li>Javascript</li>
                                    <li>Node js</li>
                                    <li>Express js</li>
                                    <li>Mongo Db</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} lg={4}>
                    <Card className="my-2" style={{ width: "100%", height:'350px' }}>
                        <Card.Body>
                            <Card.Title>Additional Skills</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                The following are the additional technologies
                                and frameworks I can use:
                            </Card.Subtitle>
                            <Card.Text>
                                <ul>
                                    <li>Linux/Unix</li>
                                    <li>Bash Scripting</li>
                                    <li>Burp Suite</li>
                                    <li>Owasp Zap</li>
                                    <li>Metasploit</li>
                                    <li>Verious Recon Methodology Tools</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default MySkills;
