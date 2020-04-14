import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { logout } from '../../redux/actions/Auth'

import HeaderLink from './HeaderLink'
import { Logo } from '../../utils'

import './style.scss';

const Header = ({ history, user, logout }) => {
    const [navShow, setNavShow] = useState({
        show: false
    })
    const { show } = navShow

    const closeNavbar = () => setNavShow({ show: !show })

    function validLinksWeb() {
        switch (user.role) {
            case "Primary":
                return (
                    <>
                        <HeaderLink to="/admin" title="Dashboard" />
                        <HeaderLink to="/admin/produtos" title="Produtos" />
                        <HeaderLink to="/admin/pedidos" title="Pedidos" />
                        <HeaderLink to="/admin/admins" title="Admins" />
                        <li className="navbarLink" onClick={() => logout(history)}>Logout</li>
                    </>
                )
            case "Secondary":
                return (
                    <>
                        <HeaderLink to="/admin" title="Dashboard" />
                        <HeaderLink to="/admin/pedidos" title="Pedidos" />
                        <li className="navbarLink" onClick={() => logout(history)}>Logout</li>
                    </>
                )
            default:
                return (
                    <>
                        <HeaderLink to="/" title="Home" />
                        <HeaderLink to="/madeiras" title="Madeiras" />
                        <HeaderLink to="/crochet" title="Croche" />
                        <HeaderLink to="/duvidas" title="Dúvidas" />
                    </>
                )
        }
    }

    function validLinksMobile() {
        switch (user.role) {
            case "Primary":
                return (
                    <>
                        <span onClick={closeNavbar}><HeaderLink to="/admin" title="Dashboard" /></span>
                        <span onClick={closeNavbar}><HeaderLink to="/admin/produtos" title="Produtos" /></span>
                        <span onClick={closeNavbar}><HeaderLink to="/admin/pedidos" title="Pedidos" /></span>
                        <span onClick={closeNavbar}><HeaderLink to="/admin/admins" title="Admins" /></span>
                        <span onClick={closeNavbar}><li className="navbarLink" onClick={() => logout(history)}>Logout</li></span>
                    </>
                )
            case "Secondary":
                return (
                    <>
                        <span onClick={closeNavbar}><HeaderLink to="/admin" title="Dashboard" /></span>
                        <span onClick={closeNavbar}><HeaderLink to="/admin/pedidos" title="Pedidos" /></span>
                        <span onClick={closeNavbar}><li className="navbarLink" onClick={() => logout(history)}>Logout</li></span>
                    </>
                )
            default:
                return (
                    <>
                        <span onClick={closeNavbar}><HeaderLink to="/" title="Home" /></span>
                        <span onClick={closeNavbar}><HeaderLink to="/madeiras" title="Madeiras" /></span>
                        <span onClick={closeNavbar}><HeaderLink to="/crochet" title="Croche" /></span>
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
                            <img src={Logo} className="img-fluid" alt="" />
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

const mapDispatchToProps = dispatch => ({
    logout: (history) => dispatch(logout(history))
})

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header))
