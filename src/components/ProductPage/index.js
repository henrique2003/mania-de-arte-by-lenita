import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { load } from '../../redux/actions/Auth'
import token from '../../config/token'
import api from '../../services/api'

import { MercadoPago } from '../../utils'
import { Warning } from '../Bases'

import './style.scss'

const ProductPage = ({ match, load }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
        token()
        load()

        async function loadProduct() {
            const res = await api.get(`/products/${match.params.id}`)

            setProduct(res.data)

            const image = require(`../../utils/images/Products/${res.data.image.key}`)
            setImage({ image })
        }
        
        loadProduct()
    }, [load, match.params.id])


    const [product, setProduct] = useState({})
    const [Image, setImage] = useState({ image: '' })

    return (
        <div className="wrapper_product_page">
            <div className="container-fluid">
                <div className="row">
                    {!product._id ?
                        <Warning color="greey" text="Não foi possivel achar o produto no momento" /> :
                        <>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                                <img src={Image.image} alt="" className="img-fluid" />
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                                <h4 className="title_product_page">{product.title}</h4>
                                <p className="cost_product_page">R$: {product.cost.toFixed(2).replace(".", ",")}</p>
                                <p className="description_product_page">
                                    <span>Descrição:</span> {product.description}
                                </p>
                                <div className="icon_mercado_pago">
                                    <img src={MercadoPago} alt="" />
                                </div>
                                <Link to={`/produtos/comprar/${product._id}`} className="link_pay">Comprar</Link>
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    load: () => dispatch(load())
})

export default connect(null, mapDispatchToProps)(ProductPage)