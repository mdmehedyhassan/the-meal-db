import { faFileLines, faImage, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faCircleArrowUp, faEnvelopeOpenText, faVial } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const APIDetails = () => {
    return (
        <div className="text-center mt-5 mb-5">
            <h5>
                <FontAwesomeIcon icon={faThumbsUp} />
                Support
            </h5>
            <p>
                The API and site will always remain free at point of access. If you love our service and want extra features you can sign up as a <Link to="/paypal">Paypal supporter</Link> for $2. <br />
                You can cancel anytime. This allows us to pay for the servers and bandwidth and develop new features.
            </p>
            <br />
            <h5>
                <FontAwesomeIcon icon={faVial} />
                Test API Keys
            </h5>
            <p>
                You can use the test API key "1" during development of your app or for educational use(see test links below) <br />
                However you must become a supporter if releasing publicly on an appstore.  <br />
                The test key may be revoked at any time if abused.
            </p>
            <br />
            <h5>
                <FontAwesomeIcon icon={faCircleArrowUp} />
                API Production Key Upgrade
            </h5>
            <p>
                All supporters have access to the beta version of the API which allows mutiple ingredient filters. <br />
                You also get access to adding your own meals and images. You can also list the full database rather than limited to 100 items. <br />
                Please <Link to="/paypal">sign up</Link> on Paypal and we will email you the upgrade.
            </p>
            <br />
            <h5>
                <FontAwesomeIcon icon={faEnvelopeOpenText} />
                Contact
            </h5>
            <p>Email: mdmehedyh55@gmail.com  (please state if you are a Paypal Supporter)</p>
            <br />
            <h5>
                <FontAwesomeIcon icon={faFileLines} />
                API Methods using the developer test key '1' as the API key
            </h5>
            <br />
            <p>
                <i>Search meal by name</i> <br />
                <span className="text-info">www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata</span>
            </p>
            <p>
                <i>List all meals by first letter</i> <br />
                <span className="text-info">www.themealdb.com/api/json/v1/1/search.php?f=a</span>
            </p>
            <p>
                <i>Lookup full meal details by id</i> <br />
                <span className="text-info">www.themealdb.com/api/json/v1/1/lookup.php?i=52772</span>
            </p>
            <p>
                <i>Lookup a single random meal</i> <br />
                <span className="text-info">www.themealdb.com/api/json/v1/1/random.php</span>
            </p>
            <p>
                <i>Lookup a selection of 10 random meals (only available to $2+ <Link to="/paypal">Paypal supporter</Link>)</i> <br />
                <span className="text-info">www.themealdb.com/api/json/v1/1/randomselection.php</span>
            </p>
            <p>
                <i>List all meal categories</i> <br />
                <span className="text-info">www.themealdb.com/api/json/v1/1/categories.php</span>
            </p>
            <p>
                <i>Latest Meals (only available to $2+ <Link to="/paypal">Paypal supporter</Link>)</i> <br />
                <span className="text-info">www.themealdb.com/api/json/v1/1/latest.php</span>
            </p>
            <p>
                <i>List all Categories, Area, Ingredients</i> <br />
                <span className="text-info">
                    www.themealdb.com/api/json/v1/1/list.php?c=list <br />
                    www.themealdb.com/api/json/v1/1/list.php?a=list <br />
                    www.themealdb.com/api/json/v1/1/list.php?i=list
                </span>
            </p>
            <p>
                <i>Filter by main ingredient</i> <br />
                <span className="text-info">www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast</span>
            </p>
            <p>
                <i>Filter by multi-ingredient (only available to $2+ <Link to="/paypal">Paypal supporter</Link>)</i> <br />
                <span className="text-info">www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast,garlic,salt</span>
            </p>
            <p>
                <i>Filter by Category</i> <br />
                <span className="text-info">www.themealdb.com/api/json/v1/1/filter.php?c=Seafood</span>
            </p>
            <p>
                <i>Filter by Area</i> <br />
                <span className="text-info">www.themealdb.com/api/json/v1/1/filter.php?a=Canadian</span>
            </p>
            <br />
            <h5>
                <FontAwesomeIcon icon={faImage} />
                Images
            </h5>
            <p>
                Meal Thumbnail Images <br />
                Add /preview to the end of the meal image URL <br />
                <span className="text-info">/images/media/meals/llcbn01574260722.jpg/preview</span>
            </p>
            <p>
                <i>Ingredient Thumbnail Images</i><br />
                <span className="text-info">
                    www.themealdb.com/images/ingredients/Lime.png <br />
                    www.themealdb.com/images/ingredients/Lime-Small.png
                </span>
            </p>
        </div>
    );
};

export default APIDetails;