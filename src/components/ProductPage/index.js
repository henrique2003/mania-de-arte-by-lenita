import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'

import Products from '../../utils/images/Products/produto-test.jpg'
import MercadoPago from '../../utils/icons/mercado_pago.jpg'
import Warning from '../Bases/Warning'

import './style.scss'

const ProductPage = ({ match }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
        loadProduct()
    }, [])

    async function loadProduct() {
        const res = await api.get(`/products/${match.params.id}`)

        setProduct(res.data)
    }

    const [product, setProduct] = useState({})

    return (
        <div className="wrapper_product_page">
            <div className="container-fluid">
                <div className="row">
                    {!product._id ?
                        <Warning color="greey" text="Não foi possivel achar o produto no momento" /> :
                        <>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                                <img src={Products} alt="" className="img-fluid" />
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                                <h4 className="title_product_page">{product.title}</h4>
                                <p className="cost_product_page">R$: {product.cost.toFixed(2).replace(".", ",")}</p>
                                <p className="description_product_page">
                                    <span>Descrição:</span> {product.description}
                            </p>
                                <div className="icon_mercado_pago">
                                    <img src={MercadoPago} alt=""/>
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

export default ProductPage