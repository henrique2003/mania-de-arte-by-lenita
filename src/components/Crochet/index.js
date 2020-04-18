import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { load } from '../../redux/actions/Auth'
import token from '../../config/token'
import api from '../../services/api'

import Product from '../Product'
import { Warning, Paginate, WebTitle } from '../Bases'

import './style.scss'

const Crochet = ({ load, user }) => {
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

    if(user) return <Redirect to="/admin" />
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

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(Crochet)