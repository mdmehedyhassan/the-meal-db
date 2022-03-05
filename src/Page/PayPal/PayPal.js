import React from 'react';
import { Link } from 'react-router-dom';

const PayPal = () => {
    return (
        <div className="container text-center">
            <h1 className="text-danger">
                Sorry This website is Clone  so we Did not give any Support Thanks.
            </h1>
            <div>
                <Link to="/" >
                    <button className="btn btn-success">Return Home</button>
                </Link>
            </div>
        </div>
    );
};

export default PayPal;