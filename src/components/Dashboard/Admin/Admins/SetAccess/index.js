import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { loadPrimary } from '../../../../../redux/actions/Auth/index'
import token from '../../../../../config/token'
import api from '../../../../../services/api'

import './style.scss'

const SetAccess = ({ loadPrimary, history }) => {
    const [Role, setRole] = useState({ role: "Primary" })

    useEffect(() => {
        window.scrollTo(0, 0)
        token()
        loadPrimary(history)
    }, [loadPrimary, history])

    const onSubmit = e => {
        e.preventDefault()

        console.log(Role.role)
    }

    return (
        <div className="wrapper_set_access">
            <form className="wrapper_set_access_form col-12 col-sm-12 col-md-11 col-lg-8  mx-auto" onSubmit={onSubmit}>
                <div className="form-row">
                    <div className="form-group col-12 col-sm-12 col-md-6">
                        <select id="inputState" className="form-control" onChange={(e) => setRole({ role: e.target.value })}>
                            <option value="Primary">Admin</option>
                            <option value="Secondary">Ajudante</option>
                        </select>
                    </div>
                    <div className="form-group col-12 col-sm-12 col-md-6 text-center">
                        <button type="submit">Editar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    loadPrimary: (history) => dispatch(loadPrimary(history))
})

export default connect(null, mapDispatchToProps)(withRouter(SetAccess))