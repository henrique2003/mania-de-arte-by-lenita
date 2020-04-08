import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import api from '../../../services/api'
import token from '../../../config/token'

import BoxInfo from './components/BoxInfo'

import './style.scss'

const Index = ({ history }) => {
    useEffect(() => {
        window.scrollTo(0,0)
        loadUser()
        loadRegistered()
    }, [])

    async function loadRegistered() {
        const res = await api.get('/all/products', token)
        setRegistered(res.data)
    }

    async function loadUser() {
        if(!await api.get('/admin/load', token)) return history.push('/')
    }

    const [Registered, setRegistered] = useState(0)

    return (
        <div className="wrapper_index">
            <div className="container-fluid">
                <div className="wrapper_welcome">
                    <h3>Olá, {localStorage.getItem('name')}</h3>
                    <p>Eu estava a sua espera, o que vamos fazer hoje?</p>
                </div>
                <div className="row">
                    <BoxInfo 
                        icon="far fa-plus-square"
                        text="Cadastrados"
                        link="produtos"
                        length={Registered}
                    />
                    <BoxInfo 
                        icon="fas fa-cart-plus"
                        text="Pedidos"
                        link="pedidos"
                        length="5"
                    />
                    <BoxInfo 
                        icon="fas fa-user-plus"
                        text="Admins"
                        link="all"
                        length="4"
                    />
                </div>
            </div>
        </div>
    )
}

export default withRouter(Index)