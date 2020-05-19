import React from 'react'
import { Link } from 'react-router-dom'

import { About } from '../../../../../utils'

import './style.scss'

const AdminProductItem = ({ data, deleteItem }) => {
	const { _id, title, cost, description, image } = data

	let productImg = ''
	if (!image) {
		productImg = About
	} else {
		productImg = require(`../../../../../utils/images/Products/${image.key}`)
	}

	return (
		<div className="col-12 col-sm-12 col-md-6 col-lg-12">
			<div className="wrapper_product_admin_item">
				<div className="row">
					<div className="col-12 col-sm-12 col-md-12 col-lg-4">
						<img src={productImg} alt="" className="img-fluid" />
					</div>
					<div className="col-12 col-sm-12 col-md-12 col-lg-8">
						<div className="content">
							<h3 className="title">{title}</h3>
							<p className="cost">R$: {cost.toFixed(2).replace('.', ',')}</p>
							<p className="description"><span>Descrição:</span> {description}</p>
							<div className="row">
								<Link to={`/admin/produtos/editar/${_id}`}>Editar</Link>
								<button type="button" className="deleteItem" onClick={() => deleteItem(_id)}>Deletar</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AdminProductItem