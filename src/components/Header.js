import { Container } from "react-bootstrap";
import { Nav, Navbar } from "react-bootstrap";
import "../css/main.css";

function Header() {
    return (
        <div className="header ">
            <Container className="d-flex align-items-center justify-content-between">
                <div>
                    <Navbar.Brand href="/home">
                        <img
                            src={require("../img/Logo.jpg")}
                            height="55px"
                            className="d-inline-block align-top"
                            alt="StekLogo"
                        />
                    </Navbar.Brand>
                </div>

                <Nav
                    className="justify-content-center navbar"
                    activeKey="/home"
                >
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">About Us</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Products</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="">Prices</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="">Services</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="">FAQ</Nav.Link>
                    </Nav.Item>
                </Nav>
                <div className="navcontacts text-end">
                    <span>mail.com</span>
                    <span>465686356465</span>
                    <span>city Kyiv</span>
                </div>
            </Container>
        </div>
    );
}

export default Header;
