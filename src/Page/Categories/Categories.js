import React from 'react';
import Footer from '../Share/Footer/Footer';
import HeaderNav from '../Share/HeaderNav/HeaderNav';
import CategoriesDetails from './CategoriesDetails';

const Categories = () => {
    return (
        <div className="container">
            <HeaderNav />
            <CategoriesDetails/>
            <Footer />
        </div>
    );
};

export default Categories;