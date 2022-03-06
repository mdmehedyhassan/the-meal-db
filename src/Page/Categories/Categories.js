import React from 'react';
import BrowseByName from '../Share/BrowseByname/BrowseByName';
import Footer from '../Share/Footer/Footer';
import HeaderNav from '../Share/HeaderNav/HeaderNav';
import CategoriesDetails from './CategoriesDetails';

const Categories = () => {
    return (
        <div className="container">
            <HeaderNav />
            <CategoriesDetails/>
            <BrowseByName/>
            <Footer />
        </div>
    );
};

export default Categories;