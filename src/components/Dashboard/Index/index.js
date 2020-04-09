import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import api from '../../../services/api'
import token from '../../../config/token'

import BoxInfo from './components/BoxInfo'

import './style.scss'

const Index = ({ history }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
        loadUser()
        loadRegistered()
        loadPurchased()
        loadAdmins()
    }, [])

    async function loadUser() {
        let res = await api.get('/admin/load', token)

        if (!res) return history.push('/')
        setUser(res.data)
    }

    async function loadRegistered() {
        let res = await api.get('/all/products', token)
        setRegistered(res.data)
    }

    async function loadPurchased() {
        let res = await api.get('/purchased/all', token)
        setPurchased(res.data)
    }

    async function loadAdmins() {
        let res = await api.get('/all/admin/', token)
        setAdmins(res.data)
    }

    const [User, setUser] = useState({})
    const [Registered, setRegistered] = useState(0)
    const [Purchased, setPurchased] = useState(0)
    const [Admins, setAdmins] = useState(0)

    return (
        <div className="wrapper_index">
            <div className="container-fluid">
                <div className="wrapper_welcome">
                    <h3>Olá, {User.name}</h3>
                    <p>Eu estava a sua espera, o que vamos fazer hoje?</p>
                </div>
                <div className="row">
                    <BoxInfo
                        icon="far fa-plus-square"
                        text="Cadastrados"
                        link="produtos"
                        length={Registered}
                        role={User.role}
                    />
                    <BoxInfo
                        icon="fas fa-cart-plus"
                        text="Pedidos"
                        link="pedidos"
                        length={Purchased}
                        role={User.role}
                    />
                    <BoxInfo
                        icon="fas fa-user-plus"
                        text="Admins"
                        link="all"
                        length={Admins}
                        role={User.role}
                    />
                </div>
            </div>
        </div>
    )
}

export default withRouter(Index)