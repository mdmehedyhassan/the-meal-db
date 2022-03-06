import React from 'react';
import Footer from '../../Share/Footer/Footer';
import BrowseByName from '../../Share/BrowseByname/BrowseByName';
import HeaderNav from '../../Share/HeaderNav/HeaderNav';

const SingleMeal = () => {
    return (
        <div className="container">
            <HeaderNav/>
            <BrowseByName/>
            <Footer/>
        </div>
    );
};

export default SingleMeal;