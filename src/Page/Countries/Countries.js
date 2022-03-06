import React from 'react';
import Footer from '../Share/Footer/Footer';
import BrowseCountry from '../Share/BrowseCountry/BrowseCountry';
import HeaderNav from '../Share/HeaderNav/HeaderNav';
import BrowseByName from '../Share/BrowseByname/BrowseByName';

const Countries = () => {
    document.title = "Categories";
    return (
        <div className="container">
            <HeaderNav/>
            <BrowseCountry/>
            <BrowseByName/>
            <Footer/>
        </div>
    );
};

export default Countries;