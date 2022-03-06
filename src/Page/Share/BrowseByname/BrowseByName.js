import React from 'react';
import { useNavigate } from 'react-router-dom';

const BrowseByName = () => {
    const navigate = useNavigate();
    const getDivInnerText = e => {
        if(e.target.innerText.length===1){
            navigate(`/singleName/${e.target.innerText}`)
        }
    }

    return (
        <div className="mt-5 mb-5 top-border-global-style" >
            <h3 className="text-center mt-3"><b>Browse By Name</b></h3>
            <div className="row box-style-global-child">
                <div className="browse-by-name" onClick={getDivInnerText}>
                    <div>A</div><div>B</div><div>C</div><div>D</div><div>E</div><div>F</div><div>G</div><div>H</div><div>I</div><div>J</div><div>K</div><div>L</div><div>M</div><div>N</div><div>O</div><div>P</div><div>Q</div><div>R</div><div>S</div><div>T</div><div>U</div><div>V</div><div>W</div><div>X</div><div>Y</div><div>Z</div>
                </div>
            </div>
        </div >
    );
};

export default BrowseByName;