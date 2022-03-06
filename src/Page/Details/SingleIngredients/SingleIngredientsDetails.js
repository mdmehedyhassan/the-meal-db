import React from 'react';
import { Link } from 'react-router-dom';

const SingleIngredientsDetails = ({meal}) => {
    return (
        <Link to={`/singleMeal/${meal?.idMeal}`} className="col-xl-4 col-md-6 mt-2 mb-2">
            <div className="text-center h-100 box-style-global p-3">
                <img style={{borderRadius: "10px"}} className="w-100" src={meal?.strMealThumb} alt="" />
                <h5 className="p-2 all-name-global-style">{meal?.strMeal}</h5>
            </div>
        </Link>
    );
};

export default SingleIngredientsDetails;