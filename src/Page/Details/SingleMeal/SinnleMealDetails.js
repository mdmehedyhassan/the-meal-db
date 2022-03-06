import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const SingleMealDetails = () => {
    const { id } = useParams();
    const [meal, setMeal] = useState({});
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
        axios(url)
            .then(res => setMeal(res.data.meals[0]))
            .catch(err => {
                alert("Sorry meal Not Found");
            });
    }, [id])
    console.log(meal);
    const idNumber = parseInt(id);
    const previousId = idNumber - 1;
    const nextId = idNumber + 1;
    return (
        <div className="row mt-5 mb-5">
            <div className="col-xl-4 col-md-5 col-sm-6 col-12">
                {
                    meal?.strMeal &&
                    <div className="text-center">
                        <img style={{ width: '100%', borderRadius: '10px' }} src={meal?.strMealThumb} alt="" />
                        <h4 className="m-5"><small className="text-secondary">Name: </small>{meal?.strMeal}</h4>

                        <div>
                            Categories:
                            <Link to={`/singleCategory/${meal?.strCategory}`} className="btn btn-warning m-2">
                                {meal?.strCategory}
                            </Link>
                        </div>
                        <div>
                            Made by:
                            <Link to={`/singleCountry/${meal?.strArea}`} className="btn btn-warning m-2">
                                {meal?.strArea}
                            </Link>
                        </div>
                        <a href={meal?.strYoutube} target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-outline-warning">
                                <FontAwesomeIcon icon={faYoutube}/> Watching in Youtube
                            </button>
                        </a>
                        <br />

                        {
                            idNumber > 52764 &&
                            <Link to={`/singleMeal/${previousId}`} className="btn btn-outline-warning m-2" style={{ fontSize: 50 }}>
                                <FontAwesomeIcon icon={faBackward} />
                            </Link>
                        }
                        {
                            idNumber < 53063 &&
                            <Link to={`/singleMeal/${nextId}`} className="btn btn-outline-warning m-2" style={{ fontSize: 50 }}>
                                <FontAwesomeIcon icon={faForward} />
                            </Link>
                        }
                        <p style={{ textAlign: 'justify', color: 'gray'}} >{meal?.strInstructions}</p>

                    </div>
                }
            </div>
            <div className="col-xl-8 col-md-7 col-sm-6 col-12">

                {
                    meal?.strMeal &&
                    <div className="">
                        <h2 className="m-5 text-center">Ingredients</h2>
                        <div className="row m-4">
                            {
                                meal?.strIngredient1 &&
                                <Link to={`/singleIngredients/${meal?.strIngredient1}`} className="col-md-4 col-6 text-center box-style-global p-2 mt-2 mb-2">
                                    <img style={{ width: '100%' }} src={`https://www.themealdb.com/images/ingredients/${meal?.strIngredient1}.png`} alt="" />
                                    {meal?.strMeasure1}
                                </Link>
                            }
                            {
                                meal?.strIngredient2 &&
                                <Link to={`/singleIngredients/${meal?.strIngredient2}`} className="col-md-4 col-6 text-center box-style-global p-2 mt-2 mb-2">
                                    <img style={{ width: '100%' }} src={`https://www.themealdb.com/images/ingredients/${meal?.strIngredient2}.png`} alt="" />
                                    {meal?.strMeasure2}
                                </Link>
                            }
                            {
                                meal?.strIngredient3 &&
                                <Link to={`/singleIngredients/${meal?.strIngredient3}`} className="col-md-4 col-6 text-center box-style-global p-2 mt-2 mb-2">
                                    <img style={{ width: '100%' }} src={`https://www.themealdb.com/images/ingredients/${meal?.strIngredient3}.png`} alt="" />
                                    {meal?.strMeasure3}
                                </Link>
                            }
                            {
                                meal?.strIngredient4 &&
                                <Link to={`/singleIngredients/${meal?.strIngredient4}`} className="col-md-4 col-6 text-center box-style-global p-2 mt-2 mb-2">
                                    <img style={{ width: '100%' }} src={`https://www.themealdb.com/images/ingredients/${meal?.strIngredient4}.png`} alt="" />
                                    {meal?.strMeasure4}
                                </Link>
                            }
                            {
                                meal?.strIngredient5 &&
                                <Link to={`/singleIngredients/${meal?.strIngredient5}`} className="col-md-4 col-6 text-center box-style-global p-2 mt-2 mb-2">
                                    <img style={{ width: '100%' }} src={`https://www.themealdb.com/images/ingredients/${meal?.strIngredient5}.png`} alt="" />
                                    {meal?.strMeasure5}
                                </Link>
                            }
                            {
                                meal?.strIngredient6 &&
                                <Link to={`/singleIngredients/${meal?.strIngredient6}`} className="col-md-4 col-6 text-center box-style-global p-2 mt-2 mb-2">
                                    <img style={{ width: '100%' }} src={`https://www.themealdb.com/images/ingredients/${meal?.strIngredient6}.png`} alt="" />
                                    {meal?.strMeasure6}
                                </Link>
                            }
                            {
                                meal?.strIngredient7 &&
                                <Link to={`/singleIngredients/${meal?.strIngredient7}`} className="col-md-4 col-6 text-center box-style-global p-2 mt-2 mb-2">
                                    <img style={{ width: '100%' }} src={`https://www.themealdb.com/images/ingredients/${meal?.strIngredient7}.png`} alt="" />
                                    {meal?.strMeasure7}
                                </Link>
                            }
                            {
                                meal?.strIngredient8 &&
                                <Link to={`/singleIngredients/${meal?.strIngredient8}`} className="col-md-4 col-6 text-center box-style-global p-2 mt-2 mb-2">
                                    <img style={{ width: '100%' }} src={`https://www.themealdb.com/images/ingredients/${meal?.strIngredient8}.png`} alt="" />
                                    {meal?.strMeasure8}
                                </Link>
                            }
                            {
                                meal?.strIngredient9 &&
                                <Link to={`/singleIngredients/${meal?.strIngredient9}`} className="col-md-4 col-6 text-center box-style-global p-2 mt-2 mb-2">
                                    <img style={{ width: '100%' }} src={`https://www.themealdb.com/images/ingredients/${meal?.strIngredient9}.png`} alt="" />
                                    {meal?.strMeasure9}
                                </Link>
                            }
                            {
                                meal?.strIngredient10 &&
                                <Link to={`/singleIngredients/${meal?.strIngredient10}`} className="col-md-4 col-6 text-center box-style-global p-2 mt-2 mb-2">
                                    <img style={{ width: '100%' }} src={`https://www.themealdb.com/images/ingredients/${meal?.strIngredient10}.png`} alt="" />
                                    {meal?.strMeasure10}
                                </Link>
                            }
                            {
                                meal?.strIngredient11 &&
                                <Link to={`/singleIngredients/${meal?.strIngredient11}`} className="col-md-4 col-6 text-center box-style-global p-2 mt-2 mb-2">
                                    <img style={{ width: '100%' }} src={`https://www.themealdb.com/images/ingredients/${meal?.strIngredient11}.png`} alt="" />
                                    {meal?.strMeasure11}
                                </Link>
                            }
                            {
                                meal?.strIngredient12 &&
                                <Link to={`/singleIngredients/${meal?.strIngredient12}`} className="col-md-4 col-6 text-center box-style-global p-2 mt-2 mb-2">
                                    <img style={{ width: '100%' }} src={`https://www.themealdb.com/images/ingredients/${meal?.strIngredient12}.png`} alt="" />
                                    {meal?.strMeasure12}
                                </Link>
                            }
                            {
                                meal?.strIngredient13 &&
                                <Link to={`/singleIngredients/${meal?.strIngredient13}`} className="col-md-4 col-6 text-center box-style-global p-2 mt-2 mb-2">
                                    <img style={{ width: '100%' }} src={`https://www.themealdb.com/images/ingredients/${meal?.strIngredient13}.png`} alt="" />
                                    {meal?.strMeasure13}
                                </Link>
                            }
                            {
                                meal?.strIngredient14 &&
                                <Link to={`/singleIngredients/${meal?.strIngredient14}`} className="col-md-4 col-6 text-center box-style-global p-2 mt-2 mb-2">
                                    <img style={{ width: '100%' }} src={`https://www.themealdb.com/images/ingredients/${meal?.strIngredient14}.png`} alt="" />
                                    {meal?.strMeasure14}
                                </Link>
                            }
                            {
                                meal?.strIngredient15 &&
                                <Link to={`/singleIngredients/${meal?.strIngredient15}`} className="col-md-4 col-6 text-center box-style-global p-2 mt-2 mb-2">
                                    <img style={{ width: '100%' }} src={`https://www.themealdb.com/images/ingredients/${meal?.strIngredient15}.png`} alt="" />
                                    {meal?.strMeasure15}
                                </Link>
                            }
                            {
                                meal?.strIngredient16 &&
                                <Link to={`/singleIngredients/${meal?.strIngredient16}`} className="col-md-4 col-6 text-center box-style-global p-2 mt-2 mb-2">
                                    <img style={{ width: '100%' }} src={`https://www.themealdb.com/images/ingredients/${meal?.strIngredient16}.png`} alt="" />
                                    {meal?.strMeasure16}
                                </Link>
                            }
                            {
                                meal?.strIngredient17 &&
                                <Link to={`/singleIngredients/${meal?.strIngredient17}`} className="col-md-4 col-6 text-center box-style-global p-2 mt-2 mb-2">
                                    <img style={{ width: '100%' }} src={`https://www.themealdb.com/images/ingredients/${meal?.strIngredient17}.png`} alt="" />
                                    {meal?.strMeasure17}
                                </Link>
                            }
                            {
                                meal?.strIngredient18 &&
                                <Link to={`/singleIngredients/${meal?.strIngredient18}`} className="col-md-4 col-6 text-center box-style-global p-2 mt-2 mb-2">
                                    <img style={{ width: '100%' }} src={`https://www.themealdb.com/images/ingredients/${meal?.strIngredient18}.png`} alt="" />
                                    {meal?.strMeasure18}
                                </Link>
                            }
                            {
                                meal?.strIngredient19 &&
                                <Link to={`/singleIngredients/${meal?.strIngredient19}`} className="col-md-4 col-6 text-center box-style-global p-2 mt-2 mb-2">
                                    <img style={{ width: '100%' }} src={`https://www.themealdb.com/images/ingredients/${meal?.strIngredient19}.png`} alt="" />
                                    {meal?.strMeasure19}
                                </Link>
                            }
                            {
                                meal?.strIngredient20 &&
                                <Link to={`/singleIngredients/${meal?.strIngredient20}`} className="col-md-4 col-6 text-center box-style-global p-2 mt-2 mb-2">
                                    <img style={{ width: '100%' }} src={`https://www.themealdb.com/images/ingredients/${meal?.strIngredient20}.png`} alt="" />
                                    {meal?.strMeasure20}
                                </Link>
                            }

                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default SingleMealDetails;