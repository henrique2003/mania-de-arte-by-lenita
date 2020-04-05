import React from 'react';
import Product from '../../../Product';
import Title from '../../../Bases/Title';
import './style.scss';

const SomeProducts = () => {
    return (
        <div className="wrapper_some_products container-fluid">
            <Title text="Produtos mais Populares" />
            <div className="row">
                <Product
                    id={1}
                    title="Quadro Pendular"
                    cost="12,00"
                    description="Descrição: Quadro amarelo com detalhes de madeira
                    Descrição: Quadro amarelo com detalhes de madeira
                    Descrição: Quadro amarelo com detalhes de madeira"
                    path={"/produtos/mais/"}
                    link={[
                        {
                            text: 'comprar',
                            path: '/produtos/comprar/',
                            class: 'link_pay'
                        }
                    ]}
                />
                <Product
                    id={2}
                    title="Quadro Pendular"
                    cost="12,00"
                    description="Descrição: Quadro amarelo com detalhes de madeira
                    Descrição: Quadro amarelo com detalhes de madeira
                    Descrição: Quadro amarelo com detalhes de madeira"
                    path={"/produtos/mais/"}
                    link={[
                        {
                            text: 'comprar',
                            path: '/produtos/comprar/',
                            class: 'link_pay'
                        }
                    ]}
                />
                <Product
                    id={3}
                    title="Quadro Pendular"
                    cost="12,00"
                    description="Descrição: Quadro amarelo com detalhes de madeira
                    Descrição: Quadro amarelo com detalhes de madeira
                    Descrição: Quadro amarelo com detalhes de madeira"
                    path={"/produtos/mais/"}
                    link={[
                        {
                            text: 'comprar',
                            path: '/produtos/comprar/',
                            class: 'link_pay'
                        }
                    ]}
                />
            </div>
        </div>
    )
}

export default SomeProducts;