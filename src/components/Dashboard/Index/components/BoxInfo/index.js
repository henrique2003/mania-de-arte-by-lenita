import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

const BoxInfo = ({ icon, text, length, link, role }) => {
    return (
        <div className="col-12 col-sm-12 col-md-4 mt-4">
            <div className="wrapper_boxinfo">
                <div className="wrapper_boxinfo_content">
                    <i className={icon}></i>
                    <p>{text}: {length}</p>
                    {role && <Link to={`/admin/${link}`}>Ver todos</Link>}
                </div>
            </div>
        </div>
    )
}

export default BoxInfo