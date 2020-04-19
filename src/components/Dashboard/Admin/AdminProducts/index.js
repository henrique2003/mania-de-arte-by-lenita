import React, { useEffect, useState } from 'react'

import { Paginate, Warning, CtnDashboard, CtnHeadDashboard, CtnHeadBtn, AdminTitle, LinkBgWhite, ButtonBgWhite } from '../../../Bases'

import AdminProductItem from './AdminProductItem'

import './style.scss'

const AdminProducts = () => {
	const [paginate, setPaginate] = useState({
		path: '/admin/produtos',
		pages: 1
	})
	const [Products, setProducts] = useState([
		{
			"image": {
				"name": "dribble-3.jpg",
				"key": "092e1e29e39b5dc7-dribble-3.jpg"
			},
			"purchased": 0,
			"_id": "5e9b78a99f20a82e383757d7",
			"title": "Quadro crochet - 2",
			"cost": 120,
			"description": "Muito bom para isso e para aquilo e mais aquilo, e tudo aquilo também",
			"role": "crochet",
			"createAt": "2020-04-18T22:01:13.423Z",
		},
		{
			"image": {
				"name": "dribble-3.jpg",
				"key": "092e1e29e39b5dc7-dribble-3.jpg"
			},
			"purchased": 0,
			"_id": "5e9b78a99f20a82e383757d7",
			"title": "Quadro crochet - 2",
			"cost": 120,
			"description": "Muito bom para isso e para aquilo e mais aquilo, e tudo aquilo também",
			"role": "crochet",
			"createAt": "2020-04-18T22:01:13.423Z",
		},
		{
			"image": {
				"name": "dribble-3.jpg",
				"key": "092e1e29e39b5dc7-dribble-3.jpg"
			},
			"purchased": 0,
			"_id": "5e9b78a99f20a82e383757d7",
			"title": "Quadro crochet - 2",
			"cost": 120,
			"description": "Muito bom para isso e para aquilo e mais aquilo, e tudo aquilo também",
			"role": "crochet",
			"createAt": "2020-04-18T22:01:13.423Z",
		}
	])

	useEffect(() => {
		window.scrollTo(0, 0)
	})

	return (
		<CtnDashboard>
			<CtnHeadDashboard className="mb-0">
				<CtnHeadBtn>
					<AdminTitle text="Produtos cadastrados" />
					<div className="pb-2 pb-sm-2 pb-md-0">
						<LinkBgWhite text="Criar novo" path="/admin/criar/admins" />
						<ButtonBgWhite text={`Deletar todos`} />
					</div>
				</CtnHeadBtn>
			</CtnHeadDashboard>
			<div className="row">
				{Products.length === 0 ?
					<Warning color="greey" text="Sem produtos no momento!" /> :
					Products.map((product) => (
						<AdminProductItem data={product} />
					))
				}
			</div>
			<Paginate paginate={paginate} />
		</CtnDashboard>
	)
}

export default AdminProducts