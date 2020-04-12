import React, { useEffect, useState } from 'react'
import api from '../../services/api'

import Title from '../Bases/Title'
import Product from '../Product'
import Paginate from '../Bases/Paginate'
import Warning from '../Bases/Warning'

import './style.scss'

const Crochet = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
        loadCrochet()
    }, [])

    async function loadCrochet() {
        const res = await api.get('/products/page/crochet')

        setProductData(res.data.docs)
        setPaginate({
            path: '/crochet',
            pages: res.data.pages
        })
    }

    const [ProductData, setProductData] = useState([])

    const [panigate, setPaginate] = useState({
        pages: 1,
        page: 0
    })

    return (
        <div className="wrapper_crochet">
            <Title text="Cochet" />
            <div className="container-fluid">
                <div className="row">
                    {ProductData.length === 0 ?
                        <Warning color="greey" text="Sem produtos no momento!" /> :
                        ProductData.map((product) => (
                            <Product data={product}/>
                        ))
                    }
                </div>
                <Paginate paginate={panigate}/>
            </div>
        </div>
    )
}

export default Crochet