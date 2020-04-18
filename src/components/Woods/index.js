import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { load } from '../../redux/actions/Auth'
import token from '../../config/token'
import api from '../../services/api'

import Product from '../Product'
import { Warning, Paginate, WebTitle } from '../Bases'

import './style.scss'

const Madeiras = ({ load, user }) => {
    useEffect(() => {
        token()
        window.scrollTo(0, 0)
        load()

        async function loadWoods() {
            const res = await api.get('/products/page/madeira')

            setProductData(res.data.docs)
            setPaginate({ pages: res.data.pages })
        }
        loadWoods()
    }, [load])

    const [paginate, setPaginate] = useState({ 
        path: '/madeiras',
        pages: 1
    })

    const [ProductData, setProductData] = useState([])

    if(user) return <Redirect to="/admin" />
    return (
        <div className="wrapper_woods">
            <WebTitle text="Madeiras" />
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

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(Madeiras)