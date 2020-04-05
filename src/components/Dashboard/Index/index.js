import React, { useEffect } from 'react'
import BoxInfo from './components/BoxInfo'
import './style.scss'

const Index = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    })

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
                        length="20"
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