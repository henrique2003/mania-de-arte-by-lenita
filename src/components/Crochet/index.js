import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { load } from '../../redux/actions/Auth'
import token from '../../config/token'
import api from '../../services/api'

import Title from '../Bases/Title'
import Product from '../Product'
import Paginate from '../Bases/Paginate'
import Warning from '../Bases/Warning'

import './style.scss'

const Crochet = ({ load }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
        token()
        load()
        loadCrochet()
    }, [load])

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

const mapDispatchToProps = dispatch => ({
    load: () => dispatch(load())
})

export default connect(null, mapDispatchToProps)(Crochet)