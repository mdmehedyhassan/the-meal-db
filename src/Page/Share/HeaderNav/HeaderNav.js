import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { darkTheme, GlobalStyles, lightTheme } from '../../../theme/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faMoon } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../image/logo-small.png'

const HeaderNav = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    return (
        <>
            <GlobalStyles theme={isDarkTheme ? darkTheme : lightTheme} />
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto text-end">
                            <Link to="/home">
                                <button className="btn btn-info m-1">
                                    Home
                                </button>
                            </Link>
                            <Link to="/api">
                                <button className="btn btn-outline-info m-1">
                                    API
                                </button>
                            </Link>
                            <Link to="/categories">
                                <button className="btn btn-outline-info m-1">
                                    Categories
                                </button>
                            </Link>

                            <div>
                                <button
                                    style={{ width: '40px' }}
                                    onClick={() => setIsDarkTheme(!isDarkTheme)}
                                    className={isDarkTheme ? 'btn btn-light m-1' : 'btn btn-dark m-1'}
                                >
                                    {
                                        isDarkTheme ?
                                            <FontAwesomeIcon icon={faLightbulb} />
                                            :
                                            <FontAwesomeIcon icon={faMoon} />
                                    }
                                </button>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar></>
    );
};

export default HeaderNav;