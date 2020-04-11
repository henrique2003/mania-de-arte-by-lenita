import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { loadUser } from '../../../../redux/actions/Auth'
import token from '../../../../config/token'
import api from '../../../../services/api'

import './style.scss'

const Admins = ({ loadUser, history }) => {
    const [Admins, setAdmins] = useState([
        {
            _id: "5e640654aa6e6e2180ef9aad",
            name: "Sandra",
            email: "henrique.de.melo.cristioglu@gmail.com",
            role: "Primary",
            createAt: "2020-03-07T20:38:44.227Z"
        },
        {
            _id: "5e640654aa6e6e2180ef9sad",
            name: "Sandra",
            email: "henrique.de.melo.cristioglu@gmail.com",
            role: "Primary",
            createAt: "2020-03-07T20:38:44.227Z"
        }
    ])
    useEffect(() => {
        window.scrollTo(0, 0)
        token()
        loadUser(history)
    }, [loadUser, history])

    const deleteAll = async () => {
        try {
            let res = await api.delete('/deleteall/admin')
            toast.success(res.data)
            return setAdmins([])
        } catch (error) {
            return toast.error("Erro ao deletar")
        }
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
                    {Admins.map((admin) => (
                        <ul className="wrapper_admins_all_body" key={admin._id}>
                            <div className="row">
                                <li className="col-6 col-sm-6 col-md-4 col-lg-3">{admin.name}</li>
                                <li className="col-3 col-sm-3 col-md-5 col-lg-4 d-none d-md-block">{admin.email}</li>
                                <li className="col-6 col-sm-6 col-md-3 col-lg-2">{admin.role}</li>
                                <li className="col-3 col-sm-3 col-md-4 col-lg-3 d-none d-lg-block">{admin.createAt}</li>
                            </div>
                        </ul>
                    ))}
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    loadUser: (history) => dispatch(loadUser(history))
})

export default connect(null, mapDispatchToProps)(withRouter(Admins))