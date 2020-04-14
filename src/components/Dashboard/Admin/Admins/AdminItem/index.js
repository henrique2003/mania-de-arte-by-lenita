import React from 'react'
import { Link } from 'react-router-dom'

import { editDate } from '../../../../../utils'

import './style.scss'

const AdminItem = ({ admin, alert }) => {
    const { name, email, role, _id, createAt } = admin

    return (
        <ul className="wrapper_admins_all_body">
            <div className="row">
                <li className="col-6 col-sm-6 col-md-4 col-lg-3">{name}</li>
                <li className="col-3 col-sm-3 col-md-5 col-lg-4 d-none d-md-block">{email}</li>
                <li className="col-6 col-sm-6 col-md-3 col-lg-2">
                    {role === "Primary" ? "Admin" : "Ajudante"}
                    <button type="button" className="delete_item d-block d-lg-none">
                        <Link to={`/admin/admins/${_id}`} >
                            <i className="fas fa-user-edit"></i>
                        </Link>
                        <i className="fas fa-trash-alt" onClick={() => alert(_id)}></i>
                    </button>
                </li>
                <li className="col-3 col-sm-3 col-md-4 col-lg-3 d-none d-lg-block">
                    {editDate(createAt)}
                    <button type="button" className="delete_item">
                        <Link to={`/admin/admins/${_id}`} >
                            <i className="fas fa-user-edit"></i>
                        </Link>
                        <i className="fas fa-trash-alt" onClick={() => alert(_id)}></i>
                    </button>
                </li>
            </div>
        </ul>
    )
}

export default AdminItem