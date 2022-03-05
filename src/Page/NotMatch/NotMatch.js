import React from 'react';
import { Link } from 'react-router-dom';

const NotMatch = () => {
    return (
        <div>
            <h1>404 Not Found</h1>
            <Link to="" >
                <button className="btn btn-success">Return Home</button>
            </Link>
        </div>
    );
};

export default NotMatch;