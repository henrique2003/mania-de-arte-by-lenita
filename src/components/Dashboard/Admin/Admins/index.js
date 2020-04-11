import React from 'react'
import { Link } from 'react-router-dom'

import './style.scss'

const Admins = () => {
    return (
        <div className="wrapper_admins">
            <div className="container-fluid">
                <div className="wrapper_title">
                    <h3>Admins</h3>
                    <div className="wrapper_title_actions">
                        <Link to="admin/admins/novo" className="action_add">Criar novo</Link>
                        <button type="submit" className="action_delete_all">Deletar todos</button>
                    </div>
                </div>
                <div className="wrapper_admins_all">
                    <ul className="wrapper_admins_all_head">
                        <div className="row">
                            <li className="col-6 col-sm-6 col-md-4 col-lg-3">Nome</li>
                            <li className="col-3 col-sm-3 col-md-4 col-lg-3 d-none d-md-block">Email</li>
                            <li className="col-6 col-sm-6 col-md-4 col-lg-3">Função</li>
                            <li className="col-3 col-sm-3 col-md-4 col-lg-3 d-none d-lg-block">Criação</li>
                        </div>
                    </ul>
                    <ul className="wrapper_admins_all_body">
                        <div className="row">
                            <li className="col-6 col-sm-6 col-md-4 col-lg-3">Sandra</li>
                            <li className="col-3 col-sm-3 col-md-4 col-lg-3 d-none d-md-block">sandrasio.cristioglu@gmail.com</li>
                            <li className="col-6 col-sm-6 col-md-4 col-lg-3">Ajudante</li>
                            <li className="col-3 col-sm-3 col-md-4 col-lg-3 d-none d-lg-block">17/02/2003</li>
                        </div>
                    </ul>
                    <ul className="wrapper_admins_all_body">
                        <div className="row">
                            <li className="col-6 col-sm-6 col-md-4 col-lg-3">Sandra</li>
                            <li className="col-3 col-sm-3 col-md-4 col-lg-3 d-none d-md-block">sandrasio.cristioglu@gmail.com</li>
                            <li className="col-6 col-sm-6 col-md-4 col-lg-3">Ajudante</li>
                            <li className="col-3 col-sm-3 col-md-4 col-lg-3 d-none d-lg-block">17/02/2003</li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Admins