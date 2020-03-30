import React, { useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import Title from '../../components/Bases/Title'
import Questions from './components/Questions'

import './style.scss'

const Asks = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="wrapper_asks">
            <div className="container-fluid">
                <Title text="Dúvidas ?" />
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

export default Asks