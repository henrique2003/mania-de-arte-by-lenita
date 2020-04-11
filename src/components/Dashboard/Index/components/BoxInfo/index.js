import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import './style.scss'

const BoxInfo = ({ icon, text, length, link, user }) => {
    return (
        <div className="col-12 col-sm-12 col-md-4 mt-4">
            <div className="wrapper_boxinfo">
                <div className="wrapper_boxinfo_content">
                    <i className={icon}></i>
                    <p>{text}: {length}</p>
                    {user.role === "Primary" && <Link to={`/admin/${link}`}>Ver todos</Link>}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(BoxInfo)