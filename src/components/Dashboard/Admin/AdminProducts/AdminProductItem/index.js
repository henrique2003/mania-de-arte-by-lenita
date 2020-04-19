import React from 'react'
import { Link } from 'react-router-dom'

import './style.scss'

const AdminProductItem = ({ data }) => {
    const { _id, title, cost, description, image } = data
    const productImg = require(`../../../../../utils/images/Products/${image.key}`)

    return (
        <div className="wrapper_product_admin_item">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                    <img src={productImg} alt="" className="img-fluid"/>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                    <div className="content">
                        <h3>{title}</h3>
                        <p>R$: {cost.toFixed(2).replace('.', ',')}</p>
                        <p>{description}</p>
                        <div className="row">
                            <Link to={`/admin/produtos/editar/${_id}`}>Editar</Link>
                            <button type="button">Deletar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminProductItem