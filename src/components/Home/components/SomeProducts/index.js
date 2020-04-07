import React, { useState } from 'react';
import Product from '../../../Product';
import Title from '../../../Bases/Title';
import Paginate from '../../../Bases/Paginate'
import Warning from '../../../Bases/Warning'
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
            id: 1,
            title: 'Quadro Pendular',
            cost: '12,00',
            description: 'Descrição: Quadro amarelo com detalhes de madeira Descrição: Quadro amarelo com detalhes de madeiraDescrição: Quadro amarelo com detalhes de madeira',
            image: {
                key: 'produto-test.jpg'
            }
        },
        {
            id: 2,
            title: 'Quadro Pendular',
            cost: '12,00',
            description: 'Descrição: Quadro amarelo com detalhes de madeira Descrição: Quadro amarelo com detalhes de madeiraDescrição: Quadro amarelo com detalhes de madeira',
            image: {
                key: 'produto-test.jpg'
            }
        },
        {
            id: 3,
            title: 'Quadro Pendular',
            cost: '12,00',
            description: 'Descrição: Quadro amarelo com detalhes de madeira Descrição: Quadro amarelo com detalhes de madeiraDescrição: Quadro amarelo com detalhes de madeira',
            image: {
                key: 'produto-test.jpg'
            }
        }
    ])

    return (
        <div className="wrapper_some_products container-fluid">
            <Title text="Produtos mais Populares" />
            <div className="row">
                {ProductData.length === 0 ?
                <Warning color="greey" text="Sem produtos no momento!" />:
                ProductData.map((product) => (
                    <Product
                        data={product}
                        path={path}
                        link={link}
                    />
                ))}
            </div>
            <Paginate
                paginate= {{
                    pages: 1,
                    page: 1
                }}
            />
        </div>
    )
}

export default SomeProducts;