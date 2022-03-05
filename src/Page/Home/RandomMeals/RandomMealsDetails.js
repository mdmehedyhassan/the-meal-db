import axios from 'axios';
import React, { useEffect, useState } from 'react';

const RandomMealsDetails = () => {
    const [meal, setMeal] = useState({});
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/random.php`;
        axios(url)
            .then(res => setMeal(res.data.meals[0]))
            .catch(err => console.log(err))
    }, []);
    return (
        <div className="col-xl-3 col-md-4 col-sm-6 col-12 mt-2 mb-2">
            <div className="text-center h-100 box-style-global p-3">
                <img style={{borderRadius: "10px"}} className="w-100" src={meal?.strMealThumb} alt="" />
                <h5 className="p-2">{meal?.strMeal}</h5>
            </div>
        </div>
    );
};

export default RandomMealsDetails;