import React from 'react';
import Footer from '../Share/Footer/Footer';
import BrowseCountry from '../Share/BrowseCountry/BrowseCountry';
import HeaderNav from '../Share/HeaderNav/HeaderNav';

const Countries = () => {
    return (
        <div className="container">
            <HeaderNav/>
            <BrowseCountry/>
            <Footer/>
        </div>
    );
};

export default Countries;