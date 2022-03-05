import React from 'react';

const PopularIngredientsDetails = (props) => {
    return (
        <div className="col-xl-3 col-md-4 col-sm-6 col-12 mt-2 mb-2">
            <div className="text-center h-100 box-style-global p-3">
                <img style={{borderRadius: "10px"}} className="w-100" src={`https://www.themealdb.com/images/ingredients/${props?.ingredient}.png`} alt="" />
                <h5 className="p-2">{props?.ingredient}</h5>
            </div>
        </div>
    );
};

export default PopularIngredientsDetails;