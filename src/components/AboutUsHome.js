import { Container, Row, Col } from "react-bootstrap";
import "../css/aboutUs.css";

function AboutUs() {
    return (
        <div className="aboutus">
            <div className="aboutus-wrap">
                <Container className="d-flex justify-content-center  ">
                    <div className="aboutUs-head-text">
                        <h2>
                            We are <span>CleanCar Detaling Studio</span>
                        </h2>
                        <span>
                            We offering some sort of car detaling thins as
                            <ul>
                                <li>car wash</li>
                                <li>paint protection</li>
                                <li>ceramic protection</li>
                                <li>tint</li>
                                <li>protection films</li>
                            </ul>
                        </span>
                    </div>
                    <div className="aboutUs-pictures">
                        <Row>
                            <Col>
                                <img
                                    src={require("../img/Ferrari.jpg")}
                                    width="200px"
                                />
                            </Col>
                            <Col>
                                <img
                                    src={require("../img/Ferrari.jpg")}
                                    width="200px"
                                />
                            </Col>
                            <Col>
                                <img
                                    src={require("../img/Ferrari.jpg")}
                                    width="200px"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <img
                                    src={require("../img/Ferrari.jpg")}
                                    width="200px"
                                />
                            </Col>
                            <Col>
                                <img
                                    src={require("../img/Ferrari.jpg")}
                                    width="200px"
                                />
                            </Col>
                            <Col>
                                <img
                                    src={require("../img/Ferrari.jpg")}
                                    width="200px"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <img
                                    src={require("../img/Ferrari.jpg")}
                                    width="200px"
                                />
                            </Col>
                            <Col>
                                <img
                                    src={require("../img/Ferrari.jpg")}
                                    width="200px"
                                />
                            </Col>
                            <Col>
                                <img
                                    src={require("../img/Ferrari.jpg")}
                                    width="200px"
                                />
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default AboutUs;
