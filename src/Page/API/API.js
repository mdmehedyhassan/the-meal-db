import React from 'react';
import Footer from '../Share/Footer/Footer';
import HeaderNav from '../Share/HeaderNav/HeaderNav';
import APIDetails from './APIDetails';

const API = () => {
    document.title = "API";
    return (
        <div className="container">
            <HeaderNav/>
            <APIDetails/>
            <Footer/>
        </div>
    );
};

export default API;