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
			},
			{
				createAt: "2020-04-08T22:54:21.851Z",
				_id: "5e8e5712694f8b399ca12399",
				title: "Quadrado um",
				quantify: 2,
				color: "vermelho",
			},
			{
				createAt: "2020-04-08T22:54:21.851Z",
				_id: "5e8e5712694f8b399ca12399",
				title: "Quadrado um",
				quantify: 2,
				color: "vermelho",
			}
		]
	)

	useEffect(() => {
		window.scrollTo(0, 0)
		token()
		loadUser(history)
	}, [history, loadUser])

	return (
		<CtnDashboard>
			<CtnHeadDashboard>
				<CtnHeadBtn>
					<AdminTitle text="Pedidos" />
					<div className="pb-2 pb-sm-2 pb-md-0">
						<ButtonBgWhite text="Deletar todos" />
					</div>
				</CtnHeadBtn>
			</CtnHeadDashboard>
			<div className="row">
			{Requests.map((request) => (
				<RequestItem request={request} />
			))}
			</div>
		</CtnDashboard>
	)
}

const mapDispatchToProps = dispatch => ({
	loadUser: (history) => dispatch(loadUser(history))
})

export default connect(null, mapDispatchToProps)(withRouter(Requets))