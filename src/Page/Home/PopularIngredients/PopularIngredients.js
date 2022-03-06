import React from 'react';
import HomeIngredients from '../../Share/HomeIngredients/HomeIngredients';

const ingredients = [
    "Chicken",
    "Salmon",
    "Beef",
    "Pork"
]
const PopularIngredients = () => {
    return (
        <div className="mt-5 mb-5 top-border-global-style">
        <h3 className="text-center mt-3"><b>Popular Ingredients</b></h3>
        <div className="row">
            {
                ingredients.map((ingredient, index) => <HomeIngredients key={index} ingredient={ingredient}></HomeIngredients>)
            }
        </div>
    </div>
    );
};

export default PopularIngredients;