import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Products from '../../utils/images/Products/produto-test.jpg'
import MercadoPago from '../../utils/icons/mercado_pago.jpg'
import './style.scss'

const ProductPage = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return (
        <div className="wrapper_product_page">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                        <img src={Products} alt="" className="img-fluid"/>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                        <h4 className="title_product_page">Produto 1</h4>
                        <p className="cost_product_page">R$: 12,00</p>
                        <p className="description_product_page">
                            <span>Descrição:</span> Feito assim e assim e assim com mais assim Feito assim e assim e assim com mais assim Feito assim e assim e assim com mais assim Feito assim e assim e assim com mais assim
                            </p>
                        <div className="icon_mercado_pago">
                            <img src={MercadoPago} alt=""/>
                        </div>
                        <Link to="" className="link_pay">Comprar</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage