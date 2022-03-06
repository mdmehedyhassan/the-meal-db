import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const IngredientsDetails = () => {
    const [ingredients, setIngredients] = useState([]);
    const [page, setPage] = useState(1)
    useEffect(() => {
        axios('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
            .then(res => setIngredients(res.data.meals))
    }, []);
    const startCount = (page - 1) * 50;
    const endCount = page * 50;
    const slicesIngredients = ingredients.slice(startCount, endCount);
    return (
        <div className="mt-5 mb-5 top-border-global-style">
            <div className="text-center text-warning">
                <h1 style={{ marginTop: "10px", fontWeight: "bold" }}>See More Ingredients</h1>
                {
                    [...Array(12).keys()].map(number => (
                        <button
                            onClick={() => setPage(number + 1)}
                            key={number}
                            className={`btn m-2 ${page === number + 1 ? 'btn-warning' : 'btn-outline-warning'}`}
                        >
                            {number + 1}
                        </button>
                    ))
                }
            </div>
            <div className="row">
                {
                    slicesIngredients?.map(ingredient => (
                        <Link
                            data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000"
                            to={`/singleIngredients/${ingredient?.strIngredient}`}
                            key={ingredient?.idIngredient} className="col-xl-2 col-md-3 col-sm-4 col-6 mt-2 mb-2">
                            <div className="text-center h-100 box-style-global p-3">
                                <img style={{ borderRadius: "10px" }} className="w-100" src={`https://www.themealdb.com/images/ingredients/${ingredient?.strIngredient}.png`} alt={ingredient?.strIngredient} />
                                <h5 className="p-2">{ingredient?.strIngredient}</h5>
                            </div>
                        </Link>
                    ))
                }
                <div className="text-center text-warning">
                    <h1 style={{ marginTop: "10px", fontWeight: "bold" }}>See More Ingredients</h1>
                    {
                        [...Array(12).keys()].map(number => (
                            <button
                                onClick={() => setPage(number + 1)}
                                key={number}
                                className={`btn m-2 ${page === number + 1 ? 'btn-warning' : 'btn-outline-warning'}`}
                            >
                                {number + 1}
                            </button>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default IngredientsDetails;