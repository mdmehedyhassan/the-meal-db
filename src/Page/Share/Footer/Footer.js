import { faFacebook, faGithub, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <div className="text-center mt-5 bg-danger">
            <div className="d-flex justify-content-center">
                <a href="https://www.facebook.com/mehedysr" target="_blank" rel="noopener noreferrer">
                    <h1 className="m-1 text-info"><FontAwesomeIcon icon={faFacebook} /></h1>
                </a>
                <a href="https://www.linkedin.com/in/md-mehedy-hassan/" target="_blank" rel="noopener noreferrer">
                    <h1 className="m-1 text-info"><FontAwesomeIcon icon={faLinkedin} /></h1>
                </a>
                <a href="https://github.com/mdmehedyhassan" target="_blank" rel="noopener noreferrer">
                    <h1 className="m-1 text-info"><FontAwesomeIcon icon={faGithub} /></h1>
                </a>
                <a href="https://twitter.com/MdMehedyHassa10" target="_blank" rel="noopener noreferrer">
                    <h1 className="m-1 text-info"><FontAwesomeIcon icon={faTwitterSquare} /></h1>
                </a>
            </div>
            <p><small className="m-1 text-light">© 2022 TheMealDB Proudly built in the UK</small></p>
            <a href="https://github.com/mdmehedyhassan/the-meal-db" target="_blank" rel="noopener noreferrer">
                <button className="btn btn-outline-warning m-2">GitHub Code</button>
            </a>
        </div>
    );
};

export default Footer;