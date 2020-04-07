import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import HeaderLink from './HeaderLink'
import logo from '../../utils/images/logo.png'
import './style.scss';

const Header = () => {
    const [navShow, setNavShow] = useState({
        show: false
    })
    const { show } = navShow

    const closeNavbar = () => {
        setNavShow({ show: !show })
    }

    return (
        <>
            <nav className="wrapper_header">
                <div className="container-fluid">
                    <div className="row">
                        <NavLink to="/" className="wrapper_logo">
                            <img src={logo} className="img-fluid" alt="" />
                        </NavLink>
                        <div className="icon-menu" onClick={closeNavbar}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <ul className="wrapper_header_ul">
                            <HeaderLink to="/" title="Home" />
                            <HeaderLink to="/madeiras" title="Madeiras" />
                            <HeaderLink to="/croche" title="Croche" />
                            <HeaderLink to="/duvidas" title="Dúvidas" />
                        </ul>
                    </div>
                </div>
            </nav>
            <nav className={`wrapper_header_mobile ${show ? "open" : ""}`}>
                <div className="icon_menu_mobile" onClick={closeNavbar}>
                    <i className="fas fa-times"></i>
                </div>
                <ul className="wrapper_header_ul_mobile">
                    <span onClick={closeNavbar}><HeaderLink to="/" title="Home" /></span>
                    <span onClick={closeNavbar}><HeaderLink to="/madeiras" title="Madeiras" /></span>
                    <span onClick={closeNavbar}><HeaderLink to="/croche" title="Croche" /></span>
                    <span onClick={closeNavbar}><HeaderLink to="/duvidas" title="Dúvidas" /></span>
                </ul>
            </nav>
        </>
    )
}

export default Header
