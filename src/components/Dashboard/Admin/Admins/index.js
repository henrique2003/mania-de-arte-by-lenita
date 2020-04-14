import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert'

import { loadPrimary } from '../../../../redux/actions/Auth'
import token from '../../../../config/token'
import api from '../../../../services/api'

import AdminItem from './AdminItem'
import {
    Paginate,
    ButtonBgWhite,
    AdminTitle,
    CtnHeadDashboard,
    CtnDashboard,
    CtnHeadBtn
} from '../../../Bases'

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
        <CtnDashboard>
            <CtnHeadDashboard>
                <CtnHeadBtn>
                    <AdminTitle text="Admins" />
                    <div className="pb-2 pb-sm-2 pb-md-0">
                        <ButtonBgWhite text={`Criar novo`} link="/admin/criar/admins" />
                        <ButtonBgWhite action={alertDeleteAll} text={`Deletar todos`} />
                    </div>
                </CtnHeadBtn>
            </CtnHeadDashboard>
            <div className="wrapper_admins_all">
                <ul className="wrapper_admins_all_head">
                    <div className="row">
                        <li className="col-6 col-sm-6 col-md-4 col-lg-3">Nome</li>
                        <li className="col-3 col-sm-3 col-md-5 col-lg-4 d-none d-md-block">Email</li>
                        <li className="col-6 col-sm-6 col-md-3 col-lg-2">Função</li>
                        <li className="col-3 col-sm-3 col-md-4 col-lg-3 d-none d-lg-block">Data de criação</li>
                    </div>
                </ul>
                {Admins.map((admin) => (<AdminItem key={admin._id} admin={admin} alert={alertDelete} />))}
                <Paginate paginate={paginate} />
            </div>
        </CtnDashboard>
    )
}

const mapDispatchToProps = dispatch => ({
    loadPrimary: (history) => dispatch(loadPrimary(history))
})

export default connect(null, mapDispatchToProps)(withRouter(Admins))