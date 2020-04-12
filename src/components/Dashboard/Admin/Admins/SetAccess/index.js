import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Select from 'react-select'

import { loadPrimary } from '../../../../../redux/actions/Auth/index'
import token from '../../../../../config/token'
import api from '../../../../../services/api'

import './style.scss'

const SetAccess = ({ loadPrimary, history }) => {
    const [Role, setRole] = useState({ role: null })

    useEffect(() => {
        window.scrollTo(0,0)
        token()
        loadPrimary(history)
    }, [loadPrimary, history])

    return (
        <div className="wrapper_set_access">

        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    loadPrimary: (history) => dispatch(loadPrimary(history))
})

export default connect(null, mapDispatchToProps)(withRouter(SetAccess))