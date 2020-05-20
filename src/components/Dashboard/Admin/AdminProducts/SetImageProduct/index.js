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

  return (
    <CtnDashboard className="wrapper_set_image">
      <div className="wrapper_dropzone">
        <Dropzone accept="image/*" onDropAccepted={() => { }}>
          {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
            <div
              className={`wrapper_drop_container 
              ${isDragActive && 'drag_acctive'} 
              ${isDragReject && 'drag_reject'}`}
              {...getRootProps()}
              isDragActive={isDragActive}
              isDragReject={isDragReject}
            >
              <input {...getInputProps()} />
              jogue sua imagem aqui
            </div>
          )}
        </Dropzone>
      </div>
    </CtnDashboard>
  )
}

const mapDispatchToProps = dispatch => ({
  loadPrimary: (history) => dispatch(loadPrimary(history))
})

export default connect(null, mapDispatchToProps)(withRouter(SetImageProduct))
