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
            pages: res.data.pages,
            page: res.data.page
        })
    }

    const [paginate, setPaginate] = useState({
        pages: 1,
        page: 1
    })

    const [path] = useState("/produtos/mais/")

    const [link] = useState([
        {
            text: 'comprar',
            path: '/produtos/comprar/',
            class: 'link_pay'
        }
    ])

    const [ProductData, setProductData] = useState([])

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
                    paginate={paginate}
                />
            </div>
        </div>
    )
}

export default Madeiras