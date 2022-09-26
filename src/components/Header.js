import { Container } from "react-bootstrap";
import { Nav, Navbar } from "react-bootstrap";
import "../css/main.css";
import { Link, NavLink } from "react-router-dom";

function Header() {
    return (
        <div className="header ">
            <Container className="d-flex align-items-center justify-content-between">
                <div>
                    <Navbar.Brand>
                        <NavLink to="/">
                            <img
                                src={require("../img/Logo.jpg")}
                                height="55px"
                                className="d-inline-block align-top"
                                alt="StekLogo"
                            />
                        </NavLink>
                    </Navbar.Brand>
                </div>

                <Nav
                    className="justify-content-center navbar"
                    activeKey="/home"
                >
                    <Nav.Item>
                        <NavLink className="nav-link" to="/">
                            Home
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink className="nav-link" to="/aboutUs">
                            About Us
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink className="nav-link" eventKey="">
                            Prices
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink
                            className="nav-link"
                            eventKey=""
                            to="/Services"
                        >
                            Services
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink className="nav-link" to="/FAQ">
                            FAQ
                        </NavLink>
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
