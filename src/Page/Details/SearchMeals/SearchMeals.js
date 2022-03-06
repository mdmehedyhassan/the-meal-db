import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../../Share/Footer/Footer';
import BrowseByName from '../../Share/BrowseByname/BrowseByName';
import HeaderNav from '../../Share/HeaderNav/HeaderNav';
import SearchMealsDetails from './SearchMealsDetails';

const SearchMeals = () => {
    const { search } = useParams();
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
        axios(url)
            .then(res => {
                console.log(res.data.meals)
                if (res.data.meals === null) {
                    setMeals([])
                }
                if (res.data.meals !== null) {
                    setMeals(res.data.meals)
                }
            });
    }, [search])
    return (
        <div className="container">
            {
                search === 'nothing-search' ?
                    <>
                        <h1 className="text-center text-danger">Sorry You haven't typed anything ...</h1>
                        <div className="text-center">
                            <Link to="/" className="btn btn-success">
                                Return Home
                            </Link>
                        </div>
                    </>
                    :
                    <>
                        <HeaderNav />
                        <div className="mt-5 mb-5 top-border-global-style">
                            <h3 className="text-center mt-3"><b>Your Searching Meals <span className="text-info">"{search}"</span></b></h3>
                            <div className="row">
                                {
                                    meals.map(meal => <SearchMealsDetails key={meal.idMeal} meal={meal}></SearchMealsDetails>)
                                }
                            </div>
                        </div>
                        {
                            meals.length === 0 && <h2 className="text-center text-danger">No meals found</h2>
                        }
                        <BrowseByName/>
                        <Footer />
                    </>
            }

        </div>
    );
};

export default SearchMeals;