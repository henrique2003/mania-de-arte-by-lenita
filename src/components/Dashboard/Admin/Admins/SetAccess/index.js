import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Select from 'react-select'

import { loadUser } from '../../../../../redux/actions/Auth/index'
import token from '../../../../../config/token'
import api from '../../../../../services/api'

import './style.scss'

const SetAccess = ({ loadUser, history }) => {
    const [Role, setRole] = useState({ role: null })

    useEffect(() => {
        window.scrollTo(0,0)
        token()
        loadUser(history)
    }, [loadUser, history])

    return (
        <div className="wrapper_set_access">

        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    loadUser: (history) => dispatch(loadUser(history))
})

export default connect(null, mapDispatchToProps)(withRouter(SetAccess))