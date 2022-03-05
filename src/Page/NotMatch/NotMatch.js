import React from 'react';
import { Link } from 'react-router-dom';

const NotMatch = () => {
    return (
        <div className="container text-center">
            <h1 className="text-danger">404 Not Found</h1>
            <Link to="/" >
                <button className="btn btn-success">Return Home</button>
            </Link>
        </div>
    );
};

export default NotMatch;