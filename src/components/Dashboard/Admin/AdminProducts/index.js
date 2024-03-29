import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { toast } from 'react-toastify'
import { confirmAlert } from 'react-confirm-alert'

import api from '../../../../services/api'
import token from '../../../../config/token'

import { Paginate, Warning, CtnDashboard, CtnHeadDashboard, CtnHeadBtn, AdminTitle, LinkBgWhite, ButtonBgWhite } from '../../../Bases'
import { loadPrimary } from '../../../../redux/actions/Auth'
import AdminProductItem from './AdminProductItem'

import './style.scss'

const AdminProducts = ({ loadPrimary, history }) => {
	const [paginate, setPaginate] = useState({
		path: '/admin/produtos',
		pages: 1
	})
	const [Products, setProducts] = useState([])

	useEffect(() => {
		window.scrollTo(0, 0)
		token()
		loadPrimary(history)
		loadProducts()

		async function loadProducts() {
			let res = await api.get('/products')
			setProducts(res.data.docs)
		}
	}, [loadPrimary, history])

	async function deleteAll() {
		await api.delete('/deleteall/products')
		toast.success('Deletados com sucesso')
		setProducts([])
		setPaginate({
			path: '/admin/produtos',
			pages: 1
		})
	}

	async function deleteItem(id) {
		let products = await api.delete(`/products/${id}`)
		toast.success('Deletado com sucesso')
		setProducts(products.data.docs)
		setPaginate({
			path: '/admin/produtos',
			pages: products.data.pages
		})
	}

	function alertDelete(id) {
		confirmAlert({
			title: 'Você tem certeza',
			message: 'Você tem certeza que deseja apagar esse usuário?',
			buttons: [
				{
					label: 'Deletar',
					onClick: () => deleteItem(id)
				},
				{
					label: 'Cancelar'
				}
			]
		})
	}

	function alertDeleteAll() {
		confirmAlert({
			title: 'Você tem certeza',
			message: 'Você tem certeza que deseja apagar todos os produtos?',
			buttons: [
				{
					label: 'Deletar',
					onClick: () => deleteAll()
				},
				{
					label: 'Cancelar'
				}
			]
		})
	}

	return (
		<CtnDashboard>
			<CtnHeadDashboard className="mb-0">
				<CtnHeadBtn>
					<AdminTitle text="Produtos cadastrados" />
					<div className="pb-2 pb-sm-2 pb-md-0">
						<LinkBgWhite text="Criar novo" path="/admin/criar/produto" />
						<ButtonBgWhite text={`Deletar todos`} action={alertDeleteAll} />
					</div>
				</CtnHeadBtn>
			</CtnHeadDashboard>
			<div className="row">
				{Products.length === 0 ?
					<Warning color="greey" text="Sem produtos no momento!" /> :
					Products.map((product) => (
						<AdminProductItem key={product._id} data={product} deleteItem={alertDelete} />
					))}
			</div>
			<Paginate paginate={paginate} />
		</CtnDashboard>
	)
}

const mapDispatchToProps = dispatch => ({
	loadPrimary: (history) => dispatch(loadPrimary(history))
})

export default connect(null, mapDispatchToProps)(withRouter(AdminProducts))