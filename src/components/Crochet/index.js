import React, { useEffect } from 'react'

import Title from '../Bases/Title'
import Product from '../Product'

import './style.scss'

const Crochet = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="wrapper_crochet">
            <Title text="Cochê" />
            <div className="container-fluid">
                <div className="row">
                    <Product
                        id={7}
                        title="Quadro Pendular"
                        cost="12,00"
                        description="Descrição: Quadro amarelo com detalhes de madeira
                    Descrição: Quadro amarelo com detalhes de madeira
                    Descrição: Quadro amarelo com detalhes de madeira"
                    />
                    <Product
                        id={8}
                        title="Quadro Pendular"
                        cost="12,00"
                        description="Descrição: Quadro amarelo com detalhes de madeira
                    Descrição: Quadro amarelo com detalhes de madeira
                    Descrição: Quadro amarelo com detalhes de madeira"
                    />
                    <Product
                        id={9}
                        title="Quadro Pendular"
                        cost="12,00"
                        description="Descrição: Quadro amarelo com detalhes de madeira
                    Descrição: Quadro amarelo com detalhes de madeira
                    Descrição: Quadro amarelo com detalhes de madeira"
                    />
                </div>
            </div>
        </div>
    )
}

export default Crochet