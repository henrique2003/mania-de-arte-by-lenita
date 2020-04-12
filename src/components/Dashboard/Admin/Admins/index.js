import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert'
import { loadUser } from '../../../../redux/actions/Auth'
import token from '../../../../config/token'
import api from '../../../../services/api'

import AdminItem from './AdminItem'

import './style.scss'

const Admins = ({ loadUser, history }) => {
    const [Admins, setAdmins] = useState([])
    useEffect(() => {
        window.scrollTo(0, 0)
        token()
        loadUser(history)

        async function loadAdmins() {
            let res = await api.get('/admin')

            setAdmins(res.data.docs)
        }
        loadAdmins()
    }, [loadUser, history])

    async function deleteAll() {
        try {
            let res = await api.delete('/deleteall/admin')
            toast.success(res.data)
            return setAdmins(res.data.docs)
        } catch (error) {
            return toast.error("Erro ao deletar")
        }
    }

    async function delete_item(id) {
        try {
            let res = await api.delete(`/admin/${id}`)
            toast.success("Deletado com sucesso")
            return setAdmins(res.data.docs)
        } catch (error) {
            return toast.error("Erro ao deletar")
        }
    }

    function alert(id) {
        confirmAlert({
            title: 'Você tem certeza',
            message: 'Você tem certeza que deseja apagar esse usuário?',
            buttons: [
                {
                    label: 'Deletar',
                    onClick: () => delete_item(id)
                },
                {
                    label: 'Cancelar'
                }
            ]
        })
    }

    return (
        <div className="wrapper_admins">
            <div className="container-fluid">
                <div className="wrapper_title">
                    <h3>Admins</h3>
                    <div className="wrapper_title_actions">
                        <Link to="admin/admins/novo" className="action_add">Criar novo</Link>
                        <button type="button" onClick={deleteAll} className="action_delete_all">Deletar todos</button>
                    </div>
                </div>
                <div className="wrapper_admins_all">
                    <ul className="wrapper_admins_all_head">
                        <div className="row">
                            <li className="col-6 col-sm-6 col-md-4 col-lg-3">Nome</li>
                            <li className="col-3 col-sm-3 col-md-5 col-lg-4 d-none d-md-block">Email</li>
                            <li className="col-6 col-sm-6 col-md-3 col-lg-2">Função</li>
                            <li className="col-3 col-sm-3 col-md-4 col-lg-3 d-none d-lg-block">Criação</li>
                        </div>
                    </ul>
                    {Admins.map((admin) => (<AdminItem key={admin._id} admin={admin} alert={alert}/>))}
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    loadUser: (history) => dispatch(loadUser(history))
})

export default connect(null, mapDispatchToProps)(withRouter(Admins))