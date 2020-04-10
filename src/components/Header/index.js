import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import api from '../../services/api'
import token from '../../config/token'
import HeaderLink from './HeaderLink'

import logo from '../../utils/images/logo.png'

import './style.scss';

const Header = () => {
    // useEffect(() => (), [])

    const [User, setUser] = useState({})

    const [navShow, setNavShow] = useState({
        show: false
    })
    const { show } = navShow

    const closeNavbar = () => setNavShow({ show: !show })

    function validLinksWeb() {
        switch (User.role) {
            case "Primary":
                return (
                    <>
                        <HeaderLink to="/admin" title="Dashboard" />
                        <HeaderLink to="/admin/produtos" title="Produtos" />
                        <HeaderLink to="/admin/pedidos" title="Pedidos" />
                        <HeaderLink to="/admin/admins" title="Admins" />
                        <HeaderLink to="/logout" title="Logout" />
                    </>
                )
            case "Secondary":
                return (
                    <>
                        <HeaderLink to="/admin" title="Dashboard" />
                        <HeaderLink to="/admin/pedidos" title="Pedidos" />
                        <HeaderLink to="/logout" title="Logout" />
                    </>
                )
            default:
                return (
                    <>
                        <HeaderLink to="/" title="Home" />
                        <HeaderLink to="/madeiras" title="Madeiras" />
                        <HeaderLink to="/croche" title="Croche" />
                        <HeaderLink to="/duvidas" title="Dúvidas" />
                    </>
                )
        }
    }

    function validLinksMobile() {
        switch (User.role) {
            case "Primary":
                return (
                    <>
                        <span onClick={closeNavbar}><HeaderLink to="/admin" title="Dashboard" /></span>
                        <span onClick={closeNavbar}><HeaderLink to="/admin/produtos" title="Produtos" /></span>
                        <span onClick={closeNavbar}><HeaderLink to="/admin/pedidos" title="Pedidos" /></span>
                        <span onClick={closeNavbar}><HeaderLink to="/admin/admins" title="Admins" /></span>
                        <span onClick={closeNavbar}><HeaderLink to="/logout" title="Logout" /></span>
                    </>
                )
            case "Secondary":
                return (
                    <>
                        <span onClick={closeNavbar}><HeaderLink to="/admin" title="Dashboard" /></span>
                        <span onClick={closeNavbar}><HeaderLink to="/admin/pedidos" title="Pedidos" /></span>
                        <span onClick={closeNavbar}><HeaderLink to="/logout" title="Logout" /></span>
                    </>
                )
            default:
                return (
                    <>
                        <span onClick={closeNavbar}><HeaderLink to="/" title="Home" /></span>
                        <span onClick={closeNavbar}><HeaderLink to="/madeiras" title="Madeiras" /></span>
                        <span onClick={closeNavbar}><HeaderLink to="/croche" title="Croche" /></span>
                        <span onClick={closeNavbar}><HeaderLink to="/duvidas" title="Dúvidas" /></span>
                    </>
                )
        }
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
                            {validLinksWeb()}
                        </ul>
                    </div>
                </div>
            </nav>
            <nav className={`wrapper_header_mobile ${show ? "open" : ""}`}>
                <div className="icon_menu_mobile" onClick={closeNavbar}>
                    <i className="fas fa-times"></i>
                </div>
                <ul className="wrapper_header_ul_mobile">
                    {validLinksMobile()}
                </ul>
            </nav>
        </>
    )
}

export default Header
