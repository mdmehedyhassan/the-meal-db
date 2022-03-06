import React from 'react';
import Footer from '../../Share/Footer/Footer';
import HeaderNav from '../../Share/HeaderNav/HeaderNav';
import BrowseByName from '../../Share/BrowseByname/BrowseByName';
import BrowseCountry from '../../Share/BrowseCountry/BrowseCountry';
import HomeHeader from '../HomeHeader/HomeHeader';
import LatestMeals from '../LatestMeals/LatestMeals';
import PopularIngredients from '../PopularIngredients/PopularIngredients';
import RandomIngredients from '../RandomIngredients/RandomIngredients';
import RandomMeals from '../RandomMeals/RandomMeals';
import Search from '../Search/Search';

const Home = () => {
    document.title = "TheMealDB";
    return (
        <div className="container">
            <HeaderNav/>
            <HomeHeader/>
            <Search/>
            <LatestMeals/>
            <PopularIngredients/>
            <RandomMeals/>
            <RandomIngredients/>
            <BrowseCountry/>
            <BrowseByName/>
            <Footer/>
        </div>
    );
};

export default Home;