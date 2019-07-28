import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = { textDecoration: 'underline', color: "#F15B2A" };
    return (
        <nav>
            {/* <NavLink to="/" activeStyle ={activeStyle} >Home</NavLink>{" | "} */}
            <NavLink to="/" activeStyle ={activeStyle} >Login</NavLink>{" | "}
            <NavLink to="/courses" activeStyle ={activeStyle} >Issue Page</NavLink>{" | "}
            <NavLink to="/about" activeStyle ={activeStyle} >About</NavLink>{" | "}
            <NavLink to="/search" activeStyle ={activeStyle} >Search</NavLink>
        </nav>
    )
}

export default Header;