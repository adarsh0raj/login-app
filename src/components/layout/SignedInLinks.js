import React from "react";
import { NavLink } from "react-router-dom";
import { auth, logout } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to="/">Status</NavLink></li>
            <li><NavLink to="/" onClick={logout}>Log Out</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating pink lighten-1">NN</NavLink></li>
        </ul>
    );
};

export default SignedInLinks;