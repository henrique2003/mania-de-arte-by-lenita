import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import BoxInfo from './components/BoxInfo'

import './style.scss'

const Index = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
        // loadUser()
        // loadRegistered()
        // loadPurchased()
        // loadAdmins()
    }, [])

    return (
        <>
            {/* <div className="wrapper_index">
                <div className="container-fluid">
                    <div className="wrapper_welcome">
                        <h3>Olá, {user.name}</h3>
                        <p>Eu estava a sua espera, o que vamos fazer hoje?</p>
                    </div>
                    <div className="row">
                        <BoxInfo
                            icon="far fa-plus-square"
                            text="Cadastrados"
                            link="produtos"
                            length={Registered}
                            role={user.role === "Primary" && true}
                        />
                        <BoxInfo
                            icon="fas fa-cart-plus"
                            text="Pedidos"
                            link="pedidos"
                            length={Purchased}
                            role={user.role === "Primary" && true}
                        />
                        <BoxInfo
                            icon="fas fa-user-plus"
                            text="Admins"
                            link="all"
                            length={Admins}
                            role={user.role === "Primary" && true}
                        />
                    </div>
                </div>
            </div> */}
        </>
    )
}

const mapStateToProps = state => ({
    products: state.products.products
})

export default connect(mapStateToProps)(Index)