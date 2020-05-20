import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
// import { } from 'react-drop'

import { loadPrimary } from '../../../../../redux/actions/Auth'
import token from '../../../../../config/token'

import { CtnDashboard, Form } from '../../../../Bases'

import './style.scss'

const SetImageProduct = ({ loadPrimary, history }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
    token()
    loadPrimary(history)
  }, [history, loadPrimary])

  const onSubmit = e => {
    e.preventDefault()


  }

  return (
    <CtnDashboard>
      <Form onSubmit={onSubmit}>

      </Form>
    </CtnDashboard>
  )
}

const mapDispatchToProps = dispatch => ({
  loadPrimary: (history) => dispatch(loadPrimary(history))
})

export default connect(null, mapDispatchToProps)(withRouter(SetImageProduct))
