import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Dropzone from 'react-dropzone'

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
      <Form>
        <Dropzone accept="image/*" onDropAccepted={() => { }}>
          {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
            <div
              className="wrapper_drop_container"
              {...getRootProps()}
              isDragActive={isDragActive}
              isDragReject={isDragReject}
            >
              <input {...getInputProps()} />
            </div>
          )}
        </Dropzone>
      </Form>
    </CtnDashboard>
  )
}

const mapDispatchToProps = dispatch => ({
  loadPrimary: (history) => dispatch(loadPrimary(history))
})

export default connect(null, mapDispatchToProps)(withRouter(SetImageProduct))
