import React from 'react'
import { Link } from 'react-router-dom'
import titleize from '../../utils/scripts/titleize'
import link from './link.json'
import './style.scss'

const Product = ({ data }) => {
    const { _id , title, cost, description, image } = data
    const productImg = require(`../../utils/images/Products/${image.key}`)

    return (
        <div key={_id} className="col-12 col-sm-12 col-md-6 col-lg-4 wrapper_product">
            <Link to={`/produtos/mais/${_id}`}>
                <div className="wrapper_product_card">
                    <img src={productImg} alt="" className="img-fluid" />
                    <div className="text-left p-lg-3">
                        <h4 className="wrapper_product_card_title">{title}</h4>
                        <div className="mt-3">
                            <p className="wrapper_product_card_cost">R$ - {cost.toFixed(2).replace(".", ",")}</p>
                            <p className="wrapper_product_card_cost_description">{description}</p>
                        </div>
                        {link.map((link, index) => (
                            <Link key={index} className={link.class} to={`${link.path}${_id}`}>{titleize(link.text)}</Link>
                        ))}
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Product