import React from 'react';
import RandomMealsDetails from './RandomMealsDetails';

const RandomMeals = () => {
    return (
        <div className="mt-5 mb-5 top-border-global-style">
            <h3 className="text-center mt-3"><b>Random Meals</b></h3>
            <div className="row">
                {
                    [...Array(8).keys()].map(number => <RandomMealsDetails key={number}></RandomMealsDetails>)
                }
            </div>
        </div>
    );
};


export default RandomMeals;
