import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { confirmAlert } from 'react-confirm-alert'

import { loadUser } from '../../../redux/actions/Auth'
import token from '../../../config/token'
import api from '../../../services/api'

import { Paginate } from '../../Bases'
import RequestItem from './RequestItem'

import {
	ButtonBgWhite,
	AdminTitle,
	CtnDashboard,
	CtnHeadDashboard,
	CtnHeadBtn,
	Warning
} from '../../Bases'

import './style.scss'
import { toast } from 'react-toastify'

const Requets = ({ loadUser, history, location }) => {
	const [Requests, setRequests] = useState([])
	const [paginate, setPaginate] = useState({
		path: '/admin/pedidos',
		pages: 1
	})

	useEffect(() => {
		window.scrollTo(0, 0)
		token()
		loadUser(history)

		async function loadRequests() {
			let res = await api.get(`/purchased${location.search}`)
			setRequests(res.data.docs)
			setPaginate({
				path: '/admin/pedidos',
				pages: res.data.pages
			})
		}
		loadRequests()
	}, [history, loadUser, location.search])

	async function deleteAll() {
		try {
			await api.delete('/all/purchased')
			setRequests([])
			setPaginate({
				path: '/admin/pedidos',
				pages: 1
			})

			return toast.success("Resolvidos com sucesso")
		} catch (error) {
			return toast.warn("Erro ao resolver")
		}
	}

	async function delete_item(id) {
		try {
			let res = await api.delete(`/purchased/${id}`)
			setRequests(res.data.docs)
			setPaginate({
				pages: res.data.pages
			})

			return toast.success("Resolvido com sucesso")
		} catch (error) {
			return toast.warn("Erro ao resolver")
		}
	}

	function alertDelete(id) {
		confirmAlert({
			title: 'Você tem certeza',
			message: 'Você tem certeza que deseja resolver esse pedido?',
			buttons: [
				{
					label: 'Resolver',
					onClick: () => delete_item(id)
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
			message: 'Você tem certeza que deseja resolver todos os pedidos?',
			buttons: [
				{
					label: 'Resolver',
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
			<CtnHeadDashboard>
				<CtnHeadBtn>
					<AdminTitle text="Pedidos" />
					<div className="pb-2 pb-sm-2 pb-md-0">
						<ButtonBgWhite text="Resolver todos" action={alertDeleteAll} />
					</div>
				</CtnHeadBtn>
			</CtnHeadDashboard>
			<div className="row">
				{Requests.length === 0 ? <Warning text="Sem pedidos no momento" color="greey"/>:
				Requests.map((request) => (
					<RequestItem key={request._id} request={request} alert={alertDelete} />
				))}
			</div>
			<Paginate paginate={paginate} />
		</CtnDashboard>
	)
}

const mapDispatchToProps = dispatch => ({
	loadUser: (history) => dispatch(loadUser(history))
})

export default connect(null, mapDispatchToProps)(withRouter(Requets))