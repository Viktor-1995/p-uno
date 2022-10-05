import React from "react";
import { Container } from "react-bootstrap";
import { Nav, Navbar } from "react-bootstrap";
import "../css/main.css";
import { Link, NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

function Header() {
    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a
            href=""
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
        >
            {children}
        </a>
    ));
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
                <div className="menu-dropdown">
                    {/* <DropdownMenu /> */}
                    <Dropdown>
                        {/* <Dropdown.Toggle>Menu</Dropdown.Toggle> */}
                        <Dropdown.Toggle
                            as={CustomToggle}
                            id="dropdown-custom-components"
                        >
                            Menu
                        </Dropdown.Toggle>
                        {/* <div className="dropdown-toggle">Menu</div> */}
                        <Dropdown.Menu>
                            <Dropdown.Item>
                                <NavLink className="nav-link" to="/">
                                    Home
                                </NavLink>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                                <NavLink className="nav-link" to="/aboutUs">
                                    About Us
                                </NavLink>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                <NavLink
                                    className="nav-link"
                                    eventKey=""
                                    to="/Services"
                                >
                                    Services
                                </NavLink>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <NavLink className="nav-link" to="/FAQ">
                                    FAQ
                                </NavLink>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
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
                        <NavLink className="nav-link" to="/Prices">
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
                    <span>cleancar@mail.com</span>
                    <span>+3800000000</span>
                    <span>city Kyiv</span>
                </div>
            </Container>
        </div>
    );
}

export default Header;
