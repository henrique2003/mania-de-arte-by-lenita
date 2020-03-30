import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const HeaderLink = ({ title, to }) => {
    return (
        <li className="navbarLink">
            <NavLink to={to}>{title}</NavLink>
        </li>
    )
}

export default HeaderLink;