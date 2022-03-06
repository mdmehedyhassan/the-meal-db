import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BrowseByName from '../../Share/BrowseByname/BrowseByName';
import Footer from '../../Share/Footer/Footer';
import GetMealComponents from '../../Share/GetMealComponents/GetMealComponents';
import HeaderNav from '../../Share/HeaderNav/HeaderNav';

const SingleIngredients = () => {
    document.title = "Ingredients Meal";
    const { ingredient } = useParams();
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
        axios(url)
            .then(res => {
                if (res.data?.meals) {
                    setMeals(res.data?.meals)
                }
                if (!res.data?.meals) {
                    setMeals([])
                }
            })
    }, [ingredient]);
    return (
        <div className="container">
            <HeaderNav />
            <div className="mt-5 mb-5 top-border-global-style">
                <div className="row">
                    <div className="col-md-4 mt-5">
                        <img style={{ width: '100%' }} src={`https://www.themealdb.com/images/ingredients/${ingredient}.png`} alt="" />
                        <h2 style={{fontWeight: 700}} className="text-center"><small className="text-secondary">Name: </small> {ingredient}</h2>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            {
                                meals.length ?
                                    <h3 className="text-center mt-3"><b>Find Meals</b></h3>
                                    :
                                    <h3 className="text-center mt-3"><b>Meal Not Found</b></h3>
                            }
                            {
                                meals?.map(meal => <GetMealComponents key={meal.idMeal} meal={meal}></GetMealComponents>)
                            }
                        </div>
                    </div>
                </div>

            </div>
            <BrowseByName />
            <Footer />
        </div>
    );
};

export default SingleIngredients;