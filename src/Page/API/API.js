import React from 'react';
import About from '../Share/About/About';
import HeaderNav from '../Share/HeaderNav/HeaderNav';
import APIDetails from './APIDetails';

const API = () => {
    return (
        <div className="container">
            <HeaderNav/>
            <APIDetails/>
            <About/>
        </div>
    );
};

export default API;