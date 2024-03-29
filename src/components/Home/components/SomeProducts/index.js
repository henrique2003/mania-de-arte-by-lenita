import React, { useState, useEffect } from 'react';
import api from '../../../../services/api'

import Product from '../../../Product'
import { WebTitle, Warning } from '../../../Bases'

import './style.scss';

const SomeProducts = () => {
    useEffect(() => {
        async function loadProducts() {
            const res = await api.get('/products/home')

            setProductData(res.data)
        }
        loadProducts()
    }, [])

    const [ProductData, setProductData] = useState([])

    return (
        <div className="wrapper_some_products container-fluid">
            <WebTitle text="Produtos mais Populares" />
            <div className="row">
                {ProductData.length === 0 ?
                    <Warning color="greey" text="Sem produtos no momento!" /> :
                    ProductData.map((product) => (
                        <Product data={product} />
                    ))}
            </div>
        </div>
    )
}

export default SomeProducts;