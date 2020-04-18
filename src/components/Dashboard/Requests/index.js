import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { loadUser } from '../../../redux/actions/Auth'
import token from '../../../config/token'

import RequestItem from './RequestItem'

import {
	ButtonBgWhite,
	AdminTitle,
	CtnDashboard,
	CtnHeadDashboard,
	CtnHeadBtn
} from '../../Bases'

import './style.scss'

const Requets = ({ loadUser, history }) => {
	const [Requests, setRequests] = useState(
		[
			{
				createAt: "2020-04-08T22:54:21.851Z",
				_id: "5e8e5712694f8b399ca12399",
				title: "Quadrado um",
				quantify: 2,
				color: "vermelho",
				user: {
					name: "Henrique de Melo",
					zip_code: "04205000",
					state: "Amazonas",
					city: "Acre",
					neighborhood: "ipiranga",
					street: "chacara clabim",
					number: 203,
					complement: "apto: 223"
				}
			},
			{
				createAt: "2020-04-08T22:54:21.851Z",
				_id: "5e8e5712694f8b399a12399",
				title: "Quadrado um",
				quantify: 2,
				color: "vermelho",
				user: {
					name: "Henrique de Melo",
					zip_code: "04205000",
					state: "Amazonas",
					city: "Acre",
					neighborhood: "ipiranga",
					street: "chacara clabim",
					number: 203,
					complement: "apto: 223"
				}
			},
			{
				createAt: "2020-04-08T22:54:21.851Z",
				_id: "5e8e572694f8b399ca12399",
				title: "Quadrado um",
				quantify: 2,
				color: "vermelho",
				user: {
					name: "Henrique de Melo",
					zip_code: "04205000",
					state: "Amazonas",
					city: "Acre",
					neighborhood: "ipiranga",
					street: "chacara clabim",
					number: 203,
					complement: "apto: 223"
				}
			}
		]
	)

	useEffect(() => {
		window.scrollTo(0, 0)
		token()
		loadUser(history)
	}, [history, loadUser])

	function deleter(id) {
		// return id
	}

	return (
		<CtnDashboard>
			<CtnHeadDashboard>
				<CtnHeadBtn>
					<AdminTitle text="Pedidos" />
					<div className="pb-2 pb-sm-2 pb-md-0">
						<ButtonBgWhite text="Resolver todos" />
					</div>
				</CtnHeadBtn>
			</CtnHeadDashboard>
			<div className="row">
				{Requests.map((request) => (
					<RequestItem key={request._id} request={request} onClick={deleter}/>
				))}
			</div>
		</CtnDashboard>
	)
}

const mapDispatchToProps = dispatch => ({
	loadUser: (history) => dispatch(loadUser(history))
})

export default connect(null, mapDispatchToProps)(withRouter(Requets))