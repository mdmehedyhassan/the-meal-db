import React from 'react';
import About from '../../Share/About/About';
import HeaderNav from '../../Share/HeaderNav/HeaderNav';
import BrowseByName from '../BrowseByname/BrowseByName';
import BrowseCountry from '../BrowseCountry/BrowseCountry';
import HomeHeader from '../HomeHeader/HomeHeader';
import LatestMeals from '../LatestMeals/LatestMeals';
import PopularIngredients from '../PopularIngredients/PopularIngredients';
import RandomIngredients from '../RandomIngredients/RandomIngredients';
import RandomMeals from '../RandomMeals/RandomMeals';
import Search from '../Search/Search';

const Home = () => {
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
            <About/>
        </div>
    );
};

export default Home;