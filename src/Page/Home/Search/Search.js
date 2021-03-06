import { faDrumstickBite, faImage, faMagnifyingGlass, faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const navigate = useNavigate();
    const [getInput, setGetInput] = useState('nothing-search')
    const inputChange = e => {
        setGetInput(e.target.value);
    }
    return (
        <div className="mt-5 mb-5 top-border-global-style">
            <div className="d-flex justify-content-center">
                <div className="input-group mb-3 mt-3 w-50">
                    <input type="text" className="form-control" onChange={inputChange} placeholder="Search Meals..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button
                        onClick={() => navigate(`/searchMeals/${getInput}`)}
                        className="btn btn-outline-secondary"
                        type="button" id="button-addon2">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </div>
            <h5 className="text-center" style={{ fontWeight: '700' }}>
                <pre><FontAwesomeIcon icon={faPizzaSlice} /> Total Meals: 283    <FontAwesomeIcon icon={faDrumstickBite} /> Total Ingredients: 574    <FontAwesomeIcon icon={faImage} /> Images: 283</pre>
            </h5>
        </div>
    );
};

export default Search;