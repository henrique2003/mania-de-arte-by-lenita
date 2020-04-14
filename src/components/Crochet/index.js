import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { load } from '../../redux/actions/Auth'
import token from '../../config/token'
import api from '../../services/api'

import WebTitle from '../Bases/Titles/WebTitle'
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
        setPaginate({ pages: res.data.pages })
    }

    const [ProductData, setProductData] = useState([])

    const [panigate, setPaginate] = useState({
        path: '/crochet',
        pages: 1
    })

    return (
        <div className="wrapper_crochet">
            <WebTitle text="Cochet" />
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