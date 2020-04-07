import React, { useState, useEffect } from 'react';
import api from '../../../../services/api'

import Product from '../../../Product';
import Title from '../../../Bases/Title';
import Paginate from '../../../Bases/Paginate'
import Warning from '../../../Bases/Warning'

import './style.scss';

const SomeProducts = () => {
    useEffect(() => {
        loadProducts()
    }, [])

    async function loadProducts() {
        const res = await api.get('/products/home')

        setProductData(res.data)
    }

    const [ProductData, setProductData] = useState([])

    return (
        <div className="wrapper_some_products container-fluid">
            <Title text="Produtos mais Populares" />
            <div className="row">
                {ProductData.length === 0 ?
                <Warning color="greey" text="Sem produtos no momento!" />:
                ProductData.map((product) => (
                    <Product data={product}/>
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