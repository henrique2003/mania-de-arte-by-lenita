import React, { useEffect } from 'react'

import Title from '../Bases/Title'
import Product from '../Product'

import './style.scss'

const Madeiras = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return (
        <div className="wrapper_woods">
            <Title text="Madeiras" />
            <div className="container-fluid">
                <div className="row">
                    <Product
                        id={4}
                        title="Quadro Pendular"
                        cost="12,00"
                        description="Descrição: Quadro amarelo com detalhes de madeira
                    Descrição: Quadro amarelo com detalhes de madeira
                    Descrição: Quadro amarelo com detalhes de madeira"
                    />
                    <Product
                        id={5}
                        title="Quadro Pendular"
                        cost="12,00"
                        description="Descrição: Quadro amarelo com detalhes de madeira
                    Descrição: Quadro amarelo com detalhes de madeira
                    Descrição: Quadro amarelo com detalhes de madeira"
                    />
                    <Product
                        id={6}
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

export default Madeiras