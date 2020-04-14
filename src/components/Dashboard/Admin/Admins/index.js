import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert'

import { loadPrimary } from '../../../../redux/actions/Auth'
import token from '../../../../config/token'
import api from '../../../../services/api'

import AdminItem from './components/AdminItem'
import Paginate from '../../../Bases/Paginate'

import './style.scss'

const Admins = ({ loadPrimary, history, location }) => {
    const [Admins, setAdmins] = useState([])
    const [paginate, setPaginate] = useState({
        page: 1,
        pages: 1 
    })

    useEffect(() => {
        window.scrollTo(0, 0)
        token()
        loadPrimary(history)

        async function loadAdmins() {
            let res = await api.get(`/admin${location.search}`)

            setAdmins(res.data.docs)
            setPaginate({
                path: '/admin/admins',
                pages: res.data.pages
            })
        }
        loadAdmins()
    }, [loadPrimary, history, location.search])

    async function deleteAll() {
        try {
            let res = await api.delete('/deleteall/admin')
            toast.success(res.data)
            setAdmins(res.data.docs)
            setPaginate({
                path: '/admin/admins',
                pages: res.data.pages
            })
        } catch (error) {
            return toast.error("Erro ao deletar")
        }
    }

    async function delete_item(id) {
        try {
            let res = await api.delete(`/admin/${id}`)
            toast.success("Deletado com sucesso")
            setAdmins(res.data.docs)
            setPaginate({
                path: '/admin/admins',
                pages: res.data.pages
            })
        } catch (error) {
            return toast.error("Erro ao deletar")
        }
    }

    function alertDelete(id) {
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
    
    function alertDeleteAll() {
        confirmAlert({
            title: 'Você tem certeza',
            message: 'Você tem certeza que deseja apagar todos os seus ajudantes?',
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
        <div className="wrapper_admins">
            <div className="container-fluid">
                <div className="wrapper_title">
                    <h3>Admins</h3>
                    <div>
                        <Link to="/admin/criar/admins" className="action_add">
                            <i className="fas fa-plus mr-1 mr-md-2"></i>
                            Criar novo</Link>
                        <button type="button" onClick={alertDeleteAll} className="action_delete_all">
                            <i className="fas fa-minus mr-1 mr-md-2"></i>
                            Deletar todos</button>
                    </div>
                </div>
                <div className="wrapper_admins_all">
                    <ul className="wrapper_admins_all_head">
                        <div className="row">
                            <li className="col-6 col-sm-6 col-md-4 col-lg-3">Nome</li>
                            <li className="col-3 col-sm-3 col-md-5 col-lg-4 d-none d-md-block">Email</li>
                            <li className="col-6 col-sm-6 col-md-3 col-lg-2">Função</li>
                            <li className="col-3 col-sm-3 col-md-4 col-lg-3 d-none d-lg-block">Data de criação</li>
                        </div>
                    </ul>
                    {Admins.map((admin) => (<AdminItem key={admin._id} admin={admin} alert={alertDelete}/>))}
                    <Paginate paginate={paginate} />
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    loadPrimary: (history) => dispatch(loadPrimary(history))
})

export default connect(null, mapDispatchToProps)(withRouter(Admins))