import { faPaypal } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import mealIcon from '../../../image/meal-icon.png'

const HomeHeader = () => {
    return (
        <div className="text-center mt-5 mb-5">
            <div className="d-flex justify-content-center align-items-center">
                <div className="col-2">
                    <img className="w-100" src={mealIcon} alt="" />
                </div>
                <div className="col-8">
                    <h2 style={{ fontWeight: '900' }}>Welcome to TheMealDB</h2>
                    <p>
                        Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world. <br />
                        We also offer a <Link to="/api">free JSON API</Link> for anyone wanting to use it, with additional features for subscribers.
                    </p>
                    <Link to="/paypal">
                        <button className="btn btn-primary">
                            <FontAwesomeIcon icon={faPaypal} />
                            ayPal Subscribe
                        </button>
                    </Link>
                    <p>Click to Support: Currently 650 supporters</p>
                </div>
                <div className="col-2">
                    <img className="w-100" src={mealIcon} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;