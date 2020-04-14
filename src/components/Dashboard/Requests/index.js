import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { loadUser } from '../../../redux/actions/Auth'
import token from '../../../config/token'

import ButtonBgWhite from '../../Bases/Buttons/Bg_white'
import AdminTitle from '../../Bases/Titles/AdminTitle'

import './style.scss'

const Requets = ({ loadUser, history }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
        token()
        loadUser(history)
    }, [history, loadUser])

    return (
        <div className="wrapper_requets">
            <div className="container-fluid">
                <div className="wrapper_requets_title">
                    <AdminTitle text="Pedidos" />
                    <ButtonBgWhite text="Deletar todos" />
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    loadUser: (history) => dispatch(loadUser(history))
})

export default connect(null, mapDispatchToProps)(withRouter(Requets))