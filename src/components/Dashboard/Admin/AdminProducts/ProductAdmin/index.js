import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

const ProductAdmin = ({ data }) => {
    const { id, title, cost, description, image } = data
    const productImg = require(`../../../../../utils/images/Products/${image}`)

    return (
        <div key={id} className="col-12 col-sm-12 col-md-6 col-lg-4 wrapper_product_admin">
            <div className="wrapper_product_card">
                <img src={productImg}  alt="" className="img-fluid" />
                <div className="text-left p-lg-3">
                    <h4 className="wrapper_product_card_title">{title}</h4>
                    <div className="mt-3">
                        <p className="wrapper_product_card_cost">R$ - {cost}</p>
                        <p className="wrapper_product_card_cost_description">{description}</p>
                    </div>
                    <Link className="btn_edit" to={`/admin/produto/editar/${id}`}>Editar</Link>
                    <button className="btn_delete" type="button">Apagar</button>
                </div>
            </div>
        </div>
    )
}

export default ProductAdmin