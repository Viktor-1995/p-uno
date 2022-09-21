import { Container } from "react-bootstrap";
import { Card, CardGroup } from "react-bootstrap";
import "../css/introduce.css";

function Introduce() {
    return (
        <div className="introduce-overlay">
            <Container className="introduce">
                <div className="introduce-head-text ">
                    <h2>Exterior Detaling</h2>
                    <span>Includes</span>
                </div>
                <CardGroup>
                    <Card className="bg-dark text-white d-wash">
                        <Card.Img
                            src={require("../img/index1.jpg")}
                            alt="Card image"
                        />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below
                                as a natural lead-in to additional content. This
                                content is a little bit longer.
                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-dark text-white d-wash">
                        <Card.Img
                            src={require("../img/index2.jpg")}
                            alt="Card image"
                        />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below
                                as a natural lead-in to additional content. This
                                content is a little bit longer.
                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-dark text-white d-wash">
                        <Card.Img
                            src={require("../img/index3.jpg")}
                            alt="Card image"
                        />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below
                                as a natural lead-in to additional content. This
                                content is a little bit longer.
                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </CardGroup>

                <div className="introduce-head-text ">
                    <h2>Interior Detaling</h2>
                    <span>Includes</span>
                </div>
                <CardGroup>
                    <Card className="bg-dark text-white d-wash">
                        <Card.Img
                            src={require("../img/interiorIndex8.jpg")}
                            alt="Card image"
                        />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below
                                as a natural lead-in to additional content. This
                                content is a little bit longer.
                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-dark text-white d-wash">
                        <Card.Img
                            src={require("../img/interiorIndex4.jpg")}
                            alt="Card image"
                        />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below
                                as a natural lead-in to additional content. This
                                content is a little bit longer.
                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-dark text-white d-wash">
                        <Card.Img
                            src={require("../img/interiorIndex5.jpeg")}
                            alt="Card image"
                        />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below
                                as a natural lead-in to additional content. This
                                content is a little bit longer.
                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </CardGroup>
            </Container>
        </div>
    );
}

export default Introduce;
