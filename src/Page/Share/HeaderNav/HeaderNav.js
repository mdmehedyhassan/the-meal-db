import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { darkTheme, GlobalStyles, lightTheme } from '../../../theme/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faMoon } from '@fortawesome/free-solid-svg-icons';
import { ContextProvider } from '../../../App';

const HeaderNav = () => {
    const [isDarkTheme, setIsDarkTheme] = useContext(ContextProvider);
    const location = useLocation();
    const getPath = location.pathname;
    return (
        <>
            <GlobalStyles theme={isDarkTheme ? darkTheme : lightTheme} />
            <Navbar bg="danger" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <h3 style={{fontWeight: 900, color: '#fc8c03d5' , textShadow: '1px 1px 5px black, -1px -1px 5px black'}}>TheMealDB</h3>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto text-end">
                            <Link to="/home">
                                <button className={ `m-1 btn ${getPath==='/home' ? 'btn-warning': 'btn-outline-warning'} `}>
                                    Home
                                </button>
                            </Link>

                            <Link to="/categories">
                                <button className={ `m-1 btn ${getPath==='/categories' ? 'btn-warning': 'btn-outline-warning'} `}>
                                    Categories
                                </button>
                            </Link>
                            <Link to="/countries">
                                <button className={ `m-1 btn ${getPath==='/countries' ? 'btn-warning': 'btn-outline-warning'} `}>
                                    Countries
                                </button>
                            </Link>
                            <Link to="/ingredients">
                                <button className={ `m-1 btn ${getPath==='/ingredients' ? 'btn-warning': 'btn-outline-warning'} `}>
                                    Ingredients
                                </button>
                            </Link>
                            <Link to="/api">
                                <button className={ `m-1 btn ${getPath==='/api' ? 'btn-warning': 'btn-outline-warning'} `}>
                                    API
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