import React from 'react';
import { Link } from 'react-router-dom';

const HomeIngredients = (props) => {
    return (
        <Link
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            to={`/singleIngredients/${props?.ingredient}`} className="col-xl-3 col-md-4 col-sm-6 col-12 mt-2 mb-2">
            <div className="text-center h-100 box-style-global p-3">
                <img style={{ borderRadius: "10px" }} className="w-100" src={`https://www.themealdb.com/images/ingredients/${props?.ingredient}.png`} alt="" />
                <h5 className="p-2">{props?.ingredient}</h5>
            </div>
        </Link>
    );
};
export default HomeIngredients;