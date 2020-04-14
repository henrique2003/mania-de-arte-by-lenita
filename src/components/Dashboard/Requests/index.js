import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { loadUser } from '../../../redux/actions/Auth'
import token from '../../../config/token'

import {
    ButtonBgWhite,
    AdminTitle,
    CtnDashboard,
    CtnHeadDashboard,
    CtnHeadBtn
} from '../../Bases'

import './style.scss'

const Requets = ({ loadUser, history }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
        token()
        loadUser(history)
    }, [history, loadUser])

    return (
        <CtnDashboard>
            <CtnHeadDashboard>
                <CtnHeadBtn>
                    <AdminTitle text="Pedidos" />
                    <div className="pb-2 pb-sm-2 pb-md-0">
                        <ButtonBgWhite text="Deletar todos" />
                    </div>
                </CtnHeadBtn>
            </CtnHeadDashboard>
        </CtnDashboard>
    )
}

const mapDispatchToProps = dispatch => ({
    loadUser: (history) => dispatch(loadUser(history))
})

export default connect(null, mapDispatchToProps)(withRouter(Requets))