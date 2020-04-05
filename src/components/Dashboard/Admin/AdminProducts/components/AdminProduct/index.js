import React from 'react'
import { Link } from 'react-router-dom'
import ProductImage from '../../../../../../utils/images/Products/produto-test.jpg'
import './style.scss'

const AdminProduct = ({ id, title, cost, description }) => {
    const delteProduct = id => {
        //Delete product
    }

    return (
        <div key={id} className="col-12 col-sm-12 col-md-6 col-lg-4 wrapper_product">
            <div className="wrapper_product_card">
                <img src={ProductImage} alt="" className="img-fluid" />
                <div className="text-left p-lg-3">
                    <h4 className="wrapper_product_card_title">{title}</h4>
                    <div className="mt-3">
                        <p className="wrapper_product_card_cost">R$ - {cost}</p>
                        <p className="wrapper_product_card_cost_description">{description}</p>
                    </div>
                    <Link className="btn_edit" to={`/admin/produto/editar/${id}`}>Editar</Link>
                    <button className="btn_delete" type="button" onClick={() => delteProduct(id)}>Apagar</button>
                </div>
            </div>
        </div>
    )
}

export default AdminProduct