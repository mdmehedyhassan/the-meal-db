import { faFacebook, faGithub, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { memo } from 'react';

const About = memo(() => {
    return (
        <div className="text-center mt-5 top-border-global-style">
            <div className="d-flex justify-content-center">
                <a href="https://www.facebook.com/mehedysr" target="_blank" rel="noopener noreferrer">
                    <h1 className="m-1 text-primary"><FontAwesomeIcon icon={faFacebook} /></h1>
                </a>
                <a href="https://www.linkedin.com/in/md-mehedy-hassan/" target="_blank" rel="noopener noreferrer">
                    <h1 className="m-1 text-primary"><FontAwesomeIcon icon={faLinkedin} /></h1>
                </a>
                <a href="https://github.com/mdmehedyhassan" target="_blank" rel="noopener noreferrer">
                    <h1 style={{ color: 'gray' }} className="m-1"><FontAwesomeIcon icon={faGithub} /></h1>
                </a>
                <a href="https://twitter.com/MdMehedyHassa10" target="_blank" rel="noopener noreferrer">
                    <h1 className="m-1 text-primary"><FontAwesomeIcon icon={faTwitterSquare} /></h1>
                </a>
            </div>
            <p><small>© 2022 TheMealDB Proudly built in the UK</small></p>
        </div>
    );
});

export default About;