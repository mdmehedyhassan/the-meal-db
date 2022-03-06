import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BrowseByName from '../../Share/BrowseByname/BrowseByName';
import Footer from '../../Share/Footer/Footer';
import HeaderNav from '../../Share/HeaderNav/HeaderNav';
import SingleNameDetails from './SingleNameDetails';

const SingleName = () => {
    const { name } = useParams();
    const [meals, setMeals] = useState();
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${name}`;
        axios(url)
            .then(res => {
                if (res.data?.meals) {
                    setMeals(res.data?.meals)
                }
                if (!res.data?.meals) {
                    setMeals([])
                }
            })
    }, [name]);

    return (
        <div className="container">
            <HeaderNav />
            <div className="mt-5 mb-5 top-border-global-style">
                {
                    meals.length ?
                        <h3 className="text-center mt-3"><b>Find Meals</b></h3>
                        :
                        <h3 className="text-center mt-3"><b>Meal Not Found</b></h3>
                }
                <div className="row">
                    {
                        meals?.map(meal => <SingleNameDetails key={meal.idMeal} meal={meal}></SingleNameDetails>)
                    }
                </div>
            </div>
            <BrowseByName />
            <Footer />
        </div>
    );
};

export default SingleName;