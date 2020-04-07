import React, { useEffect, useState } from 'react'
import api from '../../../services/api'

import BoxInfo from './components/BoxInfo'

import './style.scss'

const Index = () => {
    useEffect(() => {
        window.scrollTo(0,0)
        loadRegistered()
    }, [])

    async function loadRegistered() {
        const res = await api.get('/all/products', {
            headers: {
                Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNjQwNjU0YWE2ZTZlMjE4MGVmOWFhZCIsImlhdCI6MTU4NjIxNzMzNywiZXhwIjoxNTg2MzAzNzM3fQ.FekyUcp-Mm31kddOjwwtREwDEPuA_F5bqcCxFt74hCQ'
            }
        })

        setRegistered(res.data)
    }

    const [Registered, setRegistered] = useState(0)

    return (
        <div className="wrapper_index">
            <div className="container-fluid">
                <div className="wrapper_welcome">
                    <h3>Olá, Lenita!</h3>
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

export default Index