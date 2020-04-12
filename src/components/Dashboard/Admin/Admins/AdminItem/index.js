import React from 'react'
import { Link } from 'react-router-dom'

import editDate from '../../../../../utils/scripts/editDate'

import './style.scss'

const AdminItem = ({ admin, alert }) => {
    return (
        <ul className="wrapper_admins_all_body">
            <div className="row">
                <li className="col-6 col-sm-6 col-md-4 col-lg-3">{admin.name}</li>
                <li className="col-3 col-sm-3 col-md-5 col-lg-4 d-none d-md-block">{admin.email}</li>
                <li className="col-6 col-sm-6 col-md-3 col-lg-2">
                    {admin.role}
                    <button type="button" className="delete_item d-block d-lg-none">
                        <Link to ={`/admin/admins/edit/${admin._id}`}><i class="fas fa-user-edit"></i></Link>
                        <i class="fas fa-trash-alt" onClick={() => alert(admin._id)}></i>
                    </button>
                </li>
                <li className="col-3 col-sm-3 col-md-4 col-lg-3 d-none d-lg-block">
                    {editDate(admin.createAt)}
                    <button type="button" className="delete_item">
                        <Link to ={`/admin/admins/edit/${admin._id}`}><i class="fas fa-user-edit"></i></Link>
                        <i class="fas fa-trash-alt" onClick={() => alert(admin._id)}></i>
                    </button>
                </li>
            </div>
        </ul>
    )
}

export default AdminItem