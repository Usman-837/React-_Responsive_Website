import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
    return (
        <div className="error">
            <p>404 Error Page</p>
            <p>Sorry, This Page doesn't exist</p>
            <NavLink to="/">Go Back</NavLink>
        </div>
    );
};

export default Error;
