import axios from 'axios';
import React, { useEffect, useState } from 'react';


const IngredientsDetails = () => {
    const [ingredients, setIngredients] = useState([]);
    useEffect(() => {
        axios('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
            .then(res => setIngredients(res.data.meals))
    }, [])
    return (
        <div className="mt-5 mb-5 top-border-global-style">
            <h3 className="text-center mt-3"><b>Latest Meals</b></h3>
            <div className="row">
                {
                    ingredients?.map(ingredient => (
                        <div key={ingredient?.idIngredient} className="col-xl-2 col-md-3 col-sm-4 col-6 mt-2 mb-2">
                            <div className="text-center h-100 box-style-global p-3">
                                <img style={{ borderRadius: "10px" }} className="w-100" src={`https://www.themealdb.com/images/ingredients/${ingredient?.strIngredient}.png`} alt={ingredient?.strIngredient} />
                                <h5 className="p-2">{ingredient?.strIngredient}</h5>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default IngredientsDetails;