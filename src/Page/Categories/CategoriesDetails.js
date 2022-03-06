import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CategoriesDetails = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        axios('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => setCategories(res.data.categories))
    }, [])
    return (
        <div className="mt-5 mb-5 top-border-global-style">
            <h3 className="text-center mt-3"><b>All Categories</b></h3>
            <div className="row">
                {
                    categories?.map(category => (
                        <Link
                            data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000"
                            to={`/singleCategory/${category?.strCategory}`} key={category?.idCategory} className="col-xl-3 col-md-4 col-sm-6 col-12 mt-2 mb-2">
                            <div className="text-center h-100 box-style-global p-3">
                                <img style={{ borderRadius: "10px" }} className="w-100" src={category?.strCategoryThumb} alt={category?.strCategory} />
                                <h5 className="p-2 all-name-global-style">{category?.strCategory}</h5>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default CategoriesDetails;