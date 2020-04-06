import React, { useEffect, useState } from 'react'

import Title from '../Bases/Title'
import Product from '../Product'
import Paginate from '../Bases/Paginate'
import Warning from '../Bases/Warning'

import './style.scss'

const Madeiras = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [path] = useState("/produtos/mais/")

    const [link] = useState([
        {
            text: 'comprar',
            path: '/produtos/comprar/',
            class: 'link_pay'
        }
    ])

    const [ProductData] = useState([
        {
            'id': 1,
            'title': 'Quadro Pendular',
            'cost': '12,00',
            'description': 'Descrição: Quadro amarelo com detalhes de madeira Descrição: Quadro amarelo com detalhes de madeiraDescrição: Quadro amarelo com detalhes de madeira'
        },
        {
            'id': 2,
            'title': 'Quadro Pendular',
            'cost': '12,00',
            'description': 'Descrição: Quadro amarelo com detalhes de madeira Descrição: Quadro amarelo com detalhes de madeiraDescrição: Quadro amarelo com detalhes de madeira'
        },
        {
            'id': 3,
            'title': 'Quadro Pendular',
            'cost': '12,00',
            'description': 'Descrição: Quadro amarelo com detalhes de madeira Descrição: Quadro amarelo com detalhes de madeiraDescrição: Quadro amarelo com detalhes de madeira'
        }
    ])

    return (
        <div className="wrapper_woods">
            <Title text="Madeiras" />
            <div className="container-fluid">
                <div className="row">
                    {ProductData.length === 0 ?
                        <Warning color="greey" text="Sem produtos no momento!" /> :
                        ProductData.map((product) => (
                            <Product
                                data={product}
                                path={path}
                                link={link}
                            />
                        ))
                    }
                </div>
                <Paginate
                    paginate={{
                        pages: 1,
                        page: 1
                    }}
                />
            </div>
        </div>
    )
}

export default Madeiras