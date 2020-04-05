import React, { useState } from 'react';
import Product from '../../../Product';
import Title from '../../../Bases/Title';
import './style.scss';

const SomeProducts = () => {
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
            'description': 'Descrição: Quadro amarelo com detalhes de madeira Descrição: Quadro amarelo com detalhes de madeiraDescrição: Quadro amarelo com detalhes de madeira',
            'path': path,
            'link': link
        },
        {
            'id': 2,
            'title': 'Quadro Pendular',
            'cost': '12,00',
            'description': 'Descrição: Quadro amarelo com detalhes de madeira Descrição: Quadro amarelo com detalhes de madeiraDescrição: Quadro amarelo com detalhes de madeira',
            'path': path,
            'link': link
        },
        {
            'id': 3,
            'title': 'Quadro Pendular',
            'cost': '12,00',
            'description': 'Descrição: Quadro amarelo com detalhes de madeira Descrição: Quadro amarelo com detalhes de madeiraDescrição: Quadro amarelo com detalhes de madeira',
            'path': path,
            'link': link
        }
    ])

    return (
        <div className="wrapper_some_products container-fluid">
            <Title text="Produtos mais Populares" />
            <div className="row">
                {ProductData.map((product) => (
                    <Product
                        id={product.id}
                        title={product.title}
                        cost={product.cost}
                        description={product.description}
                        path={product.path}
                        link={product.link}
                    />
                ))}
            </div>
        </div>
    )
}

export default SomeProducts;