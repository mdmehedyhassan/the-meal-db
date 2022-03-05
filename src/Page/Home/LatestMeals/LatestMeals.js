import React from 'react';
import LatestMealsDetails from './LatestMealsDetails';

const latestMeals = [
    "Chivito uruguayo",
    "Walnut Roll Gužvara",
    "Fresh sardines",
    "Burek",
    "Mushroom soup with buckwheat",
    "Croatian Bean Stew",
    "Traditional Croatian Goulash",
    "Croatian lamb peka"
]
const LatestMeals = () => {
    return (
        <div className="mt-5 mb-5 top-border-global-style">
            <h3 className="text-center mt-3"><b>Latest Meals</b></h3>
            <div className="row">
                {
                    latestMeals.map(mealName => <LatestMealsDetails key={mealName} mealName={mealName}></LatestMealsDetails>)
                }
            </div>
        </div>
    );
};

export default LatestMeals;