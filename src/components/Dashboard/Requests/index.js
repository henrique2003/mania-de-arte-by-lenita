import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import './style.scss'
import { loadUser } from '../../../redux/actions/Auth'

const Requets = () => {
    return (
        <div className="wrapper_requets">
            <div className="container-fluid">
            <div className="wrapper_requets_title">
                    <h3>Admins</h3>
                    <div>
                        <button type="button" className="action_delete_all"> Deletar todos </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    loadUser: (history) => dispatch(loadUser(history))
})

export default connect(null, mapDispatchToProps)(withRouter(Requets))