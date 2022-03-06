import React from 'react';
import BrowseByName from '../Share/BrowseByname/BrowseByName';
import Footer from '../Share/Footer/Footer';
import HeaderNav from '../Share/HeaderNav/HeaderNav';
import IngredientsDetails from './IngredientsDetails';

const Ingredients = () => {
    document.title = "Ingredients";
    return (
        <div className="container">
            <HeaderNav/>
            <IngredientsDetails/>
            <BrowseByName/>
            <Footer/>
        </div>
    );
};

export default Ingredients;