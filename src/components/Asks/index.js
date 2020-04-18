import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { load } from '../../redux/actions/Auth'
import token from '../../config/token'

import { WebTitle } from '../Bases'
import Questions from './Questions'

import './style.scss'

const Asks = ({ load, user }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
        token()
        load()
    }, [load])

    if(user) return <Redirect to="/admin" />
    return (
        <div className="wrapper_asks">
            <div className="container-fluid">
                <WebTitle text="Dúvidas ?" />
                <div className="row">
                    <Questions
                        title="Informações de pagamento"
                        subtitle="1 - Como eu posso pagar?"
                        paragrath="Faça assim e assim"
                    />
                    <Questions
                        title="Informações de Compra"
                        subtitle="2 - Como eu posso pagar?"
                        paragrath="Faça assim e assim"
                    />
                    <Questions
                        title="Informações de Entrega"
                        subtitle="3 - Como eu posso pagar?"
                        paragrath="Faça assim e assim"
                    />
                    <Questions
                        title="Informações de Chegada"
                        subtitle="4 - Como eu posso pagar?"
                        paragrath="Faça assim e assim"
                    />
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    load: () => dispatch(load())
})

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(Asks)