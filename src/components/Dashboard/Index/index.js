import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { loadUser } from '../../../redux/actions/Auth'
import api from '../../../services/api'
import token from '../../../config/token'

import BoxInfo from './components/BoxInfo'

import './style.scss'

const Index = ({ user, history, loadUser }) => {
    const [Regitered, setRegitered] = useState(0)
    const [Purchased, setPurchased] = useState(0)
    const [Admins, setAdmins] = useState(0)

    useEffect(() => {
        window.scrollTo(0, 0)
        token()
        loadUser(history)

        //Load panel dependeces
        async function loadRegistered() {
            let res = await api.get('/all/products')
            setRegitered(res.data)
        }
        loadRegistered()

        async function loadPurchased() {
            let res = await api.get('/purchased/all')
            setPurchased(res.data)
        }
        loadPurchased()

        async function loadAdmins() {
            let res = await api.get('/all/admin/')
            setAdmins(res.data)
        }
        loadAdmins()
    }, [history, loadUser])

    return (
        <>
            <div className="wrapper_index">
                <div className="container-fluid">
                    <div className="wrapper_welcome">
                        <h3>Olá, {user.name}!</h3>
                        <p>Eu estava a sua espera, o que vamos fazer hoje?</p>
                    </div>
                    <div className="row">
                        <BoxInfo
                            icon="far fa-plus-square"
                            text="Cadastrados"
                            link="produtos"
                            length={Regitered}
                        />
                        <BoxInfo
                            icon="fas fa-cart-plus"
                            text="Pedidos"
                            link="pedidos"
                            length={Purchased}
                        />
                        <BoxInfo
                            icon="fas fa-user-plus"
                            text="Admins"
                            link="all"
                            length={Admins}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

const mapDispatchToProps = dispatch => ({
    loadUser: (history) => dispatch(loadUser(history))
})

const mapStateToProps = state => ({
    user: state.user
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index))