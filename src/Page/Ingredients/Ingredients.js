import React from 'react';
import Footer from '../Share/Footer/Footer';
import HeaderNav from '../Share/HeaderNav/HeaderNav';
import IngredientsDetails from './IngredientsDetails';

const Ingredients = () => {
    return (
        <div className="container">
            <HeaderNav/>
            <IngredientsDetails/>
            <Footer/>
        </div>
    );
};

export default Ingredients;