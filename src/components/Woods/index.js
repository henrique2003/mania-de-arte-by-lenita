import React, { useEffect, useState } from 'react'
import api from '../../services/api'

import Title from '../Bases/Title'
import Product from '../Product'
import Paginate from '../Bases/Paginate'
import Warning from '../Bases/Warning'

import './style.scss'

const Madeiras = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
        loadWoods()
    }, [])

    async function loadWoods() {
        const res = await api.get('/products/page/madeira')

        setProductData(res.data.docs)
        setPaginate({
            path: '/madeiras',
            pages: res.data.pages
        })
    }

    const [paginate, setPaginate] = useState({
        pages: 1,
        page: 1
    })

    const [ProductData, setProductData] = useState([])

    return (
        <div className="wrapper_woods">
            <Title text="Madeiras" />
            <div className="container-fluid">
                <div className="row">
                    {ProductData.length === 0 ?
                        <Warning color="greey" text="Sem produtos no momento!" /> :
                        ProductData.map((product) => (
                            <Product data={product}/>
                        ))
                    }
                </div>
                <Paginate paginate={paginate}/>
            </div>
        </div>
    )
}

export default Madeiras