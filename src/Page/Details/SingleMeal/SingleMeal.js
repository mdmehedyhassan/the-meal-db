import React from 'react';
import Footer from '../../Share/Footer/Footer';
import BrowseByName from '../../Share/BrowseByname/BrowseByName';
import HeaderNav from '../../Share/HeaderNav/HeaderNav';
import SingleMealDetails from './SinnleMealDetails';

const SingleMeal = () => {
    return (
        <div className="container">
            <HeaderNav/>
            <SingleMealDetails/>
            <BrowseByName/>
            <Footer/>
        </div>
    );
};

export default SingleMeal;