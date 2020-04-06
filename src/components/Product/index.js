import React from 'react'
import { Link } from 'react-router-dom'
import ProductImage from '../../utils/images/Products/produto-test.jpg'
import titleize from '../../utils/scripts/titleize'
import './style.scss'

const Product = ({ id , title, cost, description, path, link }) => {
    return (
        <div key={id} className="col-12 col-sm-12 col-md-6 col-lg-4 wrapper_product">
            <Link to={`${path}${id}`}>
                <div className="wrapper_product_card">
                    <img src={ProductImage} alt="" className="img-fluid" />
                    <div className="text-left p-lg-3">
                        <h4 className="wrapper_product_card_title">{title}</h4>
                        <div className="mt-3">
                            <p className="wrapper_product_card_cost">R$ - {cost}</p>
                            <p className="wrapper_product_card_cost_description">{description}</p>
                        </div>
                        {link.map((link, index) => (
                            <Link key={index} className={link.class} to={`${link.path}${id}`}>{titleize(link.text)}</Link>
                        ))}
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Product