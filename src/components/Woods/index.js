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

const Madeiras = ({ load }) => {
    useEffect(() => {
        token()
        window.scrollTo(0, 0)
        load()

        async function loadWoods() {
            const res = await api.get('/products/page/madeira')

            setProductData(res.data.docs)
            setPaginate({
                path: '/madeiras',
                pages: res.data.pages
            })
        }
        loadWoods()
    }, [load])

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
                            <Product data={product} />
                        ))
                    }
                </div>
                <Paginate paginate={paginate} />
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    load: () => dispatch(load())
})

export default connect(null, mapDispatchToProps)(Madeiras)