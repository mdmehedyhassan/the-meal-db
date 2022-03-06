import React from 'react';
import { Link } from 'react-router-dom';
import American from '../../../image/country/American.png';
import Argentinian from '../../../image/country/Argentinian.png';
import British from '../../../image/country/British.png';
import Canadian from '../../../image/country/Canadian.png';
import Chinese from '../../../image/country/Chinese.png';
import Croatian from '../../../image/country/Croatian.png';
import Dutch from '../../../image/country/Dutch.png';
import Egyptian from '../../../image/country/Egyptian.png';
import French from '../../../image/country/French.png';
import Greek from '../../../image/country/Greek.png';
import Indian from '../../../image/country/Indian.png';
import Irish from '../../../image/country/Irish.png';
import Italian from '../../../image/country/Italian.png';
import Jamaican from '../../../image/country/Jamaican.png';
import Japanese from '../../../image/country/Japanese.png';
import Kenyan from '../../../image/country/Kenyan.png';
import Malaysian from '../../../image/country/Malaysian.png';
import Mexican from '../../../image/country/Mexican.png';
import Moroccan from '../../../image/country/Moroccan.png';
import Norwegian from '../../../image/country/Norwegian.png';
import Polish from '../../../image/country/Polish.png';
import Portuguese from '../../../image/country/Portuguese.png';
import Russian from '../../../image/country/Russian.png';
import Slovakian from '../../../image/country/Slovakian.png';
import Spanish from '../../../image/country/Spanish.png';
import Syrian from '../../../image/country/Syrian.png';
import Thai from '../../../image/country/Thai.png';
import Tunisian from '../../../image/country/Tunisian.png';
import Turkish from '../../../image/country/Turkish.png';
import Vietnamese from '../../../image/country/Vietnamese.png';


const BrowseCountry = () => {
    return (
        <div className="mt-5 mb-5 top-border-global-style">
            <h3 className="text-center mt-3"><b>Browse Country</b></h3>
            <div className="d-flex box-style-global-child">
                <div className="">
                    <Link to={`/singleCountry/Vietnamese`}>
                        <img style={{ width: '100%' }} src={Vietnamese} alt="" />
                    </Link>
                    <Link to={`/singleCountry/American`}>
                        <img style={{ width: '100%' }} src={American} alt="" />
                    </Link>
                    <Link to={`/singleCountry/Argentinian`}>
                        <img style={{ width: '100%' }} src={Argentinian} alt="" />
                    </Link>
                    <Link to={`/singleCountry/British`}>
                        <img style={{ width: '100%' }} src={British} alt="" />
                    </Link>
                    <Link to={`/singleCountry/Canadian`}>
                        <img style={{ width: '100%' }} src={Canadian} alt="" />
                    </Link>
                </div>
                <div className="">
                    <Link to={`/singleCountry/Chinese`}>
                        <img style={{ width: '100%' }} src={Chinese} alt="" />
                    </Link>
                    <Link to={`/singleCountry/Croatian`}>
                        <img style={{ width: '100%' }} src={Croatian} alt="" />
                    </Link>
                    <Link to={`/singleCountry/Dutch`}>
                        <img style={{ width: '100%' }} src={Dutch} alt="" />
                    </Link>
                    <Link to={`/singleCountry/Egyptian`}>
                        <img style={{ width: '100%' }} src={Egyptian} alt="" />
                    </Link>
                    <Link to={`/singleCountry/French`}>
                        <img style={{ width: '100%' }} src={French} alt="" />
                    </Link>
                </div>
                <div className="">
                    <Link to={`/singleCountry/Greek`}>
                        <img style={{ width: '100%' }} src={Greek} alt="" />
                    </Link>
                    <Link to={`/singleCountry/Indian`}>
                        <img style={{ width: '100%' }} src={Indian} alt="" />
                    </Link>
                    <Link to={`/singleCountry/Irish`}>
                        <img style={{ width: '100%' }} src={Irish} alt="" />
                    </Link>
                    <Link to={`/singleCountry/Italian`}>
                        <img style={{ width: '100%' }} src={Italian} alt="" />
                    </Link>
                    <Link to={`/singleCountry/Jamaican`}>
                        <img style={{ width: '100%' }} src={Jamaican} alt="" />
                    </Link>
                </div>
                <div className="">
                    <Link to={`/singleCountry/Japanese`}>
                        <img style={{ width: '100%' }} src={Japanese} alt="" />
                    </Link>
                    <Link to={`/singleCountry/Kenyan`}>
                        <img style={{ width: '100%' }} src={Kenyan} alt="" />
                    </Link>
                    <Link to={`/singleCountry/Malaysian`}>
                        <img style={{ width: '100%' }} src={Malaysian} alt="" />
                    </Link>
                    <Link to={`/singleCountry/Mexican`}>
                        <img style={{ width: '100%' }} src={Mexican} alt="" />
                    </Link>
                    <Link to={`/singleCountry/Moroccan`}>
                        <img style={{ width: '100%' }} src={Moroccan} alt="" />
                    </Link>
                </div>
                <div className="">
                    <Link to={`/singleCountry/Norwegian`}>
                        <img style={{ width: '100%' }} src={Norwegian} alt="" />
                    </Link>
                    <Link to={`/singleCountry/Polish`}>
                        <img style={{ width: '100%' }} src={Polish} alt="" />
                    </Link>
                    <Link to={`/singleCountry/Algerian`}>
                        <img style={{ width: '100%' }} src={Portuguese} alt="" />
                    </Link>
                    <Link to={`/singleCountry/Russian`}>
                        <img style={{ width: '100%' }} src={Russian} alt="" />
                    </Link>
                    <Link to={`/singleCountry/Turkish`}>
                        <img style={{ width: '100%' }} src={Turkish} alt="" />
                    </Link>
                </div>
                <div className="">
                    <Link to={`/singleCountry/Slovakian`}>
                        <img style={{ width: '100%' }} src={Slovakian} alt="" />
                    </Link>
                    <Link to={`/singleCountry/Spanish`}>
                        <img style={{ width: '100%' }} src={Spanish} alt="" />
                    </Link>
                    <Link to={`/singleCountry/Syrian`}>
                        <img style={{ width: '100%' }} src={Syrian} alt="" />
                    </Link>
                    <Link to={`/singleCountry/Thai`}>
                        <img style={{ width: '100%' }} src={Thai} alt="" />
                    </Link>
                    <Link to={`/singleCountry/Tunisian`}>
                        <img style={{ width: '100%' }} src={Tunisian} alt="" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BrowseCountry;